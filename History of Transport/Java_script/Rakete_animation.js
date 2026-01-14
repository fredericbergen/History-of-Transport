const nachObenBtn = document.querySelector('.RAKETE'); // Auswahl des Elements mit der Klasse 'RAKETE'
const raketeImg = document.querySelector('#RaketeStarten'); // Auswahl des Elements mit der ID 'RaketeStarten'

nachObenBtn.addEventListener('click', function() {
  scrollToTop();
  startAnimation();    
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' }); // Scrollen zum oberen Bereich der Seite mit einer sanften Scroll-Animation
}

function startAnimation() {
  raketeImg.src = "Bilder/Rocket_2_frei.png"; // Ändern des Bildquellenpfads auf "Bilder/Rakete2.png"
  raketeImg.classList.add('RaketeAnimation'); // Hinzufügen der CSS-Klasse 'RaketeAnimation' zum Element
}  

function resetAnimation() {
  raketeImg.src = "Bilder/Rocket_1_frei.png"; // Zurücksetzen des Bildquellenpfads auf "Bilder/Rakete.png"
  raketeImg.classList.remove('RaketeAnimation'); // Entfernen der CSS-Klasse 'RaketeAnimation' vom Element
}

window.addEventListener('scroll', function() {
  if (window.scrollY > 20) {  
    nachObenBtn.classList.remove('HIDDEN'); // Entfernen der CSS-Klasse 'HIDDEN' vom Element
    nachObenBtn.classList.add('SHOW'); // Hinzufügen der CSS-Klasse 'SHOW' zum Element
  } else {
    nachObenBtn.classList.remove('SHOW'); // Entfernen der CSS-Klasse 'SHOW' vom Element
    nachObenBtn.classList.add('HIDDEN'); // Hinzufügen der CSS-Klasse 'HIDDEN' zum Element
    resetAnimation(); // Aufruf der Funktion zum Zurücksetzen der Animation
  }
});