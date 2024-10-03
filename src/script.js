let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({ 
    /*reset: true,*/
    distance: '80px',
    duration: 2000,
    delay: 200 
});

ScrollReveal().reveal('.inicio-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.inicio-img, .habilidades-container, .proyectos-box', { origin: 'bottom' });
ScrollReveal().reveal('.inicio-content h1, .sobre-img', { origin: 'left' });
ScrollReveal().reveal('.inicio-content p, .sobre-content', { origin: 'right' });

const typed = new Typed('.multiple-text', {
    strings: ['Estudiante', 'Ingeniera Multimedia'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
});