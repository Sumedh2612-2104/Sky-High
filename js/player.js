// ===== PLAYER MODULE =====

export const player = {
  x: 0,
  y: 0,
  width: 30,
  height: 40,
  velocityY: 0,
  speedX: 1.3,
  gravity: 0.6,
  jumpForce: -11,

  isOnGround: false
};


// Reset player position (called by engine when loading level)
export function resetPlayer(startX, startY) {
  player.x = startX;
  player.y = startY;
  player.velocityY = 0;
  player.isOnGround = false;
}


// Draw stick character
export function drawPlayer(ctx, cameraY, timestamp) {
  const screenY = player.y - cameraY;
  const x = player.x;
  const y = screenY;

  const t = timestamp * 0.01;


  ctx.save();

  // Flip if facing left
  if (player.facingLeft) {
    ctx.translate(x + player.width, 0);
    ctx.scale(-1, 1);
  } else {
    ctx.translate(x, 0);
  }

 

  // ===== BODY =====
  ctx.fillStyle = "white"; // blue outfit
  ctx.fillRect(8, y + 12, 16, 20);

  // ===== HEAD =====
  ctx.fillStyle = "white"; // skin
  ctx.fillRect(10, y, 12, 12);

  // ===== EYES =====
  ctx.fillStyle = "black";
  ctx.fillRect(13, y + 4, 2, 2);
  ctx.fillRect(19, y + 4, 2, 2);

  // ===== ARMS (STATIC) =====
  ctx.fillStyle = "#fafbfd";
  ctx.fillRect(4, y + 14, 4, 14);
  ctx.fillRect(24, y + 14, 4, 14);

  // ===== LEGS =====
  // ===== LEGS (Animated While Moving) =====
const legSwing = player.isMoving && player.isOnGround
  ? Math.sin(timestamp * 0.02) * 4
  : 0;

ctx.fillStyle = "#fafbfd";
ctx.fillRect(10, y + 32 + legSwing, 5, 14);
ctx.fillRect(17, y + 32 - legSwing, 5, 14);

  ctx.restore();
}