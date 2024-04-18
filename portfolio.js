const typed = new Typed(".auto-change", {
    strings: ["Archana Ojha", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop:true
})

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu');
    const navLinks = document.querySelector('.links');

    menuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('menu-active');
    });
});