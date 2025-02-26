// Countdown Timer
const eventDate = new Date('March 3, 2025 19:00:00').getTime();

const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) /  (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) /  (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) /  1000);

    // Output the results
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = ('0' + hours).slice(-2);
    document.getElementById('minutes').innerText = ('0' + minutes).slice(-2);
    document.getElementById('seconds').innerText = ('0' + seconds).slice(-2);

    // If the countdown is over
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById('countdown-timer').innerHTML = "<p>The event has started!</p>";
    }
}, 1000);

// Modal Functionality
const modalOverlay = document.getElementById('modal-overlay');
const detailsButton = document.getElementById('details-button');
const closeModal = document.getElementById('close-modal');
const downloadButton = document.getElementById('download-button');

detailsButton.addEventListener('click', () => {
    modalOverlay.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
});

// Optional: Download Button Functionality
downloadButton.addEventListener('click', () => {
    window.location.href = 'invitation.pdf';
});
