var headerbild = document.querySelector(".HEADERBILD");
    var sound = document.getElementById("sound");

    headerbild.addEventListener("click", function() {
      if (sound.paused) {
        sound.play(); // Wenn pausiert, starte die Wiedergabe
      } else {
        sound.pause(); // Wenn abgespielt, pausiere die Wiedergabe
      }
    });