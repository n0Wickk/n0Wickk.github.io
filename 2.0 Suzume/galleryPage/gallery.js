// hamburger
let menu = document.querySelector(".menu-btn");
let nav = document.querySelector(".nav");

function menuToggle() {
    if (nav.style.display === "block") {
        nav.style.display = "none";
        menu.src = "/assets/hamburger.svg";
    } else {
        nav.style.display = "block";
        menu.src = "/assets/hamburger-close.svg";
    }
}

menu.addEventListener("click", menuToggle);

// gallery toggle
let open = document.querySelector(".open-div");
let close = document.querySelector(".close-div");
let gallery = document.querySelector(".gallery-characters");

open.onclick = () => {
    gallery.style.visibility = "visible";
    gallery.style.opacity = "1";
}
close.onclick = () => {
    gallery.style.visibility = "hidden";
    gallery.style.opacity = "0";
}
