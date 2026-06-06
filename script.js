document.addEventListener("DOMContentLoaded", () => {

    const envelope = document.getElementById('envelope');
    const noBtn = document.getElementById('no-btn');
    const yesBtn = document.getElementById('yes-btn');
    const question = document.getElementById('question');
    const gif = document.getElementById('card-gif');

    let currentPage = 1;
    let envelopeOpened = false;

    // Step 1: Open envelope
    envelope.addEventListener('click', (e) => {

        if (e.target.closest('button') || e.target.closest('.card-container')) {
            return;
        }

        if (!envelopeOpened) {
            envelope.classList.add('open');
            envelopeOpened = true;
        }
    });

    // Step 2: Move NO button
    function moveNoButton() {
        const card = document.getElementById('main-card');

        const maxX = card.offsetWidth - noBtn.offsetWidth - 20;
        const maxY = card.offsetHeight - noBtn.offsetHeight - 20;

        const x = Math.random() * maxX;
        const y = Math.random() * maxY;

        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    }

    noBtn.addEventListener('mouseenter', moveNoButton);
    noBtn.addEventListener('touchstart', moveNoButton);

    // Step 3: Yes button logic
    yesBtn.addEventListener('click', (e) => {
        e.stopPropagation();

        if (currentPage === 1) {
            currentPage = 2;

            question.textContent = "Will you please forgive me? 🥺❤️";
            yesBtn.textContent = "Yes, I forgive you 🥰";
            noBtn.textContent = "No 😤";

            noBtn.style.display = 'block';

            // starting position
            noBtn.style.left = '60%';
            noBtn.style.top = '60%';

        } else if (currentPage === 2) {

            question.innerHTML = `
                Thank you for forgiving me Princess ❤️<br><br>
                I promise to do better for you 🥺✨
            `;

            gif.src = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOW5nNXN4YTM4MjE1bHBvaTFtMWNzdHpreXdkdG91dHU5emtyaXZodCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IzXiddo2twMmdmU8Lv/giphy.gif";

            yesBtn.style.display = "none";
            noBtn.style.display = "none";
        }
    });

});
