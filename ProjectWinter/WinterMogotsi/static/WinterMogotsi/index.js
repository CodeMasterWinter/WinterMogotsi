var navToggle = document.getElementById("nav-toggle");
var nav = document.getElementById("responsive-nav");

navToggle.addEventListener("click", ()=> {
    nav.classList.toggle("hide-nav");
})