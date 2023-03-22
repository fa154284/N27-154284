var IBAN = require('iban');

var mysql = require('mysql'); 

var dbVerbindung = mysql.createConnection({
    host: "10.40.38.110",
    user: "placematman",
    password: "BKB123456!",
    database: "dbn27"
});

dbVerbindung.connect(function(err) {

    if (err) throw err;
  
    console.log("Connected!");
});

dbVerbindung.connect(function(fehler){

    dbVerbindung.query('CREATE TABLE kunde(idKunde INT(11), vorname VARCHAR(45), nachname VARCHAR(45), ort VARCHAR(45), kennwort VARCHAR(45), mail VARCHAR(45), PRIMARY KEY(idKunde));', function (fehler) {
    
    if (fehler) {

        if(fehler.code == "ER_TABLE_EXISTS_ERROR"){

            console.log("Tabelle kunde existiert bereits und wird nicht angelegt.")
        
        }else{
            console.log("Fehler: " + fehler )
        }
    }else{
            console.log("Tabelle Kunde erfolgreich angelegt.")
         }
    })
});

dbVerbindung.connect(function(fehler){
  
    dbVerbindung.query('CREATE TABLE kredit(idKunde INT(11), datum DATETIME, zinssatz FLOAT, laufzeit INT(11), betrag SMALLINT, PRIMARY KEY(idKunde,datum));', function (fehler) {
      
        if (fehler) {
  
            if(fehler.code == "ER_TABLE_EXISTS_ERROR"){
  
                console.log("Tabelle kredit existiert bereits und wird nicht angelegt.")
          
            }else{
            
                console.log("Fehler: " + fehler )
            }
        }else{
            
            console.log("Tabelle kredit erfolgreich angelegt.")
        }
    })
})

dbVerbindung.connect(function(fehler){
  
    dbVerbindung.query('CREATE TABLE konto(iban VARCHAR(45), idKunde INT(11), anfangssaldo FLOAT, kontoart VARCHAR(45), timestamp TIMESTAMP, PRIMARY KEY(iban));', function (fehler) {
      
        if (fehler) {
      
            if(fehler.code == "ER_TABLE_EXISTS_ERROR"){
  
                console.log("Tabelle kredit existiert bereits und wird nicht angelegt.")
          
          }else{
              
            console.log("Fehler: " + fehler )
          }
        }else{
            
            console.log("Tabelle kredit erfolgreich angelegt.")
        }
    })
})

dbVerbindung.query('INSERT INTO kunde(idKunde, vorname, nachname, ort, kennwort, mail) VALUES (150000, "Pit", "Kiff", "BOR", "123!", "pk@web.de") ;', function (fehler) {
    
    if (fehler) {
    
        if(fehler.code == "ER_TABLE_EXISTS_ERROR"){

            console.log("Tabelle kredit existiert bereits und wird nicht angelegt.")
        
        }else{
            console.log("Fehler: " + fehler )
        }
    }else{
    
        console.log("Tabelle kredit erfolgreich angelegt.")
    }
})

class Kredit{
    constructor(){
        this.Zinssatz
        this.Laufzeit
        this.Betrag
    }

    berechneGesamtkostenKreditNachEinemJahr(){
        return this.Betrag * this.Zinssatz / 100 + this.Betrag
    }
}


class Überweisungen{
    constructor(){
        this.Überweisungssumme
        this.Empfängeriban
    }
}

class Kunde{
    constructor(){
        this.IdKunde
        this.Nachname
        this.Vorname
        this.Kennwort
        this.Kontostand
        this.Geburtsdatum
        this.Mail
        this.Rufnummer
    }
}

let kunde = new Kunde()
kunde.IdKunde = 150000
kunde.Nachname = "Müller"
kunde.Vorname = "Pit"
kunde.Geburtsdatum = "23.10.2000"
kunde.Mail = "mueller@web.de"
kunde.Kennwort = "123"
kunde.Rufnummer = "+49123/4567890"

class Kundenberater{
    constructor(){
        this.IdKundenberater
        this.Nachname
        this.Vorname
        this.Position
        this.Mail
        this.Rufnummer
        this.Begruessung
    }
}

let kundenberater = new Kundenberater()
kundenberater.IdKundenberater = 1
kundenberater.Nachname = "Zimmermann"
kundenberater.Vorname = "Franz"
kundenberater.Mail = "zimmermann@n27.com"
kundenberater.Rufnummer = "+49123/4567890"
kundenberater.Begruessung = "Hallo, ich bin's, Dein Kundenberater!"
kundenberater.Position = "Master of desaster"

class Konto{
    constructor(){

        this.Kontostand
        this.IBAN
        this.Kontoart
        this.Pin
    }
}

let konto = new Konto()

konto.IBAN = "DE1234567890123456"
konto.Kontostand = 1000000
konto.Kontoart = "Giro"

