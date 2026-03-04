// ===== LEVEL SYSTEM =====


let currentLevelData = null;

// ===== LEVEL 1 BASE =====
export const levels = {
  1: {
    gravity: 0.5,
    playerStart: { x: 50, y: 520 },

    platforms: [
  { x: 10, y: 580, width: 120, height: 10 },
  { x: 150, y: 490, width: 100, height: 10 },
  { x: 40, y: 402, width: 80,  height: 10 },
  { x: 250, y: 390, width: 100, height: 10 },
  { x: 130, y: 310, width: 90,  height: 10 },
  { x: 210, y: 40, width: 120, height: 10 },
  { x: 250, y: 220, width: 80,  height: 10 },
  { x: 130, y: 130, width: 90, height: 10 },
  { x: 110, y: -45, width: 80, height: 10 },
  { x: 210, y: -115, width: 85, height: 10 },
  { x: 100,  y: -200, width: 90, height: 10 },
  { x: 230, y: -285, width: 100, height: 10 },
  { x: 120, y: -370, width: 85, height: 10 },
  { x: 220, y: -455, width: 90, height: 10 },
  { x: 100,  y: -540, width: 95, height: 10 },
  { x: 210, y: -625, width: 100, height: 10 },
  { x: 130, y: -710, width: 90, height: 10 }
],

    obstacles: [
      { x: 210, y: 480, width: 10, height: 10},
      { x: 290, y: 210, width: 10, height: 10},
      { x: 270, y: -125, width: 10, height: 10},
      { x: 290, y: 210, width: 10, height: 10},
    ],

    stars: [
      { x: 150 + 50/2, y: 402 - 10, collected: false },
      { x: 130 + 90/2, y: 220 - 10, collected: false },  
      { x: 210 + 100/2, y: -455 - 10, collected: false }
    ],

    goal: { x: 130, y: -720, width: 10, height: 10 }
  },
    2: {
  gravity: 0.5,
  playerStart: { x: 60, y: 540 },

  platforms: [

    // ===== BASE =====
    { x: 0, y: 600, width: 200, height: 12 },

    // ===== PERFECT 60px STEPS =====
    { x: 220, y: 560, width: 100, height: 12 },
    { x: 40,  y: 500, width: 100, height: 12 },
    { x: 220, y: 440, width: 100, height: 12 },

    // Moving (same height pattern)
    {
      x: 80,
      y: 380,
      width: 100,
      height: 12,
      move: true,
      speed: 1.0,
      direction: 1,
      minX: 40,
      maxX: 280
    },

    { x: 220, y: 320, width: 100, height: 12 },
    { x: 40,  y: 260, width: 100, height: 12 },

    {
      x: 120,
      y: 200,
      width: 90,
      height: 12,
      move: true,
      speed: 1.2,
      direction: -1,
      minX: 40,
      maxX: 300
    },

    { x: 220, y: 140, width: 100, height: 12 },
    { x: 60,  y: 80,  width: 100, height: 12 },

    // Final jump
    { x: 180, y: 20, width: 110, height: 12 }
  ],

  obstacles: [
    // Mines force edge landings
    { x: 260, y: 548, width: 12, height: 8 },
    { x: 80,  y: 488, width: 12, height: 8 },
    { x: 260, y: 308, width: 12, height: 8 },
    { x: 200, y: 8, width: 12, height: 8}
  ],

  stars: [
    { x: 260, y: 520 },
    { x: 80,  y: 220 },
    { x: 200, y: -10 }
  ],

  goal: { x: 220, y: -40, width: 20, height: 20 }
},
  3: {
  gravity: 0.5,
  playerStart: { x: 50, y: 400 },

  platforms: [
    { x: 50, y: 450, width: 120, height: 10 },
    { x: 200, y: 400, width: 100, height: 10 },
    { x: 40, y: 360, width: 90, height: 10 },
    { x: 230, y: 310, width: 100, height: 10 },
    { x: 60, y: 250, width: 80, height: 10 },
    { x: 210, y: 200, width: 120, height: 10 },
    { x: 130, y: 150, width: 90, height: 10 },
    { x: 250, y: 100, width: 80, height: 10 },
    { x: 100, y: 50, width: 90, height: 10 },
    { x: 210, y: 0, width: 100, height: 10 },
    { x: 130, y: -50, width: 90, height: 10 },
    { x: 220, y: -100, width: 100, height: 10 },
  ],

  obstacles: [
    { x: 230, y: 300, width: 10, height: 10 },
    { x: 210, y: 0, width: 10, height: 10 },
    { x: 130, y: -50, width: 10, height: 10 },
  ],

  stars: [
    { x: 200 + 50, y: 400 - 10, collected: false },  // mid-level star
    { x: 210 + 50, y: 200 - 10, collected: false },  // higher star
    { x: 220 + 50, y: -100 - 10, collected: false }  // near goal
  ],

  goal: { x: 220, y: -120, width: 10, height: 10 }
}
};
