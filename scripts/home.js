function fixVirus() {
    // Play beep sound
    const beep = document.getElementById('beepSound');
    beep.play();

    // Vibrate for 500ms
    if (navigator.vibrate) {
        navigator.vibrate(500);
    }

    // Stop background blinking
    document.body.style.animation = 'none';

    // Show loading bar
    const loadingContainer = document.getElementById('loadingContainer');
    const loadingBar = document.getElementById('loadingBar');
    loadingContainer.style.display = 'block';

    let width = 0;
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            showJustKidding();
        } else {
            width += 2; // Increase speed
            loadingBar.style.width = width + '%';
        }
    }, 100);
}

function showJustKidding() {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    document.body.innerHTML = '<h1>😆 Just kidding!</h1><p>There is no virus. Have a nice day!</p>';
}
