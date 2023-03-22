# N27-Klausur-20230314

## Aufgabe 1

Beschreiben Sie so präzise wie möglich, was in den Zeilen der server.js geschieht. Die Zeilen können sich durch Ihre Programmierung natürlich verschieben.

### 1a, Zeile 355

Ein signierter Cookie 'istAngemeldetAls' muss im Browser vorhanden sein. Die Prüfung ist dann WAHR und die Anweisungen des if-Körpers werden bearbeitet/abgearbeitet.




### 1b, Zeile 380

Sobald der Button auf der kontoAnlegen Seite gedrück wird, wird die Funktion meineApp.post('/kontoAnlegen'... abgearbeitet. 

let erfolgsmeldung = ""

Im Formular wurde vorher eine Kontoart eingegeben, diese wird jetzt an die konstante namens kontoArt zugewiesen.


### 1c, Zeilen 420 bis 423

Es muss auf der ejs Seite eine Variable <%= Erfolgsmeldung%> geben, damit die Erfolgsmeldung auf der ejs Seite angezeigt wird.


## Aufgabe 2

### 2a

Wenn in der Navigationsleiste der App auf das *i* geklickt wird (Tooltip zeigt "Über uns"), dann kommt es zu einem Fehler.

Wo liegt das Problem? Wie wird der Fehler korrigert? Bitte mit konkreter Angabe der Zeile!

Die Funktion meineApp.get('/about'... kann nicht abgearbeitet werden, da die Instanz meineApp.post('/about'... heißt. 
Durch meineApp.get wird die Funktion abgearbeitet, der Cookie wird  gesetzt und der Kunde nicht zu about Seite im Browser weitergeleitet.
meineApp.post, wird verwendet um im Browser geänderte Daten abzuspeichern, nicht zum öffnen einer Seite im Browser.

geändert: Zeile 229; server.js

### 2b

Wenn Sie auf den Button *Neues Konto anlegen* klicken, kommt es zur Fehlermeldung.

Wo liegt das Problem? Wie wird der Fehler korrigert? Bitte mit konkreter Angabe der Zeile!

Die IBAN ist nicht definiert. 

dbVerbindung.query('INSERT INTO konto(iban, idKunde, anfangssaldo, kontoart, timestamp) VALUES ("' + iban +...

iban, war falsch eingegeben und musste neu geschrieben werden. 


### 2c 

Wenn Sie in der Navigationsleiste auf auf das Personen-Symbol (Tooltip zeigt: "Mein Profil") klicken, dann kommt es zu einer fehlerhaften und unvollständigen Darstellung der Personendaten.

Wo liegen die Probleme? Wie werden die Fehler korrigert? Bitte mit konkreter Angabe der Zeile!


serverAntwort.render('profile.ejs', {
            Vorname: kunde.Nachname,
            Nachname: kunde.Vorname,
            Mail: kunde.eMail,

serverAntwort.render('profile.ejs', {
            Vorname: kunde.Vorname,
            Nachname: kunde.Nachname,
            Mail: kunde.Mail,

Die Instanzen müssen korrekt eingegeben werden, so wie sie mit let kunde definiert wurden (Z.122)
Zeile 249-252

### 2d

In der Navigationsleiste zeigt das Tooltip hinter dem Telefon-Symbol "Über uns". Es muss aber "Support" heißen.

Wie wird der Fehler korrigert? Bitte mit konkreter Angabe der Zeile!

<a href="/support">
                <i class="fa fa-phone-square fa-2x" aria-hidden="true" title="Support"></i>
            </a>   --

In der Navigationsleitste wurde der titel der Support Seite falsch benannt.
Der Titel musste von "Über uns", zu "Support" geändert werden

Zeile 28; support.ejs; & Navigationsleitsten Zeile 28 bei allen Dateien in denen die Suport Seite in der Navigationsleiste steht

### 2e

Wenn Sie auf das Telefonsymbol in der Navigationsleiste klicken, sehen Sie den Kundenberater Zimmermann. Er hat geheiratet und heißt nun Mustermann.

Wie werden die Personendaten korrigert? Bitte mit konkreter Angabe der Zeilen!

let kundenberater = new Kundenberater()
kundenberater.IdKundenberater = 1
kundenberater.Nachname = "Zimmermann"

Die Instanz "kundenberater.Nachname" wird in dem Objekt kundenberater in den Nachnamen "Mustermann" umgeändert
Zeile 145; server.js


## Aufgabe 3

### 3a

Nehmen Sie an, dass unsere Kundenberater in einer eigenen Tabelle namens *kundenberater* gespeichert werden sollen. Formulieren Sie den SQL-Befehl, mit dem Sie den Kundenberater Mustermann in die Tabelle kundenberater neu einfügen: 

dbVerbindung.query('INSERT INTO kundenberater(idKundenberater, Nachname, Vorname, Position, Mail, Rufnummer, Begruessung) VALUES ('", 1, "' + Nachname + '""' + Vorname + '"'", kundenberater.Mail, "''", kundenberater.Rufnummer, "', NOW()) ;', function (fehler) {
      
        if (fehler) {
        
            erfolgsmeldung = "Fehler: " + fehler
            
        }else{
            erfolgsmeldung = "Der Kundenberater" " mit der id " + id.kundenberater + " wurde erfolgreich angelegt."
        }
    
    })

## Aufgabe 4

Auf der Supportseite wird die Mail-Adresse des Kundenberaters angezeigt. Es soll nun so sein, dass sich bei Klick auf die Mail-Adresse das Mailprogramm öffnet.
Wie das programmiert werden muss sehen sie z.B. hier: https://www.freecodecamp.org/news/mailto-link-how-to-make-an-html-email-link-example-code/

Wie und wo (Angabe der Datei und der Zeile) muss Ihr Quelltext verändert werden, damit das funktioniert? Kopieren Sie die Zeile hier hinein:


<a href="https://www.freecodecamp.org/news/mailto-link-how-to-make-an-html-email-link-example-code/"></a>

# Aufgabe 5

Bauen Sie eine neue Seite ein namens ueberweisen.ejs und passen Sie alles an.
Auf der Seite soll der Kunde ausschließlich von einem eigenen Konten Geld an eine beliebige andere IBAN überweisen können.
Bauen Sie ein entsprechendes Formular auf die Seite
Passen Sie die Index-Seite entsprechend an.
Erstellen Sie die app.get(...)

Wenn auf dem Konto kein Geld ist, soll der Button deaktiviert sein. Dazu einige Hilfen:

Der HTML-Quellext mit einem dekativierten Button sieht so aus:

<button class="login" formaction="/kontoAnlegen" disabled>Neues Konto anlegen</button>

Allerdings darf das Wort disabled nur einscheinen, wenn der Konstostand null ist. Also müssen Sie mit dem Ausdruck <%=Disabled%> arbeiten. 
In der server.js muss dann natürlich beim Rendern 

Disabled: disabled,

ausprogrammiert werden. Mit if & else müssen Sie nun versuchen der Variablen disabled den Wert "disabled" oder einfach nur "" zuzuweisen.


Viel Erfolg!




