// ===== PLATFORMS MODULE =====

// Draw Platforms
export function drawPlatforms(ctx, platforms, cameraY) {
  if (!platforms || platforms.length === 0) return;

  ctx.fillStyle = "#6a5acd";

  platforms.forEach(platform => {
    if (!platform) return;

    ctx.fillRect(
      platform.x,
      platform.y - cameraY,
      platform.width,
      platform.height
    );
  });
}


// Platform Collision
export function checkPlatformCollision(player, platforms) {

  player.isOnGround = false;

  platforms.forEach(platform => {

    const playerBottom = player.y + player.height;
    const nextBottom = playerBottom + player.velocityY;

    const playerRight = player.x + player.width;
    const playerLeft = player.x;

    const platformTop = platform.y;
    const platformLeft = platform.x;
    const platformRight = platform.x + platform.width;

    const isFalling = player.velocityY >= 0;

    const horizontalOverlap =
      playerRight > platformLeft &&
      playerLeft < platformRight;

    const landing =
      playerBottom <= platformTop &&
      nextBottom >= platformTop;

    if (isFalling && horizontalOverlap && landing) {

      player.velocityY = 0;
      player.y = platformTop - player.height;
      player.isOnGround = true;

      // ✅ ONLY move player if standing on moving platform
      if (platform.move === true && platform.vx) {
        player.x += platform.vx;
      }
    }

  });
}

// ===== OBSTACLES MODULE =====

export function drawObstacles(ctx, obstacles, cameraY) {
  if (!obstacles || obstacles.length === 0) return;

  ctx.fillStyle = "red";

  obstacles.forEach(obstacle => {
    if (!obstacle) return;

    ctx.fillRect(
      obstacle.x,
      obstacle.y - cameraY,
      obstacle.width,
      obstacle.height
    );
  });
}


export function checkObstacleCollision(player, obstacles, killPlayer) {
  obstacles.forEach(obstacle => {

    const playerRight = player.x + player.width;
    const playerLeft = player.x;
    const playerBottom = player.y + player.height;
    const playerTop = player.y;

    const obstacleRight = obstacle.x + obstacle.width;
    const obstacleLeft = obstacle.x;
    const obstacleTop = obstacle.y;
    const obstacleBottom = obstacle.y + obstacle.height;

    const collision =
      playerRight > obstacleLeft &&
      playerLeft < obstacleRight &&
      playerBottom > obstacleTop &&
      playerTop < obstacleBottom;

    if (collision) {
      killPlayer();
    }
  });
}

