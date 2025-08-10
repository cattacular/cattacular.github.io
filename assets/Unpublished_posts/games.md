---
layout: page
title: "Games"
permalink: /games/
---

# Interactive Games

Welcome to my game collection! Here are some interactive games I've created.

## Cookie Clicker

<div id="clicker-game" style="text-align: center; padding: 20px; border: 2px solid #333; border-radius: 10px; margin: 20px 0; background: #f5f5f5;">
  <h3>Cookie Clicker</h3>
  <p>Click the button to earn cookies!</p>
  <button id="clickButton" style="font-size: 18px; padding: 10px 20px; margin: 10px; cursor: pointer;">🍪 Click Me!</button>
  <button id="upgradeButton" style="font-size: 14px; padding: 8px 16px; margin: 10px; cursor: pointer;">Upgrade (Cost: 10)</button>
  <div id="stats" style="margin-top: 15px;">
    <p>Cookies: <span id="cookieCount">0</span></p>
    <p>Click Power: <span id="clickPower">1</span></p>
  </div>
</div>

## Snake Game

<div style="text-align: center; margin: 20px 0;">
  <canvas id="snakeCanvas" width="400" height="400" style="border: 2px solid #333; background: #000;"></canvas>
  <p><strong>Controls:</strong> Use arrow keys to move. Press R to restart.</p>
</div>

## Memory Card Game

<div id="memory-game" style="text-align: center; margin: 20px 0;">
  <div id="memory-grid" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; max-width: 400px; margin: 0 auto;"></div>
  <p>Score: <span id="memory-score">0</span> | Moves: <span id="memory-moves">0</span></p>
  <button id="memory-reset" style="margin-top: 10px; padding: 8px 16px;">New Game</button>
</div>

<script>
// Cookie Clicker Game
let cookies = 0;
let clickPower = 1;

const clickButton = document.getElementById('clickButton');
const upgradeButton = document.getElementById('upgradeButton');
const cookieCount = document.getElementById('cookieCount');
const clickPowerDisplay = document.getElementById('clickPower');

if (localStorage.getItem('clickerGame')) {
    const savedState = JSON.parse(localStorage.getItem('clickerGame'));
    cookies = savedState.cookies || 0;
    clickPower = savedState.clickPower || 1;
    updateDisplay();
}

function clickCookie() {
    cookies += clickPower;
    updateDisplay();
    saveGame();
}

function upgradeClickPower() {
    if (cookies >= 10) {
        cookies -= 10;
        clickPower += 1;
        updateDisplay();
        saveGame();
    }
}

function updateDisplay() {
    cookieCount.textContent = cookies;
    clickPowerDisplay.textContent = clickPower;
    upgradeButton.textContent = `Upgrade (Cost: 10)`;
    upgradeButton.disabled = cookies < 10;
}

function saveGame() {
    localStorage.setItem('clickerGame', JSON.stringify({
        cookies: cookies,
        clickPower: clickPower
    }));
}

clickButton.addEventListener('click', clickCookie);
upgradeButton.addEventListener('click', upgradeClickPower);
updateDisplay();

// Memory Game
const memoryGrid = document.getElementById('memory-grid');
const memoryScore = document.getElementById('memory-score');
const memoryMoves = document.getElementById('memory-moves');
const memoryReset = document.getElementById('memory-reset');

let cards = [];
let flippedCards = [];
let score = 0;
let moves = 0;
let canFlip = true;

const emojis = ['🐱', '🐶', '🐸', '🐼', '🐨', '🐯', '🦊', '🐻'];

function createMemoryGame() {
    cards = [...emojis, ...emojis].sort(() => Math.random() - 0.5);
    memoryGrid.innerHTML = '';
    
    cards.forEach((emoji, index) => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.dataset.index = index;
        card.dataset.emoji = emoji;
        card.style.cssText = `
            width: 80px; height: 80px; 
            background: #333; color: white; 
            display: flex; align-items: center; justify-content: center; 
            font-size: 2em; cursor: pointer; border-radius: 5px;
        `;
        card.textContent = '?';
        card.addEventListener('click', flipCard);
        memoryGrid.appendChild(card);
    });
}

function flipCard() {
    if (!canFlip || this.classList.contains('flipped') || this.classList.contains('matched')) return;
    
    this.textContent = this.dataset.emoji;
    this.classList.add('flipped');
    flippedCards.push(this);
    
    if (flippedCards.length === 2) {
        canFlip = false;
        moves++;
        memoryMoves.textContent = moves;
        
        if (flippedCards[0].dataset.emoji === flippedCards[1].dataset.emoji) {
            flippedCards.forEach(card => card.classList.add('matched'));
            score += 10;
            memoryScore.textContent = score;
            flippedCards = [];
            canFlip = true;
        } else {
            setTimeout(() => {
                flippedCards.forEach(card => {
                    card.textContent = '?';
                    card.classList.remove('flipped');
                });
                flippedCards = [];
                canFlip = true;
            }, 1000);
        }
    }
}

memoryReset.addEventListener('click', () => {
    score = 0;
    moves = 0;
    memoryScore.textContent = score;
    memoryMoves.textContent = moves;
    createMemoryGame();
});

createMemoryGame();
</script>

<script src="{{ site.baseurl }}/assets/js/snake-game.js"></script>
<script>
document.addEventListener('DOMContentLoaded', function() {
    window.snakeGame = new SnakeGame('snakeCanvas');
});
</script>
