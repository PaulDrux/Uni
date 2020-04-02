var max = 6;

function randNumber(max) {
  var x = Math.random(max);
}

var newScore = function(number) {
  newScore += number;
  return newScore;
}

function changeColor(color) {
  var element = document.getElementById('scorelabel');
  element.style.color = color;
}