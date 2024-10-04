import * as Chapter1 from './chapter1.js';
import * as Chapter2 from './chapter2.js';

console.log('game.js loaded');

document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed in game.js');
  
  const adventureText = document.getElementById('adventureText');
  const startButton = document.getElementById('startButton');

  console.log('adventureText element:', adventureText);
  console.log('startButton element:', startButton);

  function updateAdventureText(sceneData) {
    let content = '';
    if (sceneData.image) {
      content += `<img src="${sceneData.image}" alt="Scene" class="scene-image"><br>`;
    }
    content += sceneData.text + '<br><br>';
    sceneData.choices.forEach(choice => {
      content += `<button onclick="${choice.action}()">${choice.text}</button> `;
    });
    adventureText.innerHTML = content;
  }

  function startAdventure() {
    startButton.style.display = 'none';
    adventureText.style.display = 'block';
    updateAdventureText({
      text: "You stir, cozy in bed. The cool fall air blows in from your open window. You could go back to sleep, or you could get up and start your day. What do you do?",
      choices: [
        { text: "Go back to sleep", action: "Chapter1.goBackToSleep" },
        { text: "Get up", action: "Chapter1.getUp" }
      ],
      image: "images/cozy-bed.jpg"
    });
  }

  // Expose chapter functions to global scope for button onclick
  window.Chapter1 = Chapter1;
  window.Chapter2 = Chapter2;

  console.log('Adding click event listener to start button');
  startButton.addEventListener('click', startAdventure);
});

console.log('End of game.js file');