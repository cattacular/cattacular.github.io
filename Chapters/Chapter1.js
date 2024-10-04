import { updateAdventureText } from '../script.js';

export function StartChapter1() {
  updateAdventureText({
    text: "You stir, cozy in bed. The cool fall air blows in from your open window. You could go back to sleep, or you could get up and start your day. What do you do?",
    choices: [
      { text: "Go back to sleep", action: "Chapter1.goBackToSleep" },
      { text: "Get up", action: "Chapter1.getUp" }
    ]
  });
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
  // Implement the logic for getting up
},

export function Remember01() {
  updateAdventureText({
    text: "You scrape your mind trying to remember how you got here. You realize you cant remember who you are, or anything else at all!... Except for the meteor.",
    choices: [
      { text: "Exit Pod", action: "Chapter1.ExitPod" }
    ],
   // image: "images/autumn-park.jpg"
  });
}

export function ExitPod() {
  updateAdventureText({
    text: " You swing your legs out of the pod and onto the metal floor. You expected it to be cold but your body still feels numb. 'What is this place? Why is no one else awake?' you think to yourself.",
    choices: [
      { text: "investigate room", action: "Chapter1.InvestigatePodRoom" },
      { text: "Go through exit", action: "Chapter1.ExitPodRoom" }
    ]
  });
}

// Keep 'export' for these functions
export function InvestigatePodRoom() {
 
}

export function ExitPodRoom() {
  // Implement the logic for finding a coin
}
