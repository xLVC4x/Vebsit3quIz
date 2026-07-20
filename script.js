const fragen = [
    {
        titel: "Frage 1",
        frage: "Luca:\nWo sind wir auf dem Bild?",
        antwort: "csd",
        hintergrund: "bilder/bild1.jpg"
    },
    {
        titel: "Frage 2",
        frage: "Wer ist hier gesucht?",
        antwort: "mila",
        hintergrund: "bilder/bild2.jpg"
    },
    {
        titel: "Frage 3",
        frage: "Ann:\nWie wird mein kompletter Vorname richtig geschrieben ?",
        antwort: "Anyamani",
        hintergrund: "bilder/bild3.jpg"
    },
    {
        titel: "Frage 4",
        frage: "Timo:\nMag ich lieber Kuchen oder Torte?",
        antwort: "beides",
        hintergrund: "bilder/bild4.jpg"
    },
    {
        titel: "Frage 5",
        frage: "Lilli:\nAuf welchem Festival in welchem Jahr haben wir uns kennengelernt?",
        antwort: "Wacken 2017",
        hintergrund: "bilder/bild5.jpg"
    },
    {
        titel: "Frage 6",
        frage: "Niklas:\nWie viel Bier kann ich saufen?",
        antwort: "Ja",
        hintergrund: "bilder/bild6.jpg"
    },
    {
        titel: "Frage 7",
        frage: "Nico:\nIst die Stimme ein Instrument?",
        antwort: "Nein",
        hintergrund: "bilder/bild7.jpg"
    },
    {
        titel: "Frage 8",
        frage: "Clari:\nWer hatte an dem Abend das gleiche Kleid an?",
        antwort: "Marcel",
        hintergrund: "bilder/bild8.jpg"
    },
    {
        titel: "Frage 9",
        frage: "Anni:\nFrage?",
        antwort: "Anni",
        hintergrund: "bilder/bild9.jpg"
    },
    {
        titel: "Frage 10",
        frage: "FredMiri:\n Welche zwei Einkäufe vor ihrem ersten Wacken, hat Darleen noch auf dem Festival bitter bereut?",
        antwort: "Stiege Ravioli und Stiege purer Äppler",
        hintergrund: "bilder/bild10.jpg"
    }
];

const finalBild = "bilder/final.jpg";

let i = 0;

function laden() {
    const f = fragen[i];

    document.body.style.backgroundImage = `url("${f.hintergrund}")`;

    titel.textContent = f.titel;
    frage.textContent = f.frage;
    antwort.value = "";
    msg.textContent = "";

    count.textContent = `Frage ${i + 1} von ${fragen.length}`;
    bar.style.width = `${((i + 1) / fragen.length) * 100}%`;
}

function pruefen() {
    const eingegebeneAntwort = antwort.value.trim().toLowerCase();
    const richtigeAntwort = fragen[i].antwort.trim().toLowerCase();

    if (eingegebeneAntwort === richtigeAntwort) {
        antwort.blur();
        i++;

        if (i >= fragen.length) {
            document.body.style.backgroundImage = `url("${finalBild}")`;
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundPosition = "center";
            document.body.style.backgroundRepeat = "no-repeat";

            document.querySelector(".box").innerHTML = `
                <h1>🎉 Alles Gute zum Geburzelag</h1>
            `;

            return;
        }

        laden();
    } else {
        msg.textContent = "❌ Falsche Antwort";
    }
}

antwort.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        pruefen();
    }
});

laden();
