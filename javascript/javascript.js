// Funktion zum Würfeln
var zufallszahl;
var score = 0;

function generate() {
  zufallszahl = Math.floor(Math.random() * 6) + 1;
  return zufallszahl;
}

function wuerfeln() {
  console.log("Alt " + zufallszahl);
  var x = generate();
  document.getElementById('currentnumberlabel').innerHTML = zufallszahl;
  console.log(x);
  console.log("Neu " + zufallszahl);
  changeIntermediateResult();
}

function changeIntermediateResult() {
  score = score + zufallszahl;
  console.log("Inter: " + score);
  document.getElementById('zwischenstandlabel').innerHTML = score;
}

function reset() {
  score = 0;
  document.getElementById('zwischenstandlabel').innerHTML = score;
}