const envelope = document.getElementById('envelope');
const mainCard = document.getElementById('main-card');
const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const question = document.getElementById('question');
const gif = document.getElementById('card-gif');

let currentPage = 1;
let envelopeOpened = false;

// Hide the runaway button on Page 1
noBtn.style.display = 'none';

// Step 1: Open the envelope on click
envelope.addEventListener('click', (e) => {
    // Prevent button clicks from re-triggering this envelope click event
    if (e.target.tagName === 'BUTTON') return;
    
    if (!envelopeOpened) {
        envelope.classList.add('open');
        envelopeOpened = true;
    }
});

function moveNoButton() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

noBtn.addEventListener('mouseenter', moveNoButton);
noBtn.addEventListener('touchstart', moveNoButton);

// Step 2: Handle card button steps
yesBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Stops envelope from trying to close
    
    if (currentPage === 1) {
        currentPage = 2;
        
        question.textContent = "Will you please forgive me? 🥺❤️";
        yesBtn.textContent = "Yes, I forgive you 🥰";
        noBtn.textContent = "No 😤";
        
        noBtn.style.display = 'block';
        noBtn.style.position = 'absolute';
        
        // Starting position relative to the popped-up card container
        noBtn.style.left = '70%';
        noBtn.style.top = '75%';
        
    } else if (currentPage === 2) {
        question.textContent = "Yay! Thank you for forgiving me! I love you! ❤️✨";
        gif.src = "https://giphy.com";
        noBtn.style.display = 'none';
    }
});
