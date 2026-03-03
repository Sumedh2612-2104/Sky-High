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
  playerStart: { x: 50, y: 380 },

  platforms: [
    { x: 10, y: 440, width: 120, height: 10 },
    { x: 150, y: 380, width: 100, height: 10 },
    { x: 40, y: 320, width: 80, height: 10 },
    { x: 250, y: 260, width: 100, height: 10 },
    { x: 130, y: 200, width: 90, height: 10 },
    { x: 210, y: 140, width: 120, height: 10 },
    { x: 250, y: 80, width: 80, height: 10 },
    { x: 130, y: 20, width: 90, height: 10 },
    { x: 110, y: -40, width: 80, height: 10 },
    { x: 210, y: -80, width: 85, height: 10 },
    { x: 100, y: -130, width: 90, height: 10 },
    { x: 230, y: -180, width: 100, height: 10 },
    { x: 120, y: -230, width: 85, height: 10 },
    { x: 220, y: -290, width: 90, height: 10 },
    { x: 100, y: -350, width: 95, height: 10 },
    { x: 210, y: -400, width: 100, height: 10 },
    { x: 130, y: -460, width: 90, height: 10 },
    { x: 220, y: -520, width: 100, height: 10 },
    { x: 130, y: -580, width: 90, height: 10 },
    { x: 210, y: -650, width: 100, height: 10 },
    { x: 130, y: -700, width: 90, height: 10 },
  ],

  obstacles: [
    { x: 180, y: 410, width: 10, height: 10 },  // bottom section
    { x: 210, y: 280, width: 10, height: 10 },  // middle hazard
    { x: 250, y: 60, width: 10, height: 10 },   // near mid
    { x: 220, y: -500, width: 10, height: 10 }, // high hazard
  ],

  stars: [
    { x: 250 + 80 / 2, y: 80 - 10, collected: false },   // early platform
    { x: 210 + 100 / 2, y: -290 - 10, collected: false }, // mid challenge
    { x: 130 + 90 / 2, y: -650 - 10, collected: false },  // near goal
  ],

  goal: { x: 130, y: -720, width: 10, height: 10 },
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
