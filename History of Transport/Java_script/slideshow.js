const indikatoren = document.getElementsByClassName("indikator"); //Über diesen befehl werden die Zeit ausgewählt
indikatoren[0].classList.add("aktiv");

const slides = document.getElementsByClassName("slide"); //Über diesen befehl werden die Bilder ausgewählt 
slides[0].classList.add("aktiv");

var aktuellerIndex = 0; // Es handelt sich um einen variablen Index, da dieser in der Lage sein muss sich zu ändern

function umschalten(anzahl) {
    var neuerIndex = aktuellerIndex + anzahl;  // Diese funktion erhöt den aktuellen Index, damit immer das richtige Bild der 											   Klasse aktive zugeordnet wird. 

    if(neuerIndex < 0) {					// Wenn der aktuelle Index (neuerIndex) kleiner als Null ist, bleibt die aktive 											Klasse dem Slide Element zugeordnet, welches der Länge der Liste minus 1 entspricht. 										 Das ist deshalb so, da die Liste bei Null und nicht bei Eins anfängt und somit eine 										 Ziffer abgefogen werden muss. 
        neuerIndex = slides.length -1;
    }

    if(neuerIndex > slides.length -1) {     // Wenn der neue Index größer ist ist die Länge der Slide Liste, dann wird der Index 										 auf Null zurückgesetzt. Das sorgt dafür, dass die Slideshow nicht irgendwann aufhört, 										   sondern wieder von vorne beginnt. 
        neuerIndex = 0;
    }

    springeZuEintrag(neuerIndex);
}

function springeZuEintrag(neuerIndex) {  	// Durch diese Funktion wird die Zeitleiste funktionabel. Dem gerade aktiven Element, 											  also dem aktuellen Index wird die Klasse Aktiv entfernt. Dem Element auf das man 												gerade klickt, wird die Klasse Aktiv aber hinzugefügt. So wird immer das richtige 												Bild und die richtige Zahl hervorgehoben.
    indikatoren[aktuellerIndex].classList.remove("aktiv");
    slides[aktuellerIndex].classList.remove("aktiv");

    indikatoren[neuerIndex].classList.add("aktiv");
    slides[neuerIndex].classList.add("aktiv");

    aktuellerIndex = neuerIndex;
}