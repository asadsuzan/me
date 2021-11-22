
//  animate on scroll strt
const navBar = document.querySelector('.nva-bar');
window.addEventListener('scroll', function () {
    navBar.classList.toggle('sticky', window.scrollY > 100)
});
//  animate on scroll strt

// for toggle nav-bar strat
const nav = document.querySelector('.nav');
const humbuger = document.querySelector('.humbuger');
const toggleIcon = document.querySelector('.nav-toggle');

let active = true;
humbuger.addEventListener('click', function () {
    nav.classList.toggle('clip-path');
    if (active) {
        toggleIcon.classList.replace('fa-bars', 'fa-times');
        active = false;
    } else {
        toggleIcon.classList.replace('fa-times', 'fa-bars');
        active = true;
    }
});
// for toggle nav-bar end


// typing animation srt
let typed = new Typed('#auto-input', {
    strings: ['Mern Stack web Developer'],
    typeSpeed: 100,
    backSpeeed: 200,
    loop: true
});
// typing animation end
