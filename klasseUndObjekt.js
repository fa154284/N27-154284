console.log("Übungen zu Klasse und Objekt")
console.log("============================")

// Übung 1
// In einem Fußballverein sollen Spieler verwaltet werden. 
// a) Identifizieren Sie das Objekt der realen Welt mit seinen relevanten Eigenschaften
// b) Erstellen Sie die Klassendefinition
// c) Instanzieren Sie ein Objekt der Klasse
// d) Initialisieren Sie das Objekt mit Eigenschaftswerten

//zu a) Das Objekt der realen Welt ist der Spieler.

// zu b)
class Spieler{
    constructor(){
        this.Name
        this.Position
        this.Verein
        this.Nummer
    }
}

//zu c)
// Es wird nun ein konkreter Spieler mit konkreten Eigenschaftswerten erzeugt.
//Dazu wird der konkrete Spieler deklariert (=bekanntgemacht): let spielerMueller
//in einem zweiten Schritt wird der konkrete Spieler instanziiert = new Spieler
let spielerMueller = new Spieler ()

//zu d)
//Es werden konkrete Eigenschaftswerte in den Arbeitsspeicher geschrieben.
spielerMueller.Name = "Thomas Müller"
spielerMueller.Nummer = 25
spielerMueller.Position = "Spieler"
spielerMueller.Verein = "FCB"

console.log(spielerMueller.Name)
console.log(spielerMueller.Position)
console.log

// Übung 2
// In einem Schulprogramm sollen Zeugnisse verwaltet werden. 
// a) Identifizieren Sie das Objekt der realen Welt mit seinen relevanten Eigenschaften
// b) Erstellen Sie die Klassendefinition
// c) Instanzieren Sie ein Objekt der Klasse
// d) Initialisieren Sie das Objekt mit Eigenschaftswerten






// Übung 3
// In einem Kiosk soll das Sortiment mit verwaltet werden. 
// a) Identifizieren Sie das Objekt der realen Welt mit seinen relevanten Eigenschaften
// b) Erstellen Sie die Klassendefinition
// c) Instanzieren Sie ein Objekt der Klasse
// d) Initialisieren Sie das Objekt mit Eigenschaftswerten






// Übung 4
// Für ein Schulfest sollen alle Stände verwaltet werden. 
// a) Identifizieren Sie das Objekt der realen Welt mit seinen relevanten Eigenschaften
// b) Erstellen Sie die Klassendefinition
// c) Instanzieren Sie ein Objekt der Klasse
// d) Initialisieren Sie das Objekt mit Eigenschaftswerten










