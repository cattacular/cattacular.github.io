function logError(message) {
  console.error(`[Adventure Game Error]: ${message}`);
}

export function updateAdventureText(sceneData) {
  const adventureTextElement = document.getElementById('adventureText');
  adventureTextElement.innerHTML = ''; // Clear existing content

  let content = '';
  if (sceneData.image) {
    content += `<img src="${sceneData.image}" alt="Scene" class="scene-image"><br>`;
  }

  const textElement = document.createElement('p');
  adventureTextElement.appendChild(textElement);

  let index = 0;
  function typeWriter() {
    if (index < sceneData.text.length) {
      textElement.innerHTML += sceneData.text.charAt(index);
      index++;
      setTimeout(typeWriter, 50); // Adjust the speed here (lower number = faster)
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
