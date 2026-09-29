const quotes = [
    "Dream big, work hard, stay humble.",
    "Your only limit is the one you set in your mind.",
    "Success begins when excuses end.",
    "Be stronger than your excuses.",
    "Small steps every day lead to big results.",
    "Don't wait for opportunity. Create it.",
    "Discipline will take you where motivation cannot.",
    "Work in silence, let your success make the noise.",
    "Your future is created by what you do today.",
    "Fall seven times, stand up eight.",
    "Believe in yourself, even when nobody else does.",
    "Hard times build strong people.",
    "Focus on progress, not perfection.",
    "Be so good they can't ignore you.",
    "The pain of discipline is less than the pain of regret.",
    "Don't compare your journey with someone else's destination.",
    "A little progress each day adds up to big results.",
    "Turn your struggles into your strength.",
    "Stay patient. Trust your journey. Keep going.",
    "One day, your hard work will tell your story."
];




function generatebodycolor() {
    const text = document.getElementById('bodyelement');

    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    text.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
setInterval(generatebodycolor, 3000);

const button = document.querySelector('button');
button.addEventListener('click',()=>{                 // dblclick ,mousemove, mouseover, 
    const text = document.getElementById('quote');
    const Index = Math.floor(Math.random() * quotes.length);
    text.textContent = quotes[Index];
})