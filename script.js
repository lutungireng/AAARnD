$(document).ready(function() {
    // Smooth scrolling for navigation links
    console.log("Smooth scrolling initialized");

    $('nav a').on('click', function(event) {
        event.preventDefault();
        const target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800);
    });

    // Contact form submission (for demonstration purposes)
    console.log("Contact form submission initialized");

    $('#contact-form').on('submit', function(event) {
        event.preventDefault();
        const name = $('input[type="text"]').val();
        const email = $('input[type="email"]').val();
        const message = $('textarea').val();

        // Simple validation
        console.log("Form submitted with values:", { name, email, message });

        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been sent.`);
            $(this).trigger('reset'); // Reset the form
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Show/hide the back-to-top button
    console.log("Back-to-top button visibility updated");

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    // Back to top button functionality
    $('#back-to-top').on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
    });

    // Slider functionality
    console.log("Slider functionality initialized");

    let currentSlide = 0;
    const slides = $('.slider-item');
    const totalSlides = slides.length;

    // Function to show the current slide
    console.log("Showing slide:", currentSlide + 1); // Adjusted to show slide number starting from 1


    function showSlide(index) {
        slides.removeClass('active').eq(index).addClass('active');
        const color = slides.eq(index).data('color');
        $('.slider').css('background-color', color);
        $('header').css('background-color', color); // Update header color
        $('footer').css('background-color', color); // Update footer color
        $('.contact button').css('background-color', color); // Update Send Message button color
        $('#back-to-top').css('background-color', color); // Update Back to Top arrow box color
    }
    
    showSlide(currentSlide); // Show the first slide
    const initialColor = slides.eq(currentSlide).data('color'); // Get the initial color
    $('.contact button').css('background-color', initialColor); // Set Send Message button color
    $('#back-to-top').css('background-color', initialColor); // Set Back to Top arrow box color

    // Next slide button functionality
    $('.slider-button.slick-next').on('click', function() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    });

    // Previous slide button functionality
    $('.slider-button.slick-prev').on('click', function() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    });

    // Optional: Auto-slide every 5 seconds
    setInterval(function() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }, 5000);
});
