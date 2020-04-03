// Funktion zum Würfeln
function wuerfeln() {
  var zufallszahl = Math.floor(Math.random() * 6) + 1;
  document.getElementById('currentnumberlabel').innerHTML = zufallszahl;
  console.log(zufallszahl);
  var counter = 0;
  counter += zufallszahl;
  console.log(counter);
  // updateZwischenstand(zufallszahl);
}

// function updateZwischenstand(zahl) {
//   var ergebnis = [];
//   ergebnis.push(zahl);
//
//   document.getElementById('zwischenstandlabel').innerHTML = count;
// }