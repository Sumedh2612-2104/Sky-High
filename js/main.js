
import { initGame } from "./engine.js";


initGame();

// ===== SCREEN NAVIGATION SYSTEM =====

const screens = document.querySelectorAll(".screen");

function showScreen(screenId) {
  screens.forEach(screen => {
    screen.classList.remove("active");
  });

  const target = document.getElementById(screenId);
  if (target) {
    target.classList.add("active");
  }
}

// ===== START BUTTON =====

const startBtn = document.getElementById("startBtn");
if (startBtn) {
  startBtn.addEventListener("click", () => {
    showScreen("levels");
  });
}

// ===== INSTRUCTIONS =====

const instructionsBtn = document.getElementById("instructionsBtn");
if (instructionsBtn) {
  instructionsBtn.addEventListener("click", () => {
    showScreen("instructions");
  });
}

// ===== SETTINGS =====

const settingsBtn = document.getElementById("settingsBtn");
if (settingsBtn) {
  settingsBtn.addEventListener("click", () => {
    showScreen("settings");
  });
}

// ===== BACK BUTTONS =====

const backButtons = document.querySelectorAll(".backBtn");
backButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    showScreen("start");
  });
});

// ===== LEVEL BUTTONS =====

const levelButtons = document.querySelectorAll(".level");

levelButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const levelNumber = index + 1;

    showScreen("game");

    // Start game with selected level
    initGame(levelNumber);
  });
});

// ===== SETTINGS LOGIC =====

// Sound Toggle
const soundToggle = document.getElementById("soundToggle");
let soundOn = true;

if (soundToggle) {
  soundToggle.addEventListener("click", () => {
    soundOn = !soundOn;
    soundToggle.textContent = soundOn ? "ON" : "OFF";
  });
}

// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
let darkTheme = true;

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    darkTheme = !darkTheme;

    if (darkTheme) {
      document.body.style.background =
        "radial-gradient(circle at top, #1a1a2e, #0f0f1a)";
      themeToggle.textContent = "Dark";
    } else {
      document.body.style.background =
        "radial-gradient(circle at top, #eeeeff, #ccccff)";
      themeToggle.textContent = "Light";
    }
  });
}