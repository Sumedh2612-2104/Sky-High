// ===== PLAYER MODULE =====

export const player = {
  x: 0,
  y: 0,
  width: 30,
  height: 40,
  velocityY: 0,
  speedX: 1,
  gravity: 0.4,
  jumpForce: -10,

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
  const centerX = player.x + player.width / 2;
  const topY = screenY;

  const t = timestamp * 0.01;

  // Animate ONLY when actually moving AND on ground
  const animate = player.isMoving && player.isOnGround;

  const legSwing = animate ? Math.sin(t * 8) * 4 : 0;
  const armSwing = animate ? Math.sin(t * 8) * 3 : 0;

  ctx.save();
  ctx.lineWidth = 8;
  ctx.lineCap = "round";
  ctx.strokeStyle = "white";
  ctx.fillStyle = "white";

  // ===== HEAD =====
  ctx.beginPath();
  ctx.ellipse(centerX, topY + 7, 4, 5, 0, 0, Math.PI * 2);
  ctx.fill();

  // Eyes
  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(centerX - 2, topY + 7, 1, 0, Math.PI * 2);
  ctx.arc(centerX + 2, topY + 7, 1, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = "white";

  // ===== BODY =====
  ctx.beginPath();
  ctx.moveTo(centerX, topY + 20);
  ctx.lineTo(centerX, topY + 24);
  ctx.stroke();

  // ===== ARMS =====
  ctx.beginPath();
  ctx.moveTo(centerX, topY + 18);
  ctx.lineTo(centerX - 8, topY + 20 + armSwing);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(centerX, topY + 18);
  ctx.lineTo(centerX + 8, topY + 20 - armSwing);
  ctx.stroke();

  // ===== LEGS =====
  ctx.beginPath();
  ctx.moveTo(centerX, topY + 26);
  ctx.lineTo(centerX - 5, topY + 36 + legSwing);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(centerX, topY + 26);
  ctx.lineTo(centerX + 5, topY + 36 - legSwing);
  ctx.stroke();

  ctx.restore();
}