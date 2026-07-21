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
    },
	{
        titel: "Frage 11",
        frage: "Fiona:\n was esse ich am liebsten?",
        antwort: "Lachs",
        hintergrund: "bilder/bild11.jpg"
    },
	{
        titel: "Frage 12",
        frage: "Sabbie:\n Wo haben wir uns kennengelernt? Hanau, Offenbach, Frankfurt, Rodgau.",
        antwort: "Hanau",
        hintergrund: "bilder/bild12.jpg"
    },
	{
        titel: "Frage 13",
        frage: "NicoNiesie:\n Wie viele Mordreds braucht man bis zum Mond?",
        antwort: "363300000",
        hintergrund: "bilder/bild13.jpg"
    },
	{
        titel: "Frage 14",
        frage: "Sunny:\n Was spiele ich hier genau?",
        antwort: "Gitarre",
        hintergrund: "bilder/bild14.jpg"
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

const bubbleGruppen = [
	 [
	    "❤️ Wir Lieben dich",
	    "🤘 Parity 🤘",
	    "🏕️ Wacken 🏕️",
	    "🌈 CSD 🌈",
	    "🫰Stays🫰",
	    "🫶Danke für alles",
	    "💪Werde und Bleib Gesund💪",
	    "🎲 Auf noch Viele Abenteuer 🎲",
	    "Ann",
	    "Anni",
	    "Timo",
	    "Sunny",
	    "Lilli",
	    "Niklas",
	    "Nico",
	    "Mila",
	    "Miri",
	    "Fred",
	    "Clari",
	    "Luca",
		"Fiona",
		"NiesiesNico",
		"Niesie",
		"Sabbie"
	],
	[
        "Also Eigentlich...",
        "...hat Sunni gesagt...",
        "...Mach das doch nicht..",
        "... und ich so 😄...",
        "...Ja also das wäre vllt wirklich zuviel...",
        "...aber.... aber ... aber..",
        "... als ob Sunni die Webseite ausprobiert...",
        ".... Das müsste Ihr dann ja erstmal jemand stecken ... ",
        "... das ich weitere Bubbles hinzugefügt habe...",
        "... du fragst dich vielleicht...",
        "...Luca wieviele bubbles hast du hinzugefügt..",
        "... lass dir eins gesagt sein...",
        "...GPT war nur für den code da...",
        "... ich habe jede nachricht selber händisch eingetragen...",
        "... während meine Bronchitis wieder richtig aufblüht...",
        "... also viel spaß...",
        "... 1 ...",
    	],
    	[
        "... 2 ...",
        "... 3 ...",
        "... 4 ...",
        "... 5 ...",
        "... 6 ...",
        "... 7 ...",
        "... 8 ...",
        "... 9 ...",
        "... 10 ...",
        "... 11 ...",
        "... 12 ...",
        "... 13 ...",
        "... 14 ...",
        "... 15 ...",
        "... 16 ...",
        "... 17 ...",
        "... 18 ...",
        "... 19 ...",
        "... 20 ...",
	],
	[
	"... 21 ...",
        "... 22 ...",
        "... 23 ...",
        "... 24 ...",
        "... 25 ...",
        "... 26 ...",
        "... 27 ...",
        "... 28 ...",
        "... 29 ...",
        "... 30 ...",
        "... 31 ...",
        "... 32 ...",
        "... 33 ...",
        "... 34 ...",
        "... 35 ...",
        "... 36 ...",
        "... 37 ...",
        "... 38 ...",
        "... 39 ...",
        "... 40 ...",
	],
	[
	"... 41 ...",
        "... 42 ...",
        "... 43 ...",
        "... 44 ...",
        "... 45 ...",
        "... 46 ...",
        "... 47 ...",
        "... 48 ...",
        "... 49 ...",
        "... 50 ...",
        "... 51 ...",
        "... 52 ...",
        "... 53 ...",
        "... 54 ...",
        "... 55 ...",
        "... 56 ...",
        "... 57 ...",
        "... 58 ...",
        "... 59 ...",
        "... 60 ...",
	],
	[
	"... 61 ...",
        "... 62 ...",
        "... 63 ...",
        "... 64 ...",
        "... 65 ...",
        "... 66 ...",
        "... 67 ...",
        "... 68 ...",
        "... 69 ...",
        "... 70 ...",
        "... 71 ...",
        "... 72 ...",
        "... 73 ...",
        "... 74 ...",
        "... 75 ...",
        "... 76 ...",
        "... 77 ...",
        "... 78 ...",
        "... 79 ...",
        "... 70 ...",
	]
];

function zeigeFinale() {
    document.body.style.backgroundImage = `url("${finalBild}")`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";

    const overlay = document.querySelector(".overlay");

    if (overlay) {
        overlay.style.background = "transparent";
    }

    const box = document.querySelector(".box");

    if (box) {
        box.style.display = "none";
    }

    const container = document.createElement("div");
    container.id = "bubbleContainer";
    document.body.appendChild(container);

    /*
     * Speichert, wie viele Bubbles aus jeder Gruppe
     * derzeit sichtbar und noch nicht geplatzt sind.
     */
    const uebrig = [0, 0, 0];

    /*
     * Verhindert, dass eine Gruppe mehrfach gestartet wird.
     */
    const gruppeGestartet = [false, false, false];

    /*
     * Zeigt an, ob alle Bubbles einer Gruppe bereits
     * erzeugt wurden.
     */
    const gruppeVollstaendigGespawnt = [false, false, false];

    /*
     * Erstellt eine einzelne Bubble.
     */
    function bubbleErstellen(text, gruppenIndex) {
        const bubble = document.createElement("div");

        bubble.className = "bubble";
        bubble.textContent = text;

        /*
         * Die Bubble muss zuerst eingefügt werden,
         * damit offsetWidth und offsetHeight bekannt sind.
         */
        container.appendChild(bubble);

        const maximaleXPosition = Math.max(
            0,
            window.innerWidth - bubble.offsetWidth
        );

        const maximaleYPosition = Math.max(
            0,
            window.innerHeight - bubble.offsetHeight
        );

        let x = Math.random() * maximaleXPosition;
        let y = Math.random() * maximaleYPosition;

        /*
         * Geschwindigkeit zwischen ungefähr 1 und 2,5 Pixeln.
         */
        let dx =
            (Math.random() * 1.5 + 1) *
            (Math.random() < 0.5 ? -1 : 1);

        let dy =
            (Math.random() * 1.5 + 1) *
            (Math.random() < 0.5 ? -1 : 1);

        bubble.style.left = `${x}px`;
        bubble.style.top = `${y}px`;

        uebrig[gruppenIndex]++;

        let aktiv = true;

        function bewegen() {
            if (!aktiv || !bubble.isConnected) {
                return;
            }

            x += dx;
            y += dy;

            const maxX = Math.max(
                0,
                window.innerWidth - bubble.offsetWidth
            );

            const maxY = Math.max(
                0,
                window.innerHeight - bubble.offsetHeight
            );

            /*
             * Linker Rand
             */
            if (x < 0) {
                x = 0;
                dx = Math.abs(dx);
            }

            /*
             * Rechter Rand
             */
            if (x > maxX) {
                x = maxX;
                dx = -Math.abs(dx);
            }

            /*
             * Oberer Rand
             */
            if (y < 0) {
                y = 0;
                dy = Math.abs(dy);
            }

            /*
             * Unterer Rand
             */
            if (y > maxY) {
                y = maxY;
                dy = -Math.abs(dy);
            }

            bubble.style.left = `${x}px`;
            bubble.style.top = `${y}px`;

            requestAnimationFrame(bewegen);
        }

        bewegen();

        bubble.addEventListener(
            "click",
            function () {
                /*
                 * Verhindert mehrfaches Anklicken derselben Bubble.
                 */
                if (!aktiv) {
                    return;
                }

                aktiv = false;
                bubble.classList.add("pop");

                uebrig[gruppenIndex]--;

                /*
                 * Gruppe 2 starten, wenn Gruppe 1
                 * nur noch vier Bubbles hat.
                 */
                if (
                    gruppenIndex === 0 &&
                    uebrig[0] <= 4 &&
                    !gruppeGestartet[1]
                ) {
                    gruppeStarten(1, 500);
                }

                /*
                 * Gruppe 3 erst starten, wenn:
                 *
                 * 1. Gruppe 2 vollständig gespawnt wurde
                 * 2. nur noch vier Bubbles aus Gruppe 2 übrig sind
                 */
                if (
                    gruppenIndex === 1 &&
                    gruppeVollstaendigGespawnt[1] &&
                    uebrig[1] <= 4 &&
                    !gruppeGestartet[2]
                ) {
                    gruppeStarten(2, 500);
                }

                setTimeout(function () {
                    bubble.remove();
                    finalePruefen();
                }, 300);
            },
            { once: true }
        );
    }

    /*
     * Startet eine vollständige Bubble-Gruppe.
     *
     * Bei Gruppe 1 ist der Abstand 0:
     * Alle Bubbles erscheinen sofort.
     *
     * Bei Gruppe 2 und 3 beträgt der Abstand 500 ms.
     */
    function gruppeStarten(gruppenIndex, spawnAbstand) {
        if (gruppeGestartet[gruppenIndex]) {
            return;
        }

        gruppeGestartet[gruppenIndex] = true;

        const texte = bubbleGruppen[gruppenIndex];

        if (spawnAbstand === 0) {
            texte.forEach(function (text) {
                bubbleErstellen(text, gruppenIndex);
            });

            gruppeVollstaendigGespawnt[gruppenIndex] = true;
            return;
        }

        texte.forEach(function (text, index) {
            setTimeout(function () {
                bubbleErstellen(text, gruppenIndex);

                /*
                 * Beim letzten Eintrag ist die Gruppe
                 * vollständig gespawnt.
                 */
                if (index === texte.length - 1) {
                    gruppeVollstaendigGespawnt[gruppenIndex] = true;

                    /*
                     * Falls beim langsamen Spawnen der zweiten Gruppe
                     * bereits Bubbles geplatzt wurden, prüfen wir sofort,
                     * ob Gruppe 3 gestartet werden darf.
                     */
                    if (
                        gruppenIndex === 1 &&
                        uebrig[1] <= 4 &&
                        !gruppeGestartet[2]
                    ) {
                        gruppeStarten(2, 500);
                    }

                    finalePruefen();
                }
            }, index * spawnAbstand);
        });
    }

    /*
     * Glückwunsch erst anzeigen, wenn:
     *
     * - Gruppe 3 vollständig gespawnt wurde
     * - in allen drei Gruppen keine Bubble mehr übrig ist
     */
    function finalePruefen() {
        const alleBubblesGeplatzt =
            uebrig[0] === 0 &&
            uebrig[1] === 0 &&
            uebrig[2] === 0;

        if (
            gruppeVollstaendigGespawnt[2] &&
            alleBubblesGeplatzt
        ) {
            glueckwunschAnzeigen();
        }
    }

    function glueckwunschAnzeigen() {
        if (document.querySelector("#finalText")) {
            return;
        }

        const ende = document.createElement("div");
        ende.id = "finalText";

        ende.innerHTML = `
            <div class="finalTextBox">
                <h1>🎉 Du hast es geschafft ❤️</h1>
            </div>
        `;

        document.body.appendChild(ende);
    }

    /*
     * Die erste Gruppe erscheint sofort.
     */
    gruppeStarten(0, 0);
}

laden();
