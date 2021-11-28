// preloder start
const preloder = document.querySelector(".preloader")
function myFunction() {
    preloder.style.display = "none"
}
// preloder start

//  animate on scroll strt
const topp = document.querySelector('.go-top');
const navBar = document.querySelector('.nva-bar');
window.addEventListener('scroll', function () {
    navBar.classList.toggle('sticky', window.scrollY > 100);
    topp.classList.toggle('opacity', window.scrollY > 100);
});
//  animate on scroll end

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


// function for close the nav on-click the nav-items strt

var links = document.getElementsByClassName('nav-items');
links[0].addEventListener('click',function(){
    nav.classList.toggle('clip-path');
    toggleIcon.classList.replace('fa-times', 'fa-bars');
});
links[1].addEventListener('click',function(){
    nav.classList.toggle('clip-path');
    toggleIcon.classList.replace('fa-times', 'fa-bars');
});
links[2].addEventListener('click',function(){
    nav.classList.toggle('clip-path');
    toggleIcon.classList.replace('fa-times', 'fa-bars');
});
links[3].addEventListener('click',function(){
    nav.classList.toggle('clip-path');
    toggleIcon.classList.replace('fa-times', 'fa-bars');
});
links[4].addEventListener('click',function(){
    nav.classList.toggle('clip-path');
    toggleIcon.classList.replace('fa-times', 'fa-bars');
});
links[5].addEventListener('click',function(){
    nav.classList.toggle('clip-path');
    toggleIcon.classList.replace('fa-times', 'fa-bars');
});
links[6].addEventListener('click',function(){
    nav.classList.toggle('clip-path');
    toggleIcon.classList.replace('fa-times', 'fa-bars');
});
// function for close the nav on-click the nav-items strt