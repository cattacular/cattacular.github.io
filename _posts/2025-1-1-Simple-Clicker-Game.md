---
layout: post
title: "Simple Clicker Game Demo"
date: 2025-01-01
categories: [games, demo]
---

# Simple Clicker Game Demo

Here's a simple clicker game embedded directly in this post:

<div id="game-container" style="text-align: center; padding: 20px; border: 2px solid #333; border-radius: 10px; margin: 20px 0; background: #f5f5f5;">
  <h3>Cookie Clicker</h3>
  <p>Click the button to earn cookies!</p>
  <button id="clickButton" style="font-size: 18px; padding: 10px 20px; margin: 10px; cursor: pointer;">🍪 Click Me!</button>
  <button id="upgradeButton" style="font-size: 14px; padding: 8px 16px; margin: 10px; cursor: pointer;">Upgrade (Cost: 10)</button>
  <div id="stats" style="margin-top: 15px;">
    <p>Cookies: <span id="cookieCount">0</span></p>
    <p>Click Power: <span id="clickPower">1</span></p>
  </div>
</div>

<script>
// Game variables
let cookies = 0;
let clickPower = 1;

// Get DOM elements
const clickButton = document.getElementById('clickButton');
const upgradeButton = document.getElementById('upgradeButton');
const cookieCount = document.getElementById('cookieCount');
const clickPowerDisplay = document.getElementById('clickPower');

// Load saved game state
if (localStorage.getItem('clickerGame')) {
    const savedState = JSON.parse(localStorage.getItem('clickerGame'));
    cookies = savedState.cookies || 0;
    clickPower = savedState.clickPower || 1;
    updateDisplay();
}

// Click function
function clickCookie() {
    cookies += clickPower;
    updateDisplay();
    saveGame();
}

// Upgrade function
function upgradeClickPower() {
    if (cookies >= 10) {
        cookies -= 10;
        clickPower += 1;
        updateDisplay();
        saveGame();
    }
}

// Update display
function updateDisplay() {
    cookieCount.textContent = cookies;
    clickPowerDisplay.textContent = clickPower;
    upgradeButton.textContent = `Upgrade (Cost: 10)`;
    upgradeButton.disabled = cookies < 10;
}

// Save game state
function saveGame() {
    localStorage.setItem('clickerGame', JSON.stringify({
        cookies: cookies,
        clickPower: clickPower
    }));
}

// Event listeners
clickButton.addEventListener('click', clickCookie);
upgradeButton.addEventListener('click', upgradeClickPower);

// Initialize display
updateDisplay();
</script>

## How This Works

This game is embedded directly in the post using:

1. **HTML container** - Creates the game interface
2. **JavaScript** - Handles game logic
3. **localStorage** - Saves progress between visits
4. **CSS styling** - Makes it look good

The game automatically loads when someone visits the post and saves their progress locally.
