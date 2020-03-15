// Fotos sollen alle 2 sek. wechseln
//var backgroundImages = new Array("./images/setter.jpg", "./images/irishsetter1.jpg", "./images/irishsetter2.jpg");
var nextPicture = 0;
var zeit = 2000; // 2 sek. Takt

function animation(){
  // BackgroundImage in body.css ansprechen um image zu ändern
  document.getElementById('bdshow').style.backgroundImage = 'url(" '+ backgroundImages[nextPicture] +'  ")';
  nextPicture++;
  console.log(nextPicture);
  // falls das Ende der Bilder erreicht ist...
  if(nextPicture == backgroundImages.length){
  // ... wird der Index wieder auf 0 gesetzt
  nextPicture = 0;
  }
  // nach dieser Zeit ruft Animation
  // sich selbst noch einmal auf
  setTimeout("animation();", zeit);
}


// Textarea soll eingeklappt sein und durch Klick auf einen Button ausklappbar sein
var eingeklappt = true;
function hide(id, idCounter){
  if(eingeklappt == true){
    document.getElementById(id).style.display = 'block';
    eingeklappt = false;
    document.getElementById(idCounter).value = 500;
    // Hiermit kann die Textarea wieder eingeklappt werden
  } else{
    document.getElementById(id).style.display = 'none';
    eingeklappt = true;
  }
}


// Zeichenzähler für Textarea
function test(id, idCounter){
  // maximal Anzahl Zeichen
  var maxZeichen = 500;
  // Anzahl bereits geschriebene Zeichen
  var x = document.getElementById(id).value.length;
  // verbleibende Zeichen werden in <input> Feld ausgegeben
  // Farbe soll schwarz bleiben, solange Zeichen noch erlaubt sind
  if (x < maxZeichen){
    document.getElementById(idCounter).value = maxZeichen - x;
    document.getElementById(id).style.color = 'black';
  // wenn maximale Zeichen erreicht sind, soll Schriftfarbe rot sein
  // Counter soll 0 anzeigen
  } else if (x == maxZeichen){
    document.getElementById(id).style.color = 'red';
    document.getElementById(idCounter).value = 0;
  }
}

  // AJAX Beispiel
  "use strict"; // ältere JavaScript Systax verbieten

  // select-Element zur Spielauswahl im DOM finden
  var gameSelector = document.querySelector("#game-selector select");

  // Auf Änderungen des select-Elements reagieren
  gameSelector.addEventListener("change", function(event) {
    // Referenz auf select-Elements
    var select = this;
    // Ausgewählten Wert auslesen
    var gameFileName = select.value;

    // Informationen zum Spiel per AJAX laden.
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {

        // Inhalt der Daten von JSON in JavaScript-Objekt wandeln
        var gameData = JSON.parse(this.responseText);

        // Anzeige für das Spiel mit geladeden Daten aktualisieren
        updateGamePanel(gameData);

      }
    };
    xhttp.open("GET", "./" + gameFileName, true);
    xhttp.send();
  });

  var updateGamePanel = function(gameData) {

    // Anzeigebereich für Spielinformationen im DOM finden
    var gamePanel = document.querySelector("#game-panel");

    // Titel setzen
    var title = gamePanel.querySelector(".title");
    title.innerHTML = gameData.title;

    // Quellenangabe setzen
    var ref = gamePanel.querySelector(".ref");
    var label = ref.querySelector(".label");
    ref.href = gameData.ref;
    label.innerHTML = gameData.ref;

    // Beschreibung setzten
    var description = gamePanel.querySelector(".description");
    description.innerHTML = gameData.description;
  }
