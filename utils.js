function logError(message) {
  console.error(`[Adventure Game Error]: ${message}`);
}

export function updateAdventureText(sceneData) {
  const adventureTextElement = document.getElementById('adventureText');
  adventureTextElement.innerHTML = ''; // Clear existing content

  // Check if there's an image to display
  if (sceneData.image) {
    const imgElement = document.createElement('img');
    imgElement.src = sceneData.image;
    imgElement.alt = "Scene";
    imgElement.className = "scene-image";
    adventureTextElement.appendChild(imgElement);
  }

  // Create a new div element for the text
  const textContainer = document.createElement('div'); // Create a container for the text
  textContainer.className = 'text-container'; // Add class for styling
  const originalText = sceneData.text; // Keep the original text for typing effect
  textContainer.innerHTML = originalText; // Set innerHTML to the formatted text
  adventureTextElement.appendChild(textContainer); // Append the text element to the adventure text

  let index = 0;
  function typeWriter() {
    // Clear the text element before starting the typewriter effect
    textContainer.innerHTML = ''; // Clear the text element

    function typeNextCharacter() {
      if (index < originalText.length) {
        textContainer.innerHTML += originalText.charAt(index); // Append one character at a time
        index++;
        const randomDelay = Math.floor(Math.random() * (50 - 25 + 1)) + 25;
        setTimeout(typeNextCharacter, randomDelay);
      } else {
        // Text finished typing, now add choice buttons
        const choicesElement = document.createElement('div'); // Create a container for choices
        choicesElement.className = 'button-container'; // Add class for styling
        sceneData.choices.forEach(choice => {
          const button = document.createElement('button');
          button.textContent = choice.text;
          button.onclick = () => handleChoice(choice.action);
          choicesElement.appendChild(button);
        });
        adventureTextElement.appendChild(choicesElement); // Append choices to the adventure text
      }
    }

    typeNextCharacter(); // Start typing the text
  }

  typeWriter(); // Call the typeWriter function

  // Scroll to the top of the content after updating
  document.getElementById('tv-screen').scrollTop = 0;
}

// Add this new function to handle button clicks
export function handleChoice(action) {
  const [chapterName, functionName] = action.split('.');
  const chapter = window[chapterName];
  
  if (!chapter) {
    logError(`Chapter "${chapterName}" not found.`);
    return;
  }
  
  const nextFunction = chapter[functionName];
  
  if (typeof nextFunction !== 'function') {
    logError(`Function "${functionName}" not found in chapter "${chapterName}".`);
    return;
  }
  
  nextFunction();
}
