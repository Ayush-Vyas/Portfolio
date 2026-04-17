// ================= NAVBAR =================
$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scroll
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500);
    });

});

// ================= TYPED JS =================
var typed = new Typed(".typing-text", {
    strings: ["web development", "cloud computing"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});

// ================= TILT =================
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});

// ================= SCROLL REVEAL =================
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });
srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.work .box', { interval: 200 });

// ================= EMAILJS CONTACT FORM =================
window.addEventListener("load", function () {

    console.log("EMAILJS LOADED");

    emailjs.init("A4QcZTNfGENg4icjF");

    const form = document.getElementById("contact-form");

    if (!form) {
        console.error("Form not found");
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        console.log("FORM INTERCEPTED");

        emailjs.sendForm(
            "service_izhkonw",
            "template_sfpm4de",
            this
        )
        .then(() => {
            alert("Message Sent Successfully!");
            form.reset();
        })
        .catch((error) => {
            console.error(error);
            alert("Failed to send message!");
        });
    });

});
