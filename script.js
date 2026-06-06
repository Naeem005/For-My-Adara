const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const question = document.getElementById('question');
const gif = document.getElementById('card-gif');

// Move the No button when hovered or touched
function moveNoButton() {
    // Calculate random position within screen bounds
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    // Teleport the button
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

noBtn.addEventListener('mouseenter', moveNoButton);
noBtn.addEventListener('touchstart', moveNoButton);

// What happens when she finally clicks Yes
yesBtn.addEventListener('click', () => {
    question.textContent = "Yay! I knew you would say yes! ❤️🥰";
    
    // Switch to a celebration GIF
    gif.src = "https://giphy.com";
    
    // Hide the No button entirely
    noBtn.style.display = 'none';
});
