const fragen=[
{titel:"Frage 1",frage:"Luca: /n Wo sind wir auf dem Bild?",antwort:"csd",hintergrund:"bilder/bild1.jpg"},
{titel:"Frage 2",frage:"Wer ist hier gesucht?",antwort:"mila",hintergrund:"bilder/bild2.jpg"},
{titel:"Frage 3",frage:"Ann: /n Frage?",antwort:"Ann",hintergrund:"bilder/bild3.jpg"},
{titel:"Frage 4",frage:"Timo: /n Mag ich lieber Kuchen oder Torte?",antwort:"beides",hintergrund:"bilder/bild4.jpg"},
{titel:"Frage 5",frage:"Lilly: /n Auf welchem Festival in welchem Jahr haben wir uns kennengelernt  ?",antwort:"Wacken 2017",hintergrund:"bilder/bild5.jpg"}
{titel:"Frage 6",frage:"6",antwort:"6",hintergrund:"bilder/bild6.jpg"}
];
let i=0;
function laden(){
let f=fragen[i];
document.body.style.backgroundImage=`url(${f.hintergrund})`;
titel.textContent=f.titel;
frage.textContent=f.frage;
antwort.value="";
msg.textContent="";
count.textContent=`Frage ${i+1} von ${fragen.length}`;
bar.style.width=((i+1)/fragen.length*100)+"%";
antwort.focus();
}
function pruefen(){
if(antwort.value.trim().toLowerCase()===fragen[i].antwort.toLowerCase()){
i++;
if(i>=fragen.length){
document.querySelector('.box').innerHTML='<h1>🎉 Geschafft!</h1><p>Alle Fragen richtig beantwortet.</p>';
document.body.style.backgroundImage='none';
return;
}
laden();
}else{
msg.textContent="❌ Falsche Antwort";
}
}
antwort.addEventListener('keydown',e=>{if(e.key==='Enter')pruefen();});
laden();
