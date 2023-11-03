
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let storyProgress = 0;

// Hier begint het verhaal
const story = [
  "Je wordt wakker in een donker en griezelig huis. De muren kraken en je hoort vreemde geluiden. Wat doe je?",
  "A. Je blijft in bed en hoopt dat het voorbijgaat.",
  "B. Je staat op om te onderzoeken waar de geluiden vandaan komen.",
  "Je blijft in bed liggen, maar de geluiden worden steeds luider en angstaanjagender. Wat doe je?",
  "A. Je bedekt je hoofd met een deken en probeert te slapen.",
  "B. Je verlaat je bed om te zien wat er aan de hand is.",
  "Terwijl je in bed ligt, voel je iets kouds over je voet glijden. Wat doe je?",
  "A. Je trekt je voet snel terug onder de dekens.",
  "B. Je kijkt onder de dekens om te zien wat er is.",
  "Onder de dekens zie je een bleke, afgebroken hand. Paniek overweldigt je. Wat doe je?",
  "A. Je schreeuwt van angst en probeert weg te komen.",
  "B. Je probeert de hand weg te duwen en uit bed te springen.",
  "Je springt uit bed en rent door de donkere gangen van het huis. Het huis lijkt oneindig groot en angstaanjagend. Wat doe je?",
  "A. Je blijft rennen door de gangen, hopend op een uitweg.",
  "B. Je stopt om te luisteren naar de geluiden en probeert de bron ervan te vinden.", 
  "Terwijl je door de gangen rent, zie je een deur die op een kier staat. Wat doe je?",
  "A. Je gaat door de deur, nieuwsgierig naar wat erachter ligt.",
  "B. Je negeert de deur en blijft rennen.",
  "Je opent de deur en bevindt je in een duistere kelder. Er is een enge, oude pop in de hoek van de kamer. Wat doe je?",    
  "A. Je pakt de pop op en onderzoekt deze nader.",
  "B. Je rent weg van de enge pop en de kelder uit.",
  "Terwijl je de pop oppakt, begint deze plotseling te praten en te lachen. Wat doe je?",
  "A. Je schreeuwt en laat de pop vallen.",
  "B. Je probeert met de pop te praten en vragen te stellen.",
  "De pop blijkt bezeten en begint je te achtervolgen. Wat doe je?",
  "A. Je probeert de pop weg te gooien en te vernietigen.",
  "B. Je probeert te ontsnappen en de pop achter je te laten.",
];

// Eindes
const goedeEnding = "Je hebt met succes kunnen ontsnappen uit het enge huis en bent veilig. Gefeliciteerd!";
const slechteEnding = "Helaas, je werd overweldigd door het kwaad in het huis en hebt een tragisch einde bereikt. Probeer opnieuw!";
const semigoedeEnding = "Je hebt de enge pop vernietigd en het huis achtergelaten. Je bent ontsnapt!";
const cliffhanger = "Je hebt de pop meegenomen en wordt nu achtervolgd door het bovennatuurlijke. Het enge verhaal gaat door...";

function displayStory() {
  console.log(story[storyProgress]);

  rl.question("Maak je keuze (A of B): ", (choice) => {
    if (choice.toUpperCase() === 'A') {
      storyProgress += 1;
    } else if (choice.toUpperCase() === 'B') {
      storyProgress += 2;
    } else {
      console.log("Ongeldige keuze. Probeer 'A' of 'B'.");
    }

    if (storyProgress >= story.length - 4) {
      // Eindes
      if (storyProgress === story.length - 4) {
        console.log(goedeEnding);
      } else if (storyProgress === story.length - 3) {
        console.log(slechteEnding);
      } else if (storyProgress === story.length - 2) {
        console.log(semigoedeEnding);
      } else if (storyProgress === story.length - 1) {
        console.log(cliffhanger);
      }

      rl.close();
    } else {
      displayStory();
    }
  });
}

displayStory();
