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
        frage: "Ann:\nFrage?",
        antwort: "Ann",
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
        frage: "7",
        antwort: "7",
        hintergrund: "bilder/bild7.jpg"
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
                <h1>🎉 Geschafft!</h1>
                <p>Alle Fragen richtig beantwortet.</p>
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
