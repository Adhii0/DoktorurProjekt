// IDE add meg a képeidet a kepek mappából
let kartyakTartalom = [
    "kepek/67-kid.jpg",
    "kepek/absoluteCINEMA.jpg",
    "kepek/alek.jpg",
    "kepek/alek2.jpg",
    "kepek/alekbudi.jpeg",
    "kepek/alekprint.jpeg",
    "kepek/ali.jpg",
    "kepek/berti.jpg",
    "kepek/buek.jpg",
    "kepek/bugi.jpg",
    "kepek/cula.jpg",
    "kepek/cula2.jpg",
    "kepek/cunya.jpg",
    "kepek/cunya2.jpg",
    "kepek/cunya3.jpg",
    "kepek/cunya4.jpg",
    "kepek/cunya5.jpg",
    "kepek/cunya6.jpg",
    "kepek/csajosduo.jpg",
    "kepek/csibicsabi.jpg",
    "kepek/csovi.png",
    "kepek/dombo.jpg",
    "kepek/gang.jpeg",
    "kepek/gang2.jpeg",
    "kepek/gib.jpg",
    "kepek/hazilinuk.jpg",
    "kepek/holyog.jpg",
    "kepek/horog.jpg",
    "kepek/kelvin.jpg",
    "kepek/konfúzd.jpg",
    "kepek/kopter.jpg",
    "kepek/love.jpg",
    "kepek/mafti.jpg",
    "kepek/mafti2.jpg",
    "kepek/mcburger.jpg",
    "kepek/mikler.jpg",
    "kepek/miklo.jpeg",
    "kepek/munkasmiki.jpg",
    "kepek/niga.jpg",
    "kepek/nyami.jpg",
    "kepek/ocsmany.jpg",
    "kepek/patyesz.jpg",
    "kepek/patyi.jpg",
    "kepek/svedasztal.jpg",
    "kepek/swaggibi.jpg",
    "kepek/szaly.jpg",
    "kepek/szivo.jpeg",
    "kepek/verok.jpeg",
    "kepek/verok2.jpeg",
    "kepek/vityo.jpg",
];
// HTML elemek lekéréses
const szintSelect = document.getElementById("szint");
const jatek = document.getElementById("jatek");
const lepesKiir = document.getElementById("lepesek");
const uzenet = document.getElementById("uzenet");
const pontKiir = document.getElementById("pontszam");
const idoKiir = document.getElementById("ido");

// Játék állapotának változói
let elso = null;
let masodik = null;
let zarolva = false;
let lepesek = 0;
let talalat = 0;
let pontok = 0;
let voltMarTalalat = false;
let ido = 0;
let idoInterval = null;

// Keverő függvény a kártyák véletlenszerű sorrendjéhez
function kever(tomb) {
    return tomb.sort(() => Math.random() - 0.5);
}

function idoFormatum(osszMasodperc) {
    const perc = Math.floor(osszMasodperc / 60);
    const mp = osszMasodperc % 60;

    if (perc > 0) {
        // Ha eléri az egy percet, kiírja a perceket is
        return ${perc}p ${mp < 10 ? '0' : ''}${mp};
    } else {
        // Egy perc alatt csak a másodperceket írja
        return ${mp} ;
    }
}
