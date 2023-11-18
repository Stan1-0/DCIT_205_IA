const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}
)

let sun = document.getElementById("sun");
sun.onclick = function(){
    sun.classList.toggle("night")
}
function myFunction(){
    let element = document.body;
    element.classList.toggle("dark-mode");
}