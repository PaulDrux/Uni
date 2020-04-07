// Funktion zum Würfeln
var zufallszahl;
var intermediateScore = 0;
var score = 0;
var lives = 3;

function generate() {
  zufallszahl = Math.floor(Math.random() * 6) + 1;
  return zufallszahl;
}

function wuerfeln() {
  if (lives != 0) {
    var x = generate();
    document.getElementById('currentnumberlabel').innerHTML = zufallszahl;
    console.log(x);
    if (x != 6) {
      changeIntermediateResult();
    } else if (x === 6) {
      window.alert("Leben verloren");
      changeLives();
      intermediateScore = 0;
      document.getElementById('zwischenstandlabel').innerHTML = intermediateScore;
    }
  }
}

function changeIntermediateResult() {
  intermediateScore = intermediateScore + zufallszahl;
  document.getElementById('zwischenstandlabel').innerHTML = intermediateScore;
}

function saveIntermediate() {
  saveScore();
  intermediateScore = 0;
  document.getElementById('zwischenstandlabel').innerHTML = intermediateScore;
  document.getElementById('currentnumberlabel').innerHTML = '?';
}

function saveScore() {
  score = score + intermediateScore;
  document.getElementById('scorelabel').innerHTML = score;
}

function changeLives() {
  if (lives > 1) {
    lives -= 1;
  } else {
    lives -= 1;
    window.alert("Keine Leben mehr");
    document.getElementById('livelabel').innerHTML = lives;
  }
  document.getElementById('livelabel').innerHTML = lives;
}