const express = require('express')
const bodyParser = require('body-parser')
const meineApp = express()
const cookieParser = require('cookie-parser')
meineApp.set('view engine', 'ejs')
meineApp.use(express.static('public'))
meineApp.use(bodyParser.urlencoded({extended: true}))
meineApp.use(cookieParser('geheim'))

const server = meineApp.listen(process.env.PORT || 3000, () => {
    console.log('Server lauscht auf Port %s', server.address().port)    
})

meineApp.get('/',(browserAnfrage, serverAntwort, next) => {              

    if(browserAnfrage.signedCookies['istAngemeldetAls']){

        serverAntwort.render('index.ejs',{})
    }else{

        serverAntwort.render('login.ejs', {
            Meldung: ""
        })
    }                 
})

meineApp.post('/login',(browserAnfrage, serverAntwort, next) => {              
    
    const idKunde = browserAnfrage.body.IdKunde
    const kennwort = browserAnfrage.body.Kennwort
    
    console.log("ID des Kunden: " + idKunde)
    console.log("Kennwort des Kunden: " + kennwort)
    
    if(idKunde == kunde.IdKunde && kennwort == kunde.Kennwort){
    
        serverAntwort.cookie('istAngemeldetAls',JSON.stringify(kunde),{signed:true})
        console.log("Der Cookie wurde erfolgreich gesetzt.")
        
        console.log("Jetzt werden die Konten eingelesen")

        serverAntwort.render('index.ejs', {})
    }else{

        serverAntwort.render('login.ejs', {
            Meldung : "Ihre Zugangsdaten scheinen nicht zu stimmen."
        })
    }
})

meineApp.get('/login',(browserAnfrage, serverAntwort, next) => {              

    serverAntwort.clearCookie('istAngemeldetAls')

    serverAntwort.render('login.ejs', {

        Meldung: "Bitte geben Sie die Zugangsdaten ein."

    })          
})

meineApp.get('/about',(browserAnfrage, serverAntwort, next) => {              

    if(browserAnfrage.signedCookies['istAngemeldetAls']){
        
        serverAntwort.render('about.ejs',{})

    }else{

        serverAntwort.render('login.ejs', {
            Meldung: ""
        })
    }         
})



meineApp.get('/profile',(browserAnfrage, serverAntwort, next) => {              

    if(browserAnfrage.signedCookies['istAngemeldetAls']){

        serverAntwort.render('profile.ejs', {
            Vorname: kunde.Nachname,
            Nachname: kunde.Vorname,
            Mail: kunde.eMail,
            Rufnummer: kunde.Rufnummer,
            Kennwort: kunde.Kennwort,
            Erfolgsmeldung: ""
        })
    }else{
        serverAntwort.render('login.ejs',{
            Meldung: ""
        })
    }          
})

meineApp.get('/support',(browserAnfrage, serverAntwort, next) => {              

    if(browserAnfrage.signedCookies['istAngemeldetAls']){
        serverAntwort.render('support.ejs', {
            Vorname: kundenberater.Vorname,
            Nachname: kundenberater.Nachname,
            Mail: kundenberater.Mail,
            Rufnummer: kundenberater.Rufnummer,
            Begruessung: kundenberater.Begruessung,
            Position: kundenberater.Position
        })
    }else{
        serverAntwort.render('login.ejs',{
            Meldung: ""
        })
    }              
})

meineApp.get('/kreditBerechnen',(browserAnfrage, serverAntwort, next) => {              

    if(browserAnfrage.signedCookies['istAngemeldetAls']){
        serverAntwort.render('kreditBerechnen.ejs', {
            Betrag: "",
            Laufzeit: "",
            Zinssatz:"",
            Erfolgsmeldung:""
        })
    }else{
        serverAntwort.render('login.ejs',{
            Meldung: ""
        })
    }              
})


meineApp.get('/ueberweisen',(browserAnfrage, serverAntwort, next) => {              

    if(browserAnfrage.signedCookies['istAngemeldetAls']){
        serverAntwort.render('ueberweisen.ejs', {
            Ueberweisungssumme: "",
            Empaengeriban: "",
            Erfolgsmeldung:""
        })
    }else{
        serverAntwort.render('login.ejs',{
            Meldung: ""
        })
    }              
})

meineApp.get('/kontoAnlegen',(browserAnfrage, serverAntwort, next) => {              

    if(browserAnfrage.signedCookies['istAngemeldetAls']){

        serverAntwort.render('kontoAnlegen.ejs', {

            Erfolgsmeldung: ""

        })
    }else{

        serverAntwort.render('login.ejs',{
            Meldung: ""
        })
    }              
})

