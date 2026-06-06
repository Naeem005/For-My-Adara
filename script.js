document.addEventListener("DOMContentLoaded", () => {

const envelope = document.getElementById("envelope");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const question = document.getElementById("question");

let opened = false;
let page = 1;

/* 💖 hearts */
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 10) + "px";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";

    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 250);

/* 💌 envelope */
envelope.addEventListener("click", () => {
    if (!opened) {
        envelope.classList.add("open");
        opened = true;
    }
});

/* 😭 no button */
function moveNo() {
    const card = document.getElementById("main-card");

    const maxX = card.offsetWidth - noBtn.offsetWidth;
    const maxY = card.offsetHeight - noBtn.offsetHeight;

    noBtn.style.left = Math.random() * maxX + "px";
    noBtn.style.top = Math.random() * maxY + "px";
}

noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveNo();
});

/* flow */
yesBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    if (page === 1) {
        page = 2;
        question.textContent = "I know that this may not seem like much but I hope you like it 🥺❤️ Will you please forgive me?";
        yesBtn.textContent = "Yes I forgive you 🥰";
        noBtn.style.display = "block";
    } else {
        question.textContent = "Thank you for forgiving me ❤️ I love you 🥺✨";
        yesBtn.style.display = "none";
        noBtn.style.display = "none";
    }
});

/* lightbox */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

document.querySelectorAll(".photo-track img").forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});

});
