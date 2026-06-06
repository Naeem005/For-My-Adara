document.addEventListener("DOMContentLoaded", () => {

    const envelope = document.getElementById('envelope');
    const noBtn = document.getElementById('no-btn');
    const yesBtn = document.getElementById('yes-btn');
    const question = document.getElementById('question');
    const gif = document.getElementById('card-gif');

    let currentPage = 1;
    let envelopeOpened = false;

    // 💖 HEARTS
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

    // 💌 OPEN ENVELOPE
    envelope.addEventListener('click', (e) => {

        if (e.target.closest('button') || e.target.closest('.card-container')) return;

        if (!envelopeOpened) {
            envelope.classList.add('open');
            envelopeOpened = true;
        }
    });

    // 😭 RUNAWAY BUTTON
    function moveNoButton() {
        const card = document.getElementById('main-card');

        const maxX = card.offsetWidth - noBtn.offsetWidth - 20;
        const maxY = card.offsetHeight - noBtn.offsetHeight - 20;

        noBtn.style.left = Math.random() * maxX + "px";
        noBtn.style.top = Math.random() * maxY + "px";
    }

    noBtn.addEventListener('mouseenter', moveNoButton);
    noBtn.addEventListener('touchstart', moveNoButton);

    // 💖 FLOW
    yesBtn.addEventListener('click', (e) => {
        e.stopPropagation();

        if (currentPage === 1) {
            currentPage = 2;

            question.textContent = "Will you please forgive me? 🥺❤️";
            yesBtn.textContent = "Yes, I forgive you 🥰";
            noBtn.textContent = "No 😤";

            noBtn.style.display = 'block';

            noBtn.style.left = "60%";
            noBtn.style.top = "60%";

        } else if (currentPage === 2) {

            question.innerHTML = `
                Thank you for forgiving me Princess ❤️<br><br>
                I promise I’ll do better for you 🥺✨
            `;

            gif.src = "https://media.giphy.com/media/26BRv0ThflsHCqDrG/giphy.gif";

            yesBtn.style.display = "none";
            noBtn.style.display = "none";
        }
    });

});
