---
layout: post
title: Pokemon Clone Game
categories: Games JavaScript
---

# Pokemon Clone Game

A simple turn-based RPG with a top-down perspective and tile-based movement. Explore the world, encounter creatures, and battle them in turn-based combat!

## How to Play

- Use **WASD** or **Arrow Keys** to move your character
- Walk into creatures to start battles
- In battles, choose your actions from the menu
- Defeat creatures to gain experience and level up

<div id="game-container" style="width: 100%; max-width: 800px; margin: 0 auto; text-align: center;">
  <canvas id="gameCanvas" width="800" height="600" style="border: 2px solid #333; background: #87CEEB;"></canvas>
  <div id="ui-container" style="margin-top: 10px;">
    <div id="stats" style="display: inline-block; margin: 0 20px; padding: 10px; background: #f0f0f0; border-radius: 5px;">
      <strong>Player Stats:</strong><br>
      HP: <span id="player-hp">100</span>/<span id="player-max-hp">100</span><br>
      Level: <span id="player-level">1</span><br>
      XP: <span id="player-xp">0</span>
    </div>
    <div id="battle-ui" style="display: none; margin-top: 10px; padding: 10px; background: #ffebee; border-radius: 5px;">
      <div id="battle-text" style="margin-bottom: 10px;"></div>
      <button id="attack-btn" onclick="attack()">Attack</button>
      <button id="heal-btn" onclick="heal()">Heal</button>
      <button id="run-btn" onclick="run()">Run</button>
    </div>
  </div>
</div>

<script>
// Game state
const gameState = {
  player: {
    x: 5,
    y: 5,
    hp: 100,
    maxHp: 100,
    level: 1,
    xp: 0,
    attack: 15,
    defense: 10
  },
  creatures: [
    { x: 8, y: 8, hp: 50, maxHp: 50, attack: 10, defense: 5, name: "Goblin", xpReward: 20 },
    { x: 12, y: 12, hp: 80, maxHp: 80, attack: 15, defense: 8, name: "Orc", xpReward: 35 },
    { x: 15, y: 6, hp: 60, maxHp: 60, attack: 12, defense: 6, name: "Troll", xpReward: 25 }
  ],
  inBattle: false,
  currentEnemy: null,
  map: []
};

// Tile types
const TILES = {
  GRASS: 0,
  WATER: 1,
  MOUNTAIN: 2
};

// Colors for tiles
const TILE_COLORS = {
  [TILES.GRASS]: '#90EE90',
  [TILES.WATER]: '#4682B4',
  [TILES.MOUNTAIN]: '#8B4513'
};

// Initialize map
function initMap() {
  const mapSize = 20;
  gameState.map = [];
  
  for (let y = 0; y < mapSize; y++) {
    gameState.map[y] = [];
    for (let x = 0; x < mapSize; x++) {
      // Create a simple map with grass, some water, and mountains
      if (x === 0 || y === 0 || x === mapSize - 1 || y === mapSize - 1) {
        gameState.map[y][x] = TILES.MOUNTAIN; // Border
      } else if (Math.random() < 0.1) {
        gameState.map[y][x] = TILES.WATER;
      } else {
        gameState.map[y][x] = TILES.GRASS;
      }
    }
  }
}

// Canvas setup
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const TILE_SIZE = 30;

// Draw functions
function drawMap() {
  for (let y = 0; y < gameState.map.length; y++) {
    for (let x = 0; x < gameState.map[y].length; x++) {
      const tile = gameState.map[y][x];
      ctx.fillStyle = TILE_COLORS[tile];
      ctx.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
      
      // Add some texture
      ctx.strokeStyle = '#666';
      ctx.lineWidth = 1;
      ctx.strokeRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }
  }
}

function drawPlayer() {
  ctx.fillStyle = '#FF6B6B';
  ctx.fillRect(
    gameState.player.x * TILE_SIZE + 5,
    gameState.player.y * TILE_SIZE + 5,
    TILE_SIZE - 10,
    TILE_SIZE - 10
  );
  
  // Player eyes
  ctx.fillStyle = '#000';
  ctx.fillRect(
    gameState.player.x * TILE_SIZE + 8,
    gameState.player.y * TILE_SIZE + 8,
    3,
    3
  );
  ctx.fillRect(
    gameState.player.x * TILE_SIZE + 19,
    gameState.player.y * TILE_SIZE + 8,
    3,
    3
  );
}

function drawCreatures() {
  gameState.creatures.forEach(creature => {
    if (creature.hp > 0) {
      ctx.fillStyle = '#8B0000';
      ctx.fillRect(
        creature.x * TILE_SIZE + 5,
        creature.y * TILE_SIZE + 5,
        TILE_SIZE - 10,
        TILE_SIZE - 10
      );
      
      // Creature eyes
      ctx.fillStyle = '#FFD700';
      ctx.fillRect(
        creature.x * TILE_SIZE + 8,
        creature.y * TILE_SIZE + 8,
        3,
    3
      );
      ctx.fillRect(
        creature.x * TILE_SIZE + 19,
        creature.y * TILE_SIZE + 8,
        3,
        3
      );
    }
  });
}

function drawUI() {
  // Draw camera offset to center on player
  const cameraX = Math.max(0, Math.min(gameState.player.x - 10, gameState.map[0].length - 20));
  const cameraY = Math.max(0, Math.min(gameState.player.y - 8, gameState.map.length - 16));
  
  ctx.save();
  ctx.translate(-cameraX * TILE_SIZE, -cameraY * TILE_SIZE);
  
  drawMap();
  drawCreatures();
  drawPlayer();
  
  ctx.restore();
}

