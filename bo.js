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
          console.log("Helaas ,Nou dan niet!");
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
        hervatverhaal();
        console.log("Tijdens je aankondiging lachte mensen je uit de club heeft je club per direct geterminate!.");
        console.log("Het verhaal eindigt hier.");
        rl.close();
      }
    });

