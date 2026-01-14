// Eine Array-Variable, die alle Quizfragen und Antworten enthält
var questions = [
  {
    question: "Welcher bekannte Ingenieur baute die erste funktionsfähige Dampflokomotive, die im Jahr 1804 ihre erste Fahrt machte, erhielt aber zu Lebzeiten wenig Anerkennung für seine Arbeit?",
    choices: ["Thomas Newcomen", "James Watt", "Richard Trevithick", "George Stephenson"],
    correctAnswer: 2,
	userAnswer: null
  },
  {
    question: "Welche erheblichen Ereignisse in Europa in den Jahren 1812-1817 führten indirekt zur Erfindung des Laufrads, einem Vorläufer des Fahrrads, durch Karl von Drais?",
    choices: ["Die Industrialisierung", "Die Napoleonischen Kriege", "Die Eröffnung des Suezkanals", "Die Gründung der Europäischen Union"],
    correctAnswer: 1,
	userAnswer: null
  },
  {
    question: "Welcher bekannte deutsche Erfinder und Unternehmer setzte im Jahr 1881 die erste elektrische Straßenbahn erfolgreich um, die in Lichterfelde, einem Vorort von Berlin, fuhr?",
    choices: ["Thomas Alva Edison", "Nikola Tesla", "Werner von Siemens", "Rudolf Diesel"],
    correctAnswer: 2,
	userAnswer: null
  },
  {
    question: "Welches Fahrzeug, das ebenfalls im Jahr 1886 präsentiert wurde, gilt als Vorläufer des modernen Motorrads und wer war sein Erfinder?",
    choices: ["Das Treibwagen von Rudolf Diesel", "Der Reitwagen von Gottlieb Daimler", "Der Flieger von Karl Benz", "Das Dreirad von Ferdinand Porsche"],
    correctAnswer: 1,
	userAnswer: null
  },
  {
    question: "Welches Unternehmen stellte 1901 das erste Zweiganggetriebe vor, das die Geschwindigkeitsvariabilität bei Motorrädern verbesserte?",
    choices: ["Hildebrand & Wolfmüller", "Harley-Davidson", "Triumph", "BMW"],
    correctAnswer: 2,
	userAnswer: null
  },
  {
    question: "Wer entwarf den ersten vollständig selbsttragenden Omnibus, der den Busverkehr revolutionierte?",
    choices: ["Carl Benz", "Gottlieb Daimler", "Karl Kässbohrer", "George Shillibeer"],
    correctAnswer: 2,
	userAnswer: null
  },
  {
    question: "Wie lange dauerte der erste erfolgreiche, motorisierte Flug der Gebrüder Wright im Jahr 1903?",
    choices: ["60 Sekunden", "25 Sekunden", "180 Sekunden", "12 Sekunden"],
    correctAnswer: 3,
	userAnswer: null
  },
  {
    question: "Welche deutsche Firma produzierte im Jahr 1896 den ersten LKW der Welt?",
    choices: ["Benz & Cie", "BMW", "Audi", "Wartburg"],
    correctAnswer: 0,
	userAnswer: null
  },
  {
    question: "Welcher Hochgeschwindigkeitszug, eingeführt im Jahr 1981, erreichte eine Höchstgeschwindigkeit von 260 km/h und verband zwei wichtige Städte in Frankreich?",
    choices: ["AVE", "TGV", "Shinkansen", "ICE"],
    correctAnswer: 1,
	userAnswer: null
  },
  {
    question: "Welche Magnetschwebebahn ist derzeit die schnellste kommerzielle Magnetschwebebahn der Welt und erreicht Geschwindigkeiten von bis zu 430 km/h?",
    choices: ["Transrapid in Deutschland", "JR-Maglev in Japan", "Shanghai Maglev in China", "Incheon Airport Maglev in Südkorea"],
    correctAnswer: 2,
	userAnswer: null
  },
  {
    question: "Wer entwickelte den VS-300, den ersten Hubschrauber mit einem herkömmlichen Motor, der senkrecht starten und landen sowie in der Luft schweben konnte?",
    choices: ["Leonardo da Vinci", "Orville und Wilbur Wright", "Henry Ford", "Igor Sikorsky"],
    correctAnswer: 3,
	userAnswer: null
  },
  {
    question: "Welches war das erste Düsenpassagierflugzeug, das kommerziell erfolgreich war?",
    choices: ["De Havilland DH.106 Comet", "Boeing 707", "Airbus A380", "McDonnell Douglas DC-10"],
    correctAnswer: 1,
	userAnswer: null
  },
  {
    question: "Was war der Spitzname des russischen Überschalljets Tupolev Tu-144?",
    choices: ["Supersonik", "Speedbird", "Konkordski", "MachRus"],
    correctAnswer: 2,
	userAnswer: null
  }
];
// Index der aktuellen Frage. Es startet bei 0 (der ersten Frage) und wird jedes Mal erhöht, wenn eine neue Frage geladen wird.
var currentQuestion = 0;
// Index der vom Benutzer ausgewählten Antwort. Es wird auf Null gesetzt, wenn eine neue Frage geladen wird.
var selectedChoice = null;

