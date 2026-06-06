const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const question = document.getElementById('question');
const gif = document.getElementById('card-gif');

// Track which page the user is on (Page 1 or Page 2)
let currentPage = 1;

// Hide the runaway button on Page 1 so she is forced to click Next
noBtn.style.display = 'none';

// This function makes the button teleport
function moveNoButton() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

noBtn.addEventListener('mouseenter', moveNoButton);
noBtn.addEventListener('touchstart', moveNoButton);

// Handle the button clicks
yesBtn.addEventListener('click', () => {
    if (currentPage === 1) {
        // --- TRANSITION TO PAGE 2 ---
        currentPage = 2;
        
        // Update text and buttons
        question.textContent = "Will you please forgive me? 🥺❤️";
        yesBtn.textContent = "Yes, I forgive you 🥰";
        noBtn.textContent = "No 😤";
        
        // Make the runaway "No" button appear
        noBtn.style.display = 'inline-block';
        
    } else if (currentPage === 2) {
        // --- TRANSITION TO SUCCESS PAGE ---
        question.textContent = "Yay! Thank you for forgiving me princess!❤️✨";
        
        // Switch to a happy, hugging cat/animal GIF
        gif.src = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOW5nNXN4YTM4MjE1bHBvaTFtMWNzdHpreXdkdG91dHU5emtyaXZodCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IzXiddo2twMmdmU8Lv/giphy.gif";
        
      // Hide the runaway button permanently
        noBtn.style.display = 'none';
    }
}); // <-- Make sure this closing brace, parenthesis, and semicolon are here!
