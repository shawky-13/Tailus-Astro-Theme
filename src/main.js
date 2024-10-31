// set the menu icon in mobile
let menuIcon = document.querySelector(".menu-icon");
let menu = document.querySelector(".menu-mobile");
let menuLink = document.querySelectorAll(".menu-mobile li");
let overlay = document.querySelector(".overlay");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-xmark");
  menu.classList.toggle("mt-20");
  menu.classList.toggle("opacity-0");
  overlay.classList.toggle("hidden");
});

menuLink.forEach((link) => {
  link.addEventListener("click", () => {
    overlay.classList.toggle("hidden");
    menu.classList.toggle("mt-20");
    menu.classList.toggle("opacity-0");
    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-xmark");
  });
});
