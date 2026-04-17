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

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear');
    });

    // emailjs
window.addEventListener("DOMContentLoaded", function () {

    console.log("JS LOADED");

    emailjs.init("A4QcZTNfGENg4icjF");

    const form = document.getElementById("contact-form");

    if (!form) {
        console.error("Form not found");
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        console.log("Form submit intercepted");

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
// tab visibility change
document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === "visible") {
        document.title = "Portfolio | Ayush Vyas";
        $("#favicon").attr("href", "assets/images/favicon.png");
    } else {
        document.title = "Come Back To Portfolio";
        $("#favicon").attr("href", "assets/images/favhand.png");
    }
});

// typed.js
var typed = new Typed(".typing-text", {
    strings: ["web development", "cloud computing"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});

// tilt effect
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});

// scroll reveal
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

// home
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });
srtop.reveal('.home .image', { delay: 400 });

// about
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });

// skills
srtop.reveal('.skills .container', { interval: 200 });

// education
srtop.reveal('.education .box', { interval: 200 });

// projects
srtop.reveal('.work .box', { interval: 200 });

// experience
srtop.reveal('.experience .timeline', { delay: 400 });

// contact
srtop.reveal('.contact .container', { delay: 400 });

// disable inspect (optional)
document.onkeydown = function (e) {
    if (e.keyCode == 123) return false;
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) return false;
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) return false;
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) return false;
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) return false;
};
