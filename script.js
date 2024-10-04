console.log('game.js loaded');

document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed in game.js');
  
  const adventureText = document.getElementById('adventureText');
  const startButton = document.getElementById('startButton');

  console.log('adventureText element:', adventureText);
  console.log('startButton element:', startButton);

  function updateAdventureText(text) {
    console.log('Updating adventure text:', text);
    adventureText.innerHTML = text;
  }

  function startAdventure() {
    console.log('Starting adventure');
    startButton.style.display = 'none';
    adventureText.style.display = 'block';
    updateAdventureText("You find yourself in a dark forest. There's a path to the north and a river to the east. What do you do?<br><br>" +
                        "<button onclick='goNorth()'>Go North</button> " +
                        "<button onclick='goEast()'>Go East</button>");
  }

  // ... rest of the game functions ...

  function restartGame() {
    console.log('Restarting game');
    startButton.style.display = 'block';
    adventureText.style.display = 'none';
  }

  console.log('Adding click event listener to start button');
  startButton.addEventListener('click', startAdventure);
});

console.log('End of game.js file');