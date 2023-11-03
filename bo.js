const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function intro() {
  console.log("Je bevindt je alleen in een oud en verlaten herenhuis.");
  console.log("Er is iets vreemds aan de hand en je moet proberen te overleven.");
  console.log("Je hebt vier mogelijke eindes voor dit verhaal. Maak je keuze goed!");
  room1();
}

function room1() {
  console.log("Je bent in de donkere hal van het herenhuis.");
  console.log("Je kunt kiezen om de trap op te gaan (1) of naar de kelder te gaan (2).");
  rl.question("Maak je keuze: ", (choice) => {
    if (choice === "1") {
      staircase();
    } else if (choice === "2") {
      basement();
    } else {
      death();
    }
  });
}

function staircase() {
  console.log("Je gaat de trap op en komt in een spookachtige slaapkamer.");
  console.log("Er staat een oude spiegel. Kijk je in de spiegel (1) of verlaat je de kamer (2)?");
  rl.question("Maak je keuze: ", (choice) => {
    if (choice === "1") {
      mirror();
    } else if (choice === "2") {
      exit();
    } else {
      death();
    }
  });
}

function mirror() {
  console.log("Je ziet je eigen reflectie in de spiegel, maar je hoort een angstaanjagend geluid achter je.");
  console.log("Wat doe je? Ga je terug (1) of onderzoek je de kamer verder (2)?");
  rl.question("Maak je keuze: ", (choice) => {
    if (choice === "1") {
      staircase();
    } else if (choice === "2") {
      investigate();
    } else {
      death();
    }
  });
}

function investigate() {
  console.log("Je onderzoekt de kamer en vindt een geheimzinnig boek.");
  console.log("Lees je het boek (1) of laat je het boek met rust en verlaat je de kamer (2)?");
  rl.question("Maak je keuze: ", (choice) => {
    if (choice === "1") {
      book();
    } else if (choice === "2") {
      exit();
    } else {
      death();
    }
  });
}

function book() {
  console.log("Je opent het boek en het begint uit zichzelf te bladeren.");
  console.log("Het onthult een vloek die het herenhuis teistert.");
  console.log("Wat doe je? Probeer de vloek op te heffen (1) of verlaat het herenhuis (2)?");
  rl.question("Maak je keuze: ", (choice) => {
    if (choice === "1") {
      curse();
    } else if (choice === "2") {
      exit();
    } else {
      death();
    }
  });
}

function curse() {
  console.log("Je probeert de vloek op te heffen, maar het gaat gruwelijk mis.");
  console.log("Je wordt meegesleept in de vloek en de geesten van het herenhuis.");
  badEnd();
}

function basement() {
  console.log("Je daalt af naar de kelder en het is er ijskoud.");
  console.log("Je kunt een mysterieuze deur openen (1) of teruggaan naar de hal (2).");
  rl.question("Maak je keuze: ", (choice) => {
    if (choice === "1") {
      door();
    } else if (choice === "2") {
      staircase();
    } else {
      death();
    }
  });
}

function door() {
  console.log("Achter de deur vind je een donkere kamer met vreemde symbolen op de muren.");
  console.log("Wat doe je? Onderzoek je de symbolen (1) of verlaat je de kamer (2)?");
  rl.question("Maak je keuze: ", (choice) => {
    if (choice === "1") {
      symbols();
    } else if (choice === "2") {
      exit();
    } else {
      death();
    }
  });
}

function symbols() {
  console.log("Terwijl je de symbolen onderzoekt, voel je een vreemde aanwezigheid.");
  console.log("Ga je door met onderzoeken (1) of probeer je de kamer te verlaten (2)?");
  rl.question("Maak je keuze: ", (choice) => {
    if (choice === "1") {
      investigate();
    } else if (choice === "2") {
      exit();
    } else {
      death();
    }
  });
}

function exit() {
  console.log("Je verlaat de kamer en gaat terug naar de hal.");
  room1();
}

function death() {
  console.log("Helaas, je avontuur is ten einde gekomen op een verschrikkelijke manier.");
  console.log("Je hebt de vloek niet kunnen overleven. Game Over.");
  rl.close();
}

function badEnd() {
  console.log("Helaas, je avontuur is ten einde gekomen op een verschrikkelijke manier.");
  console.log("Je hebt de vloek niet kunnen overleven. Game Over.");
  rl.close();
}

function goodEnd() {
  console.log("Gefeliciteerd! Je hebt de vloek opgeheven en het herenhuis overleefd.");
  console.log("Je hebt een veilige uitgang gevonden. Je hebt gewonnen!");
  rl.close();
}

intro();
