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
    updateAdventureText("You stir, cozy in bed. The cool fall air blows in from your open window. You could go back to sleep, or you could get up and start your day. What do you do?<br><br>" +
                        "<button onclick='goBackToSleep()'>Go back to sleep</button> " +
                        "<button onclick='getUp()'>Get up</button>");
  }

  function goBackToSleep() {
    updateAdventureText("You drift back to sleep, enjoying the cozy warmth of your bed. A few hours later, you wake up feeling refreshed. It's now late morning. Do you want to:<br><br>" +
                        "<button onclick='makeBreakfast()'>Make breakfast</button> " +
                        "<button onclick='goForAWalk()'>Go for a walk</button>");
  }

  function getUp() {
    updateAdventureText("You decide to start your day early. The crisp morning air invigorates you as you stretch. What's your first move?<br><br>" +
                        "<button onclick='makeCoffee()'>Make coffee</button> " +
                        "<button onclick='doYoga()'>Do some yoga</button>");
  }

  function makeBreakfast() {
    updateAdventureText("You head to the kitchen and prepare a delicious breakfast. The smell of fresh pancakes fills the air. After eating, you feel energized. What's next?<br><br>" +
                        "<button onclick='startHobbyProject()'>Start a hobby project</button> " +
                        "<button onclick='callAFriend()'>Call a friend</button>");
  }

  function goForAWalk() {
    updateAdventureText("You decide to take a refreshing walk in the nearby park. The autumn leaves crunch under your feet. During your walk, you encounter:<br><br>" +
                        "<button onclick='petADog()'>A friendly dog</button> " +
                        "<button onclick='findACoin()'>A shiny coin on the ground</button>");
  }

  function makeCoffee() {
    updateAdventureText("The aroma of freshly brewed coffee fills your kitchen. As you sip your coffee, you contemplate your plans for the day. Do you want to:<br><br>" +
                        "<button onclick='checkEmails()'>Check your emails</button> " +
                        "<button onclick='readABook()'>Read a book</button>");
  }

  function doYoga() {
    updateAdventureText("You roll out your yoga mat and begin a gentle morning routine. After your session, you feel centered and calm. What would you like to do next?<br><br>" +
                        "<button onclick='takeAShower()'>Take a shower</button> " +
                        "<button onclick='meditateMore()'>Meditate for a bit longer</button>");
  }

  // ... Add more functions for other choices ...

  function restartGame() {
    console.log('Restarting game');
    startButton.style.display = 'block';
    adventureText.style.display = 'none';
  }

  console.log('Adding click event listener to start button');
  startButton.addEventListener('click', startAdventure);
});

console.log('End of game.js file');