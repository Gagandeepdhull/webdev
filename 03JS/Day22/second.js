
document.body.addEventListener("click", (event) => {
    const circle = document.createElement("div");
    circle.className = "circle";

    const x = event.clientX;
    const y = event.clientY;

    circle.style.left = `${x - 25}px`;
    circle.style.top = `${y - 25}px`;

    const color = ["red", "blue", "green", "orange", "yellow", "purple"];
    circle.style.backgroundColor = color[Math.floor(Math.random() * color.length)];

    const message = ["hi", "hello", "hey", "lets", "go", "welcome", "by"];

    const randomMessage = Math.floor(Math.random() * message.length);
    circle.textContent = message[randomMessage];

    document.body.appendChild(circle);

    setTimeout(() => {
        circle.remove();
    }, 5000);
});