// Funktion zum Laden der nächsten Frage
function loadNextQuestion() 
{
  // Diese Zeile holt alle "choice"-Radiobuttons (die Antworten).
  var choices = document.getElementsByName("choice");
  // Dies ist ein Boolean, der überprüft, ob eine Antwort ausgewählt wurde.
  var choiceSelected = false;

// Überprüft, ob eine Antwort ausgewählt wurde
  for (var i = 0; i < choices.length; i++) {
	// Wenn eine Antwort ausgewählt wurde, wird "choiceSelected" auf true gesetzt und die Schleife wird beendet.
    if (choices[i].checked) {
      choiceSelected = true;
      selectedChoice = i;
      break;
    }
  }
// // Wenn keine Antwort ausgewählt wurde, wird eine Warnmeldung angezeigt und die Funktion wird beendet.
  if (!choiceSelected) {
    alert("Bitte wählen Sie eine Antwort aus.");
    return;
  }
  // Wenn eine Antwort ausgewählt wurde, wird der Index der aktuellen Frage erhöht und "selectedChoice" wird zurückgesetzt.
  currentQuestion++;
  selectedChoice = null;

// Wenn es noch Fragen gibt, wird die nächste Frage angezeigt, sonst werden die Ergebnisse angezeigt
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResults();
  }
}

// Funktion zum Anzeigen der aktuellen Frage
function showQuestion() {
  // Hier wird die aktuelle Frage geholt.
  var question = questions[currentQuestion];
  // Die Frage wird in dem "question"-Element im HTML-Dokument angezeigt.
  document.getElementById("question").textContent = question.question;

  // Die "choice"-Radiobuttons (die Antworten) und ihre Labels werden geholt.
  var choices = document.getElementsByName("choice");
  var labels = document.querySelectorAll("#choices label");
// Antwortmöglichkeiten werden im HTML-Dokument angezeigt
  for (var i = 0; i < choices.length; i++) {
    choices[i].checked = false;
    labels[i].textContent = question.choices[i];
    labels[i].style.backgroundColor = "";
  }
// Weiter-Button wird ausgeblendet
  document.getElementById("next-btn").style.display = "none";
// Frage-Container wird angezeigt
  document.getElementById("question-container").style.display = "block";
// Ergebnis-Container wird ausgeblendet
  document.getElementById("results-container").style.display = "none";
}

// Funktion zum Anzeigen der Ergebnisse
function showResults() {
  // Hier wird die "results"-Tabelle im HTML-Dokument geholt.
  var resultsTable = document.getElementById("results");
  // Ergebnistabelle wird erstellt und ausgefüllt (eine neue Zeile und zwei neue Zellen)
  for (var i = 0; i < questions.length; i++) {
    var row = resultsTable.insertRow();
    var questionCell = row.insertCell(0);
    var answerCell = row.insertCell(1);
   
	// In der ersten Zelle wird die Frage angezeigt.
    questionCell.textContent = questions[i].question;

	// In der zweiten Zelle wird angezeigt, ob die Antwort des Benutzers korrekt war.
    if (questions[i].userAnswer === questions[i].correctAnswer) {
      answerCell.textContent = "Richtig";
    } else {
      answerCell.textContent = "Falsch. Die richtige Antwort ist: " + questions[i].choices[questions[i].correctAnswer];
    }
  }
// Weiter-Button wird ausgeblendet
  document.getElementById("next-btn").style.display = "none";
// Frage-Container wird ausgeblendet
  document.getElementById("question-container").style.display = "none";
// Ergebnis-Container wird angezeigt
  document.getElementById("results-container").style.display = "block";
}

// Die ausgewählte Antwort wird hervorgehoben und die Auswahl des Benutzers wird gespeichert.
function selectChoice(choiceIndex) {
  var labels = document.querySelectorAll("#choices label");

  for (var i = 0; i < labels.length; i++) {
    if (i === choiceIndex) {
      labels[i].style.backgroundColor = "#ccc";
	  // Aktualisierung der ausgewählten Benutzerantwort
      questions[currentQuestion].userAnswer = choiceIndex; 
    } else {
      labels[i].style.backgroundColor = "";
    }
  }
  // Weiter-Button wird angezeigt
  document.getElementById("next-btn").style.display = "block";
}


// Initialisierung: Anzeige der ersten Frage
showQuestion();
