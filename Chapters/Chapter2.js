import { updateAdventureText } from '../utils.js';

export function StartChapter2() {
  updateAdventureText({
    text: "you take a moment to stretch in bed before opening your eyes. You're in your bedroom. For a moment you consider not leaving bed at all, but you have no money. You swing your legs out of bed and spend a couple minutes looking for your glasses. You're practically blind without them after all. Looking at your phone you see that its already 8:20 am. You've got to be out the door in 10 minutes!",
      { text: "Get Dressed", action: "Chapter2.GetDressed" },
      { text: "Look out the window", action: "Chapter2.LookOutWindow" }
    ]
  });

  export function GetDressed() {
    updateAdventureText({
      text: "Ill be working at the UNL bee lab today.The beekeepers dress code is pretty simple. pants and a long sleeve shirt. No black or fuzzy clothes. These days though ill frequently wear short sleeves. Id rather risk getting stung and stay a little cooler.",
      { text: "Look out the window", action: "Chapter2.LookOutWindow" },
      { text: "Eat an apple", action: "Chapter2.EatApple"  }
    ]);
  }
export function LookOutWindow() {
  updateAdventureText({
    text: "The appartment only has 2 windows. They face south out over the street. Theres a parking garage across the street. Luckly there are a couple of trees that block most of the view. The light coming through the trees can actually quite beautiful at times. The windows themselves are quite large, they take up most of the red brick wall.",
    { text: "Collect things", action: "Chapter2.CollectThings" },
    { text: "Eat an apple", action: "Chapter2.EatApple" }
  ]);
}
export function EatApple() {
  updateAdventureText({
    text: "You eat the apple. It's a good apple. A little snack is better than nothing.",
    { text: " Collect things", action: "Chapter2.CollectThings" }
  });
}
