// ===== IMPORTS =====
import { levels } from "./levels.js";
import {
  drawPlatforms,
  drawObstacles,
  checkPlatformCollision,
  checkObstacleCollision,
} from "./platforms.js";

import { player, resetPlayer, drawPlayer } from "./player.js";

// ===== FOR MOBILE FEUTURES =====

const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");
const jumpBtn = document.getElementById("jumpBtn"); 
const retryBtn = document.getElementById("retryBtn");

// ===== CANVAS =====
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const starUIElements = document.querySelectorAll(".star-ui");

// ===== GAME STATE =====
let currentLevel = 1;
let platforms = [];
let obstacles = [];
let stars = [];
let score = 0;
let cameraY = 0;
let keys = {};
let goal = null;
let gameState = "playing";

// Camera control constant (no magic numbers)
const CAMERA_OFFSET_Y = canvas.height / 2;

// ===== LEVEL LOADING =====
function loadLevel(levelNumber) {
  const level = levels[levelNumber];
  if (!level) return;

  stars = (level.stars || []).map(star => ({
  x: star.x,
  y: star.y,
  collected: false
}));
  score = 0;
  starUIElements.forEach(el => {
  el.classList.remove("collected");
});
  currentLevel = levelNumber;
  goal = level.goal;

  platforms = level.platforms;
  obstacles = level.obstacles;

  resetPlayer(level.playerStart.x, level.playerStart.y);
  player.velocityY = 0;
  player.gravity = level.gravity;
  player.isOnGround = false;

  cameraY = 0;
  gameState = "playing";
}

// ===== PLAYER DEATH =====
function killPlayer() {
  if (gameState !== "playing") return;
  gameState = "dead";
}

// ===== INPUT SYSTEM =====
function setupInput() {

  window.addEventListener("keydown", (e) => {
    const key = e.key.toLowerCase();
    keys[key] = true;

    if (gameState === "dead" && key === "r") {
      loadLevel(currentLevel);
    }

    if (
      (key === " " || key === "arrowup" || key === "w") &&
      player.isOnGround
    ) {
      player.velocityY = player.jumpForce;
      player.isOnGround = false;
    }
  });

  window.addEventListener("keyup", (e) => {
    keys[e.key.toLowerCase()] = false;
  });
}
// ===== UPDATE SYSTEMS =====
function handleMovement() {
  if (keys["arrowleft"] || keys["a"]) {
    player.x -= player.speedX;
  }

  if (keys["arrowright"] || keys["d"]) {
    player.x += player.speedX;
  }
}

function applyGravity() {
  player.velocityY += player.gravity;
  player.y += player.velocityY;
}

function updateCamera() {
  if (player.y < CAMERA_OFFSET_Y) {
    cameraY = player.y - CAMERA_OFFSET_Y;
  }
}

// ===== MAIN UPDATE =====
function update() {
  if (gameState !== "playing") return;

  handleMovement();

  // APPLY GRAVITY FIRST
  player.velocityY += player.gravity;

  // THEN check collision BEFORE moving fully
  checkPlatformCollision(player, platforms);

  // THEN update position
  player.y += player.velocityY;

  checkObstacleCollision(player, obstacles, killPlayer);

  // Fall detection
if (player.y > canvas.height + 200) {
  killPlayer();
}
  checkStarCollision();
  checkGoalCollision();
  updateCamera();
}
// ===== DRAW SYSTEM =====


function drawDeathScreen() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "white";
  ctx.font = "28px Arial";
  ctx.textAlign = "center";
  ctx.fillText("You Died", canvas.width / 2, canvas.height / 2 - 20);
  ctx.fillText("Press R to Retry", canvas.width / 2, canvas.height / 2 + 20);
}

function draw() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawPlatforms(ctx, platforms, cameraY);
drawObstacles(ctx, obstacles, cameraY);
drawStars();
drawGoal();
drawPlayer(ctx, cameraY);

 if (gameState === "dead") {
  drawOverlayScreen("You Died", "Press R to Retry");
}

if (gameState === "won") {
  drawOverlayScreen("Level Complete!", " Congratulations!");
}
}

// ===== GAME LOOP =====
function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

// ===== START GAME =====
export function initGame(levelNumber = 1) {
  setupInput();
  loadLevel(levelNumber);
  gameLoop();
}


function drawGoal() {
  if (!goal) return;

  const screenY = goal.y - cameraY;

  ctx.fillStyle = "lime";
  ctx.fillRect(goal.x, screenY, goal.width, goal.height);

  ctx.fillStyle = "white";
  ctx.font = "12px Arial";
  ctx.fillText("GOAL", goal.x + 2, screenY - 5);
}

function checkGoalCollision() {
  if (!goal) return;

  if (
    player.x < goal.x + goal.width &&
    player.x + player.width > goal.x &&
    player.y < goal.y + goal.height &&
    player.y + player.height > goal.y
  ) {
    gameState = "won";
  }
}

function drawWinScreen() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  ctx.fillStyle = "lime";
  ctx.font = "28px Arial";
  ctx.textAlign = "center";
  ctx.fillText("Level Complete!", canvas.width / 2, canvas.height / 2);

  const collected = stars.filter(s => s.collected).length;

   ctx.font = "20px Arial";
  ctx.fillText(collected + " / 3 Stars", canvas.width / 2, canvas.height / 2 + 20);
}

function drawOverlayScreen(title, subtitle) {
  ctx.save();

  ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  ctx.font = "32px Arial";
  ctx.fillText(title, canvas.width / 2, canvas.height / 2 - 20);

  ctx.font = "18px Arial";
  ctx.fillText(subtitle, canvas.width / 2, canvas.height / 2 + 20);

  ctx.restore();
}

function drawStars() {
  stars.forEach(star => {
    if (star.collected) return;

    const screenY = star.y - cameraY;

    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(
      star.x + 5,   // center properly
      screenY + 5,
      6,
      0,
      Math.PI * 2
    );
    ctx.fill();
  });
}

function checkStarCollision() {
  stars.forEach((star, index) => {

    if (star.collected) return;

    const starSize = 10;

    const collision =
      player.x < star.x + starSize &&
      player.x + player.width > star.x &&
      player.y < star.y + starSize &&
      player.y + player.height > star.y;

    if (collision) {
      star.collected = true;

      // ⭐ UPDATE UI
      if (starUIElements[index]) {
        starUIElements[index].classList.add("collected");
      }
    }
  });
}

leftBtn.addEventListener("touchstart", () => keys["a"] = true);
leftBtn.addEventListener("touchend", () => keys["a"] = false);

rightBtn.addEventListener("touchstart", () => keys["d"] = true);
rightBtn.addEventListener("touchend", () => keys["d"] = false);

jumpBtn.addEventListener("touchstart", () => {
  if (player.isOnGround) {
    player.velocityY = player.jumpForce;
    player.isOnGround = false;
  }
});

retryBtn.addEventListener("touchstart", () => {
  loadLevel(currentLevel); // restart current level
});