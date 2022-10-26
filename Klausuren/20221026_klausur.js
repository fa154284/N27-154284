console.log("******** K L A U S U R 26.10.2022 ********")

// Aufgabe 1
// Grenzen Sie Datenschutz und Datensicherheit gegeneinader ab!
// 
// Der Datenschutz kümmert sich darum, ob persönliche Daten für einen bestimmten Zweck genutzt werden dürfen.
// Die Datensicherheit kümmert sich um die Maßnahmen, die dafür getroffen werden
//
//
//
//
//
//
// 
// 
// 
// 
// 
// Aufgabe 2 a)
// Grenzen Sie symmetrische und asymmetrische Verschlüsselung gegeneinander ab! 
// Nennen Sie jeweils Vorteile! 
// Gehen Sie auch auf die Eigenschaften und Unterschiede von public key und private key ein!
// 
// Für die symetrische Verschlüsselung wird bei dekodieren und entdekodieren der gleiche Schlüssel verwendet.
// Das Kennwort muss dem Empfänger anders z.B. übers Telefon genannt werden. 
// Vorteil: Man brauch nur einen Schlüssel, unkomplieziert
//
// Für die asymetrische Verschlüsselung werden zwei Schlüssel gebraucht. Einen zum codieren und einen zum dekodieren.
// Beide Schlüssel müssen dem Empfänger über einen anderen Weg überbracht werden.
// Vorteil: Daten sind sicherer verschlüsselt
// 
// 
// Aufgabe 2 b)
// Wie könnte eine Verschlüsselung aussehen, die die Vorteile symmetrischer und asymmetrischer
// Verschlüsselung miteinander verbindet?
// 
// 
// 
// 
// 
//
//
//
//
// Aufgabe 3)
// Grenzen Sie Deklaration, Instanziierung und Initialisierung voeinander ab!  
//  
// Bei der Deklaration erstellen wir eine Klasse mit korrekten Eigenschaften um etwas zu beschreiben
// Instanziierung wird getätigt um für unsere vorher erstellte Klasse eine korrekte Instanz zu bilden.
// es wird beschriben, dass dieses Objekt existieren soll  Bsp.: let kunde = new kunde ()
// Die Initialisierung werden der Instanz neue Eigenschaftswerte zugewiesen und auf die Seite im Internet zu übertragen
//
//

// 
//
//
//
//
//
//
// Aufgabe 5a)
// Sie werden beauftragt ein Programm zu entwicklen, dass alle Zeugnisse einer Schule digital verwaltet.  
// Entwerfen Sie eine Klasse mit relevanten Eigenschaften!

class Zeugnis{
    constructor(){
        this.Klasse
        this.Anrede
        this.Vorname
        this.Nachname
        this.Facher
        this.Note
        this.schulischeAktivitäten
        this.Versetzung
    }
}



// Aufgabe 5b)
// Führen Sie Deklaration, Instanzzierung und Initialisierung für das Halbjahreszeugnis 
// des Schüler Pit Kiff durch. 
// Vergeben Sie realistische Eigenschaftswerte.  
//
 
let zeugnis = new Zeugnis()

zeugnis.Klasse = 9
zeugnis.Anrede = "Herr"
zeugnis.Vorname = "Pitt"
zeugnis.Nachname = "Kiff"
zeugnis.Fach = "Mathe"
zeugnis.Note = 3
zeugnis.schulischeAktivitäten = "keine"
zeugnis.Versetzung = "genehmigt"



// Aufgabe 5c)
// Geben Sie die Eigenschaftswerte aus 5b auf der Konsole wie folgt aus: Je Eigenschaft soll
// in jeweils einer Zeile die Eigenschaft und der zugehörige Wert angezeigt werden.
// Beispiel für:
// Schuhgröße: 40
// Haarfarbe: braun 


console.log(
    "Klasse : 9"
)
console.log(
    "Anrede : Herr"
)
console.log(
    "Vorname : Pitt"
)
console.log(
    "Nachname : Kiff"
)
console.log(
    "Fach : Mathe"
)
console.log(
    "Note : 3"
)
console.log(
    "schulischeAktivitäten : keine"
)
console.log(
    "Versetzung : genemigt"
)



// Aufgabe 6)
// Zwei Schüler haben bekommen Zeugnisse: 
// Pit: Punkte (Mathe: 15, Deutsch: 10, Englisch:  5) 
// Git: Punkte (Mathe: 10, Deutsch:  8, Englisch: 15) 
//
// Initialisieren Sie Variablen für alle genannten Eigenschaftswerte. 
// Programmieren Sie folgende Logik:
// * Wenn die Durchschnittspunktzahl von Pit größer ist, soll auf der Konsole stehen: 
//     "Pit hat das bessere Zeugnis" 
// * Wenn die Durchschnittspunktzahl von Git größer ist, soll auf der Konsole stehen: 
//     "Git hat das bessere Zeugnis"
// Wenn die Durchschnittspunktzahl gleich ist, dann soll auf der Konsole stehen: 
//     "Pit gleich Git" 
// Wenn die Durchschnittspunktzahl bei einem doppelt so groß oder größer ist, dann soll auf der Konsole stehen: 
//     "Git hat das viel bessere Zeugnis" bzw.
//     "Pit hat das viel bessere Zeugnis"



let PunktePit = 10
let PunkteGit = 11

if (PunktePit > PunkteGit){
    console.log("Pit hat das bessere Zeugnis")
}else{
    console.log("Git hat das bessere Zeugnis")
}

if (PunktePit = PunkteGit){
    console.log("Pit gleich Git")
}else{
} 

if (PunktePit > PunkteGit){
    console.log("Pit hat das viel bessere Zeugnis")
}else{
    console.log("Git hat das viel bessere Zeugnis")
}
