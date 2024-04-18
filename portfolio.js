const typed = new Typed(".auto-change", {
    strings: ["Archana Ojha", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop:true
})

//for stopping the typed effect after the breakpoint
function stop(){
    const name = document.querySelector('h1');
    if (window.innerWidth <= 768) {
        typed.destroy();
        name.innerHTML = "I'm Archana Ojha"
    }
}

stop();
window.addEventListener('resize', stop);

//eventlistner for toggle icon
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu');
    const navLinks = document.querySelector('nav ul');

    menuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});