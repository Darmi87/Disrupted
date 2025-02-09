document.addEventListener("DOMContentLoaded", function() {
    const preloader = document.querySelector(".preloader");
    const logoBox = document.querySelector(".logo-box");
    const content = document.querySelector(".content");

    // Activar animación inicial
    setTimeout(() => {
        preloader.classList.add("active");
    }, 1000);

    // Hacer aparecer el slogan después del efecto
    setTimeout(() => {
        preloader.classList.add("fade-out"); // Desvanece la pantalla de carga
        logoBox.classList.add("final-position"); // Mueve el logo a la esquina
        content.classList.add("visible"); // Muestra el contenido principal
    }, 3500);
});
