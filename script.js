import * as Chapter1 from './Chapters/Chapter1.js';
import * as Chapter2 from './Chapters/Chapter2.js'; // Ensure Chapter2 is imported
import { updateAdventureText, handleChoice } from './utils.js';

console.log('script.js loaded');

document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed in script.js');
  
  const adventureText = document.getElementById('adventureText');
  const startButton = document.getElementById('startButton');
  const powerButton = document.getElementById('powerButton');

  console.log('adventureText element:', adventureText);
  console.log('startButton element:', startButton);
  console.log('powerButton element:', powerButton);

  // Preload the glowing background image
  const glowingBackground = new Image();
  glowingBackground.src = 'Images/TVglowing.png';

  function startAdventure() {
    console.log('startAdventure function called');
    startButton.style.display = 'none';
    adventureText.style.display = 'block';
    console.log('About to call Chapter1.StartChapter1()');
    Chapter1.StartChapter1(); // Start with the first scene in Chapter1
    console.log('Chapter1.StartChapter1() called');
  }

  // Power button functionality
  powerButton.addEventListener('click', () => {
    document.body.style.backgroundImage = `url('${glowingBackground.src}')`; // Change background
    startButton.style.display = 'block'; // Reveal the start button
    powerButton.style.display = 'none'; // Hide the power button after clicking
  });

  // Expose chapter functions to global scope for button onclick
  window.Chapter1 = Chapter1;
  window.Chapter2 = Chapter2; // Ensure Chapter2 is exposed
  window.handleChoice = handleChoice;

  console.log('Adding click event listener to start button');
  startButton.addEventListener('click', startAdventure);
  console.log('Click event listener added to start button');
});

console.log('End of script.js file');
