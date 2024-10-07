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

  // Create a new paragraph element and set its innerHTML
  const textElement = document.createElement('div'); // Use a div to contain multiple paragraphs
  textElement.innerHTML = sceneData.text; // Use innerHTML to render HTML content
  adventureTextElement.appendChild(textElement);

  let index = 0;
  function typeWriter() {
    if (index < sceneData.text.length) {
      textElement.innerHTML += sceneData.text.charAt(index);
      index++;
      const randomDelay = Math.floor(Math.random() * (50 - 25 + 1)) + 25;
      setTimeout(typeWriter, randomDelay);
      
    } else {
      // Text finished typing, now add choice buttons
      const choicesElement = document.createElement('div');
      sceneData.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.onclick = () => handleChoice(choice.action);
        choicesElement.appendChild(button);
      });
      adventureTextElement.appendChild(choicesElement);
    }
  }

  typeWriter();

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
