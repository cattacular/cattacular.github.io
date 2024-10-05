export function updateAdventureText(sceneData) {
  let content = '';
  if (sceneData.image) {
    content += `<img src="${sceneData.image}" alt="Scene" class="scene-image"><br>`;
  }
  content += sceneData.text + '<br><br>';
  sceneData.choices.forEach(choice => {
    content += `<button onclick="${choice.action}()">${choice.text}</button> `;
  });
  document.getElementById('adventureText').innerHTML = content;
}
