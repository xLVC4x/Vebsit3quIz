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
           zeigeFinale();
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

const finalBild = "bilder/final.jpg";

const bubbles = [
    "❤️ Ich liebe dich",
    "🌸 Unser erstes Date",
    "🎵 Unser Lied",
    "🏕️ Wacken 2017",
    "🌈 CSD",
    "💋 Unser erster Kuss",
    "✨ Lieblingsmensch",
    "🫶 Danke",
    "❤️ Für immer",
    "🌍 Noch viele Abenteuer"
];

function zeigeFinale() {

    document.body.style.backgroundImage = `url("${finalBild}")`;

    document.querySelector(".overlay").style.background = "rgba(0,0,0,.15)";

    document.querySelector(".box").remove();

    const container = document.createElement("div");
    container.id = "bubbleContainer";
    document.body.appendChild(container);

    let uebrig = bubbles.length;

    bubbles.forEach(text => {

        const bubble = document.createElement("div");

        bubble.className = "bubble";
        bubble.textContent = text;

        bubble.style.left = Math.random() * (window.innerWidth - 180) + "px";
        bubble.style.top = Math.random() * (window.innerHeight - 100) + "px";

        let dx = (Math.random() * 2 + 1) * (Math.random() < 0.5 ? -1 : 1);
        let dy = (Math.random() * 2 + 1) * (Math.random() < 0.5 ? -1 : 1);

        function bewegen() {

            let x = bubble.offsetLeft;
            let y = bubble.offsetTop;

            x += dx;
            y += dy;

            if (x <= 0 || x >= window.innerWidth - bubble.offsetWidth)
                dx *= -1;

            if (y <= 0 || y >= window.innerHeight - bubble.offsetHeight)
                dy *= -1;

            bubble.style.left = x + "px";
            bubble.style.top = y + "px";

            if (document.body.contains(bubble))
                requestAnimationFrame(bewegen);
        }

        bewegen();

        bubble.onclick = () => {

            bubble.classList.add("pop");

            setTimeout(() => {

                bubble.remove();

                uebrig--;

                if (uebrig === 0) {

                    const ende = document.createElement("div");

                    ende.id = "finalText";

                    ende.innerHTML = `
                        <h1>🎉 Du hast es geschafft ❤️</h1>
                        <p>Danke, dass du mein Quiz gespielt hast.</p>
                    `;

                    document.body.appendChild(ende);

                }

            },300);

        };

        container.appendChild(bubble);

    });

}
