function logError(message) {
  console.error(`[Adventure Game Error]: ${message}`);
  // You could also add code here to display the error to the user if desired
}

export function updateAdventureText(sceneData) {
  let content = '';
  if (sceneData.image) {
    content += `<img src="${sceneData.image}" alt="Scene" class="scene-image"><br>`;
  }
  content += sceneData.text + '<br><br>';
  sceneData.choices.forEach(choice => {
    content += `<button onclick="handleChoice('${choice.action}')">${choice.text}</button> `;
  });
  document.getElementById('adventureText').innerHTML = content;
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
