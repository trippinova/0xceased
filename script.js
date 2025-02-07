// Function to create a shooting star
function createShootingStar() {
    const star = document.createElement('div');
    star.className = 'shooting-star';
    
    // Generate random positions
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const delay = Math.random() * 3;
    
    star.style.top = `${top}vh`;
    star.style.left = `${left}vw`;
    star.style.animationDelay = `${delay}s`;
    
    return star;
}

// Function to initialize shooting stars
function initShootingStars() {
    const container = document.getElementById('shooting-stars-container');
    
    // Create 5 shooting stars
    for (let i = 0; i < 5; i++) {
        const star = createShootingStar();
        container.appendChild(star);
    }
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', initShootingStars); 