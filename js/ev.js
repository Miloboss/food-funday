//text effect//
var typed = new Typed(".F1", {
    strings: ["Family", "Officemates", "Friends"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})

//menu effect//
let menu_open = document.querySelector('.open-bar')
let menu_close = document.querySelector('.close-bar')
let menu_atp = document.querySelector('#nav')

menu_open.addEventListener('click', function() {
menu_atp.classList.add('active')
})

menu_close.addEventListener('click', function() {
menu_atp.classList.remove('active')
})