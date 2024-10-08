import { updateAdventureText } from '../utils.js';

export function StartChapter1() {
  console.log('StartChapter1 function called');
  updateAdventureText({
    text: `
      You stir, cozy in bed.
      The cool fall air blows in from your open window.
      You could go back to sleep, or you could get up and start your day.
    `,
    choices: [
      { text: "Go back to sleep", action: "Chapter1.goBackToSleep" },
      { text: "Get up", action: "Chapter1.getUp" }
    ]
  });
  console.log('updateAdventureText called in StartChapter1');
}

export function goBackToSleep() {
  updateAdventureText({
    text: "You decide to go back to sleep. As you drift off, you have a strange dream about a meteor...",
    choices: [
      { text: "Remember", action: "Chapter1.Remember01" },
      { text: "Exit pod", action: "Chapter1.ExitPod" }
    ]
  });
}

export function getUp() {
  updateAdventureText({
    text: "You decide to get up and start your day.",
    choices: [
      { text: "Try to remember", action: "Chapter1.Remember01" },
      { text: "Exit the pod", action: "Chapter1.ExitPod" }
    ]
  });
}

export function Remember01() {
  updateAdventureText({
    text: "You scrape your mind trying to remember how you got here. You realize you cant remember who you are, or anything else at all... Except for the meteor.",
    choices: [
      { text: "Exit Pod", action: "Chapter1.ExitPod" }
    ],
   // image: "images/autumn-park.jpg"
  });
}

export function ExitPod() {
  updateAdventureText({
    text: " You swing your legs out of the pod and onto the metal floor. You expected it to be cold but your feet are still numb. 'What is this place? Why is no one else awake?.",
    choices: [
      { text: "investigate room", action: "Chapter1.InvestigatePodRoom" },
      { text: "Go through exit", action: "Chapter1.ExitPodRoom" }
    ]
  });
}

// Keep 'export' for these functions
export function InvestigatePodRoom() {
 updateAdventureText
 text: "you take a look around the room. you notice that many of the pods seem damaged. A lot of them have broken glass or smashed computers. Only a few other have their doors opened. You notice that your pod has a smashed computer screen but the computer still seems to be working. You can hear a faint hum from under the floor."
}

export function ExitPodRoom() {
}