meineApp.post('/profile',(browserAnfrage, serverAntwort, next) => {              

    let erfolgsmeldung = ""

    if(kunde.Mail != browserAnfrage.body.Mail){

        erfolgsmeldung = erfolgsmeldung + "Änderung der Mail erfolgreich. "
        kunde.Mail = browserAnfrage.body.Mail
        console.log(erfolgsmeldung)
    }

    if(kunde.Kennwort != browserAnfrage.body.Kennwort){
        erfolgsmeldung = erfolgsmeldung + "Änderung des Kennworts erfolgreich. "
        kunde.Kennwort = browserAnfrage.body.Kennwort
        console.log(erfolgsmeldung)
    }

    if(kunde.Rufnummer != browserAnfrage.body.Rufnummer){

        erfolgsmeldung = erfolgsmeldung + "Änderung der Rufnummer erfolgreich. "
        kunde.Rufnummer = browserAnfrage.body.Rufnummer
        console.log(erfolgsmeldung)
    }
    
    console.log("Profil gespeichert.")
    
    serverAntwort.render('profile.ejs', {
        Vorname: kunde.Vorname,
        Nachname: kunde.Nachname,
        Mail: kunde.Mail,
        Rufnummer: kunde.Rufnummer,
        Kennwort: kunde.Kennwort,
        Erfolgsmeldung: erfolgsmeldung
    })
})

meineApp.post('/ueberweisen',(browserAnfrage, serverAntwort, next) => {              

    let erfolgsmeldung = ""

    if (fehler) {
        
        erfolgsmeldung = "<%=disabled%>: " + fehler
        
    }else{
        erfolgsmeldung = "Die Überweisung wurde erfolgreich getätigt"
    }

    if(this.Überweisungssumme != browserAnfrage.body.Überweisungssumme){

        erfolgsmeldung = erfolgsmeldung + "Überweisung der Überweisungssumme erfolgreich. "
        Ueberweisungssumme = browserAnfrage.body.Ueberweisungssumme
        console.log(erfolgsmeldung)
    }

    if(this.Empfängeriban != browserAnfrage.body.Empfaengeriban){
        erfolgsmeldung = erfolgsmeldung + "Eingabe der Empfängeriban erfolgreich. "
        Empfaengeriban = browserAnfrage.body.Empfaengeriban
        console.log(erfolgsmeldung)
    }
    
    console.log("Überweisung getätigt.")
    
    serverAntwort.render('ueberweisen.ejs', {
        Ueberweisungssumme: Ueberweisungssumme,
        Empfaengeriban: Empfaengeriban,
        Erfolgsmeldung: erfolgsmeldung
    })
})





meineApp.get('/kontostandAnzeigen',(browserAnfrage, serverAntwort, next) => {              
    
    if(browserAnfrage.signedCookies['istAngemeldetAls']){
        
        // Aufgabe 1a

        dbVerbindung.query('SELECT * FROM konto WHERE idKunde = 150000;', function (fehler, result) {      

            console.log(result)

            serverAntwort.render('kontostandAnzeigen.ejs',{
                MeineIbans: result,
                Kontostand: konto.Kontostand,
                IBAN: konto.IBAN,
                Kontoart: konto.Kontoart,
                Erfolgsmeldung: ""
            })
        })
    }else{
        serverAntwort.render('login.ejs', {
            Meldung: ""
        })
    }                 
})

meineApp.post('/kontoAnlegen',(browserAnfrage, serverAntwort, next) => {              
    
    let erfolgsmeldung = ""

    // Aufgabe 1b

    const kontoArt = browserAnfrage.body.kontoArt
    
    console.log("Gewählte Kontart: " + kontoArt)

    let laenderkennung = "DE"
    
    let bankleitzahl = 27000000

    let min = 1111111111;

    let max = 9999999999;

    let zufaelligeKontonummer = Math.floor(Math.random() * (max - min + 1)) + min;
    
    console.log("Die zufällig generierte Kontonummer lautet " + zufaelligeKontonummer)

    let iban = IBAN.fromBBAN(laenderkennung, bankleitzahl + " " + zufaelligeKontonummer)

    console.log("IBAN: " + iban)

    if(IBAN.isValid(iban)){
        console.log("Die IBAN ist gültig.")
    }else{
        console.log("Die IBAN ist ungültig.")
    }

    dbVerbindung.query('INSERT INTO konto(iban, idKunde, anfangssaldo, kontoart, timestamp) VALUES ("' + iban + '", 154284, 1, "' + kontoArt + '", NOW()) ;', function (fehler) {
      
        if (fehler) {
        
            erfolgsmeldung = "Fehler: " + fehler
            
        }else{
            erfolgsmeldung = "Das " + kontoArt + " mit der IBAN " + iban + " wurde erfolgreich angelegt."
        }
    
    })

    // Aufgabe 1c

    serverAntwort.render('kontoAnlegen.ejs', {

            Erfolgsmeldung: erfolgsmeldung
    })    
})