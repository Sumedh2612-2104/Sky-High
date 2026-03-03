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
export function drawPlayer(ctx, cameraY) {
  const screenY = player.y - cameraY;
  const centerX = player.x + player.width / 2;
  const topY = screenY;

  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = 2;

  // Head
  ctx.beginPath();
  ctx.arc(centerX, topY + 8, 6, 0, Math.PI * 2);
  ctx.stroke();

  // Body
  ctx.beginPath();
  ctx.moveTo(centerX, topY + 14);
  ctx.lineTo(centerX, topY + 28);
  ctx.stroke();

  // Arms
  ctx.beginPath();
  ctx.moveTo(centerX, topY + 18);
  ctx.lineTo(centerX - 8, topY + 24);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(centerX, topY + 18);
  ctx.lineTo(centerX + 8, topY + 24);
  ctx.stroke();

  // Legs
  ctx.beginPath();
  ctx.moveTo(centerX, topY + 28);
  ctx.lineTo(centerX - 6, topY + 38);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(centerX, topY + 28);
  ctx.lineTo(centerX + 6, topY + 38);
  ctx.stroke();
}