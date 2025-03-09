// Toggle Sliding Header
function toggleHeader() {
    const header = document.querySelector('.sliding-header');
    const toggleButton = document.querySelector('.toggle-header-btn');
    
    header.classList.toggle('open');

    // Change icon color based on header state
    if (header.classList.contains('open')) {
        toggleButton.style.color = 'white'; // Change to white when open
    } else {
        toggleButton.style.color = 'red'; // Change to red when closed
    }
}

// Close Header When Clicking Outside
document.addEventListener('click', function (event) {
    const header = document.querySelector('.sliding-header');
    const toggleButton = document.querySelector('.toggle-header-btn');

    // Check if the click is outside the header and not on the toggle button
    if (!header.contains(event.target) && !toggleButton.contains(event.target)) {
        header.classList.remove('open');
        toggleButton.style.color = 'red'; // Reset to red when closed
    }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('.header-nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
        toggleHeader(); // Close the header after clicking a link
    });
});