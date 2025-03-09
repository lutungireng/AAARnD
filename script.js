$(document).ready(function() {
    // Smooth scrolling for navigation links
    $('nav a').on('click', function(event) {
        event.preventDefault();
        const target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800);
    });

    // Contact form submission
    $('#contact-form').on('submit', function(event) {
        event.preventDefault();
        const name = $('input[type="text"]').val();
        const email = $('input[type="email"]').val();
        const message = $('textarea').val();

        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been sent.`);
            $(this).trigger('reset');
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Show/hide the back-to-top button
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
    let currentSlide = 0;
    const slides = $('.slider-item');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.removeClass('active').eq(index).addClass('active');
        const color = slides.eq(index).data('color');
        $('.slider').css('background-color', color);
        $('header').css('background-color', color);
        $('footer').css('background-color', color);
        $('.contact button').css('background-color', color);
        $('#back-to-top').css('background-color', color);
    }

    showSlide(currentSlide);

    $('.slider-button.slick-next').on('click', function() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    });

    $('.slider-button.slick-prev').on('click', function() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    });

    setInterval(function() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }, 5000);
});
