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
      { text: "Take a shower", action: "Chapter1.takeAShower" },
      { text: "Meditate for a bit longer", action: "Chapter1.meditateMore" }
    ]
  });
}

// Keep 'export' for these functions
export function petADog() {
  // Implement the logic for petting a dog
}

export function findACoin() {
  // Implement the logic for finding a coin
}

export function takeAShower() {
  // Implement the logic for taking a shower
}

export function meditateMore() {
  // Implement the logic for meditating more
}

// Also, add these functions that are referenced in script.js
export function goBackToSleep() {
  // Implement the logic for going back to sleep
}

export function getUp() {
  // Implement the logic for getting up
}
