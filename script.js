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
document.addEventListener('DOMContentLoaded', function() {
    const landingScreen = document.getElementById('landing-screen');
    const mainContent = document.getElementById('main-content-wrapper');
    const music = document.getElementById('background-music');
    const container = document.querySelector('.container');
    let hasEntered = false;

    // Audio analysis setup
    let audioContext, analyser, dataArray;

    function setupAudioAnalysis() {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioContext.createAnalyser();
        const source = audioContext.createMediaElementSource(music);
        
        source.connect(analyser);
        analyser.connect(audioContext.destination);
        
        analyser.fftSize = 256;
        const bufferLength = analyser.frequencyBinCount;
        dataArray = new Uint8Array(bufferLength);
    }

    function addBassEffect() {
        if (!audioContext) return;
        
        analyser.getByteFrequencyData(dataArray);
        
        // Focus on the lowest frequencies (bass)
        const bassSum = dataArray.slice(0, 4).reduce((a, b) => a + b, 0);
        const bassAverage = bassSum / 4;
        
        // Increase threshold to only trigger on stronger bass hits
        if (bassAverage > 232) { // Increased threshold from 120 to 180
            // Make the effect more intense but briefer
            const shakeIntensity = (bassAverage / 255) * 20; // Increased max shake
            const blurIntensity = (bassAverage / 255) * 3;  // Increased max blur
            
            container.style.transform = `translate(${Math.random() * shakeIntensity - shakeIntensity/2}px, ${Math.random() * shakeIntensity - shakeIntensity/2}px)`;
            container.style.filter = `blur(${blurIntensity}px)`;
            
            // Reset the effect quickly
            setTimeout(() => {
                container.style.transform = 'translate(0, 0)';
                container.style.filter = 'blur(0)';
            }, 40); // Quick reset after 100ms
        } else {
            container.style.transform = 'translate(0, 0)';
            container.style.filter = 'blur(0)';
        }
        
        requestAnimationFrame(addBassEffect);
    }

    landingScreen.addEventListener('click', function() {
        if (!hasEntered) {
            hasEntered = true;
            
            // Setup audio analysis
            setupAudioAnalysis();
            
            // Play music
            music.play().then(() => {
                // Start bass effect after music starts
                addBassEffect();
            }).catch(function(error) {
                console.log("Audio play failed:", error);
            });

            // Fade out landing screen
            landingScreen.classList.add('fade-out');
            
            // Show main content
            setTimeout(() => {
                landingScreen.style.display = 'none';
                mainContent.classList.remove('hidden');
                initShootingStars();
            }, 1000);
        }
    });
}); 