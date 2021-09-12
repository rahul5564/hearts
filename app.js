function createheart() {
    const heart = document.createElement("div")

    heart.classList.add("heart");

    heart.innerText = "💜";

    heart.style.left = Math.random() * 100 + "vw"; 

    heart.style.animationDuration = Math.random() * 10 + 5 + "s";

    document.body.appendChild(heart);
}

setInterval(createheart,50);