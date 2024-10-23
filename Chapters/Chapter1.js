import { updateAdventureText } from '../utils.js';

export function StartChapter1() {
  updateAdventureText({
    text: `
      You stir, cozy in bed.
      The cool fall air blows in from your open window.
      You could go back to sleep, or you could get up and start your day.
    `,
    choices: [
      { text: "Go back to sleep", action: "Chapter1.goBackToSleep" },
      { text: "Get up", action: "Chapter2.StartChapter2" } // Ensure this is correct
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

export function DeepSleep() {
  updateAdventureText({
    text: "The vision fades and you wake up in a cold sweat... you can't move, you realize what you thought was cold sweat is an unfamiliar chill surrounding your whole body.",
    choices: [
      { text: "Try to remember", action: "Chapter1.Remember01" },
      { text: "Panic", action: "Chapter1.Panic" }
    ]
  });
}

export function Remember01() {
  updateAdventureText({
    text: "You scrape your mind trying to remember how you got here. You can't remember much... Except for the meteor, you have a feeling it's why you're here.",
    choices: [
      { text: "Panic", action: "Chapter1.Panic" }
    ]
  });
}

export function Panic() {
  updateAdventureText({
    text: "Your body fights its immobility, straining against the cold. Then you hear a sound: a series of clicks and the hiss of a pressure release. Your body suddenly falls forward onto a hard floor.",
    choices: [
      { text: "Force your eyes open", action: "Chapter1.Openeyes" }
    ]
  });
}

export function Openeyes() {
  updateAdventureText({
    text: "Your eyes open slowly and at first the light is blinding. After a few moments you try again. This time the room reveals itself to you. You're in a long hall full of pods, just like the one you came out of.",
    choices: [
      { text: "Investigate room", action: "Chapter1.InvestigatePodRoom" },
      { text: "Go through exit", action: "Chapter1.ExitPodRoom" }
    ]
  });
}

// Keep 'export' for these functions
export function InvestigatePodRoom() {
  updateAdventureText({
    text: "You take a look around the room. You notice that many of the pods seem damaged. A lot of them have broken glass or smashed computers. Only a few others have their doors opened. You notice that your pod has a smashed computer screen but the computer still seems to be working. You can hear a faint hum from under the floor.",
    choices: [
      { text: "Exit the room", action: "Chapter1.ExitPodRoom" } // Example choice
    ]
  });
}

export function ExitPodRoom() {
  // Implement the exit logic here
}
