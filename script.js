const adventureText = document.getElementById('adventureText');
const startButton = document.getElementById('startButton');

function updateAdventureText(text) {
  adventureText.innerHTML = text;
}

function startAdventure() {
  startButton.style.display = 'none';
  adventureText.style.display = 'block';
  updateAdventureText("You find yourself in a dark forest. There's a path to the north and a river to the east. What do you do?<br><br>" +
                      "<button onclick='goNorth()'>Go North</button> " +
                      "<button onclick='goEast()'>Go East</button>");
}

// ... rest of the game functions ...

function restartGame() {
  startButton.style.display = 'block';
  adventureText.style.display = 'none';
}

startButton.addEventListener('click', startAdventure);