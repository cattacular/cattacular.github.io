import * as Chapter1 from './Chapters/Chapter1.js';
import { updateAdventureText, handleChoice } from './utils.js';

console.log('script.js loaded');

document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed in script.js');
  
  const adventureText = document.getElementById('adventureText');
  const startButton = document.getElementById('startButton');

  console.log('adventureText element:', adventureText);
  console.log('startButton element:', startButton);

  function startAdventure() {
    console.log('startAdventure function called');
    startButton.style.display = 'none';
    adventureText.style.display = 'block';
    console.log('About to call Chapter1.StartChapter1()');
    Chapter1.StartChapter1(); // Start with the first scene in Chapter1
    console.log('Chapter1.StartChapter1() called');
  }

  // Expose chapter functions to global scope for button onclick
  window.Chapter1 = Chapter1;
  // window.Chapter2 = Chapter2;  // Commented out as Chapter2 is not defined yet
  window.handleChoice = handleChoice;  // Add this line

  console.log('Adding click event listener to start button');
  startButton.addEventListener('click', startAdventure);
  console.log('Click event listener added to start button');
});

console.log('End of script.js file');