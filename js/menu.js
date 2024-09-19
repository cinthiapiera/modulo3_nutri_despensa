document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById("menu");
    const menuToggle = document.getElementById("menu-toggle");

    menuToggle.addEventListener("click", function() {
        menu.classList.toggle("open");
    });
});