// Movement
function canMoveTo(x, y) {
  if (x < 0 || y < 0 || x >= gameState.map[0].length || y >= gameState.map.length) {
    return false;
  }
  return gameState.map[y][x] !== TILES.MOUNTAIN && gameState.map[y][x] !== TILES.WATER;
}

function movePlayer(dx, dy) {
  if (gameState.inBattle) return;
  
  const newX = gameState.player.x + dx;
  const newY = gameState.player.y + dy;
  
  if (canMoveTo(newX, newY)) {
    gameState.player.x = newX;
    gameState.player.y = newY;
    
    // Check for creature encounters
    checkForEncounters();
  }
}

function checkForEncounters() {
  const creature = gameState.creatures.find(c => 
    c.hp > 0 && c.x === gameState.player.x && c.y === gameState.player.y
  );
  
  if (creature) {
    startBattle(creature);
  }
}

// Battle system
function startBattle(enemy) {
  gameState.inBattle = true;
  gameState.currentEnemy = enemy;
  
  document.getElementById('battle-ui').style.display = 'block';
  document.getElementById('battle-text').textContent = `A wild ${enemy.name} appears!`;
  
  updateStats();
}

function attack() {
  if (!gameState.inBattle || !gameState.currentEnemy) return;
  
  const enemy = gameState.currentEnemy;
  const damage = Math.max(1, gameState.player.attack - enemy.defense);
  enemy.hp = Math.max(0, enemy.hp - damage);
  
  document.getElementById('battle-text').textContent = `You deal ${damage} damage to ${enemy.name}!`;
  
  if (enemy.hp <= 0) {
    endBattle(true);
  } else {
    // Enemy attacks back
    setTimeout(() => {
      enemyAttack();
    }, 1000);
  }
}

function enemyAttack() {
  if (!gameState.inBattle || !gameState.currentEnemy) return;
  
  const enemy = gameState.currentEnemy;
  const damage = Math.max(1, enemy.attack - gameState.player.defense);
  gameState.player.hp = Math.max(0, gameState.player.hp - damage);
  
  document.getElementById('battle-text').textContent = `${enemy.name} deals ${damage} damage to you!`;
  updateStats();
  
  if (gameState.player.hp <= 0) {
    endBattle(false);
  }
}

function heal() {
  if (!gameState.inBattle) return;
  
  const healAmount = 30;
  gameState.player.hp = Math.min(gameState.player.maxHp, gameState.player.hp + healAmount);
  
  document.getElementById('battle-text').textContent = `You heal for ${healAmount} HP!`;
  updateStats();
  
  // Enemy attacks after healing
  setTimeout(() => {
    enemyAttack();
  }, 1000);
}

function run() {
  if (!gameState.inBattle) return;
  
  const success = Math.random() > 0.5;
  if (success) {
    document.getElementById('battle-text').textContent = "You successfully ran away!";
    setTimeout(() => {
      endBattle(false);
    }, 1000);
  } else {
    document.getElementById('battle-text').textContent = "You couldn't escape!";
    setTimeout(() => {
      enemyAttack();
    }, 1000);
  }
}

function endBattle(playerWon) {
  if (playerWon) {
    const xpGained = gameState.currentEnemy.xpReward;
    gameState.player.xp += xpGained;
    
    document.getElementById('battle-text').textContent = 
      `You defeated ${gameState.currentEnemy.name}! Gained ${xpGained} XP!`;
    
    // Check for level up
    const xpNeeded = gameState.player.level * 50;
    if (gameState.player.xp >= xpNeeded) {
      levelUp();
    }
  } else {
    document.getElementById('battle-text').textContent = "You were defeated!";
    // Reset player position
    gameState.player.x = 5;
    gameState.player.y = 5;
    gameState.player.hp = gameState.player.maxHp;
  }
  
  setTimeout(() => {
    gameState.inBattle = false;
    gameState.currentEnemy = null;
    document.getElementById('battle-ui').style.display = 'none';
    updateStats();
  }, 2000);
}

function levelUp() {
  gameState.player.level++;
  gameState.player.maxHp += 20;
  gameState.player.hp = gameState.player.maxHp;
  gameState.player.attack += 5;
  gameState.player.defense += 3;
  
  document.getElementById('battle-text').textContent += ` Level up! You are now level ${gameState.player.level}!`;
}

function updateStats() {
  document.getElementById('player-hp').textContent = gameState.player.hp;
  document.getElementById('player-max-hp').textContent = gameState.player.maxHp;
  document.getElementById('player-level').textContent = gameState.player.level;
  document.getElementById('player-xp').textContent = gameState.player.xp;
}

// Input handling
document.addEventListener('keydown', (e) => {
  switch(e.key.toLowerCase()) {
    case 'w':
    case 'arrowup':
      movePlayer(0, -1);
      break;
    case 's':
    case 'arrowdown':
      movePlayer(0, 1);
      break;
    case 'a':
    case 'arrowleft':
      movePlayer(-1, 0);
      break;
    case 'd':
    case 'arrowright':
      movePlayer(1, 0);
      break;
  }
});

// Game loop
function gameLoop() {
  drawUI();
  requestAnimationFrame(gameLoop);
}

// Initialize and start
initMap();
updateStats();
gameLoop();
</script>

## Game Features

- **Top-down perspective** with tile-based movement
- **Turn-based combat system** with attack, heal, and run options
- **Experience and leveling system**
- **Multiple enemy types** with different stats
- **Simple but functional UI** showing player stats and battle options

## Controls

- **WASD** or **Arrow Keys**: Move your character
- **Mouse**: Click battle buttons during encounters

The game includes a simple map with grass, water, and mountain tiles. Walk around to find creatures and battle them to gain experience and level up!
