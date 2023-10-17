const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let vn = 0;

function beginverhaal() {
  if (vn === 0) {
    console.log("Hallo! Ik ben Henk, Jou zaakwaarnemer. Ik zorg er voor dat je ver komt in je voetbal carriere.");
    rl.question("Wie ben jij? ", (c) => {
      console.log("Wil je beginnen?");
      console.log("'ja'");
      console.log("'nee'");
      rl.question("Antwoord: ", (ant) => {
        if (ant === "ja") {
          console.log("Top! Laten we Beginnen.");
          console.log("Ik heb veel belletjes gekregen van clubs rondom de wereld die interesse hebben.");
          console.log("Er is veel keuze");
          vn = 1;
          hervatverhaal();
        } else if (ant === "nee") {
          console.log("Nou dan niet!");
          rl.close();
        }
      });
    });
  }
}

function hervatverhaal() {
  if (vn === 1) {
    console.log("Ik geef je aan bij welke clubs je precies kan spelen");
    console.log("Waar wil je naartoe?");
    console.log("'Feyenoord'");
    console.log("'Real Madrid'");
    rl.question("Antwoord: ", (ant) => {
      if (ant === "Feyenoord") {
        vn = 2;
      } else if (ant === "Real Madrid") {
        vn = 3;
        let validAnswer = "Feyenoord";
        while (!validAnswer) 
        console.log("Tijdens je aankondiging lachte mensen je uit de club heeft je club per direct geterminate!.");
        console.log("Het verhaal eindigt hier.");
        rl.close();
      }
    });
  } else if (vn === 2) {
    console.log("Alex betreedt de grot en ontdekt een doolhof van gangen en kamers.");
    console.log("Hij moet de juiste keuzes maken om de schat te vinden.");
    console.log("Welke kant wil je op?");
    console.log("'links'");
    console.log("'rechts'");
    rl.question("Antwoord: ", (ant) => {
      if (ant === "links") {
        vn = 4;
        continueStory();
      } else if (ant === "rechts") {
        vn = 5;
        console.log("Alex gaat rechts en komt vast te zitten in een val.");
        console.log("Het verhaal eindigt hier.");
        rl.close();
      }
    });
  } else if (vn === 4) {
    console.log("Alex gaat links en vindt een glinsterende schatkist.");
    console.log("Hij opent de kist en vindt een enorme berg goud en juwelen.");
    console.log("Gefeliciteerd, Alex heeft de legendarische schat gevonden!");
    rl.close();
  } else {
    console.log("Dit is het einde van het verhaal. Bedankt voor het spelen!");
    rl.close();
  }
}

beginverhaal();
