document.addEventListener("DOMContentLoaded", function() {
    const influencers = document.querySelectorAll(".influencer");

    influencers.forEach(influencer => {
        influencer.addEventListener("click", function() {
            this.classList.toggle("active");
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const logo = document.querySelector(".logo img");

    window.addEventListener("scroll", function() {
        if (window.scrollY > window.innerHeight * 0.5) {
            logo.style.filter = "invert(0)"; /* Logo negro en secciones claras */
        } else {
            logo.style.filter = "invert(1)"; /* Logo blanco en el video */
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const preloader = document.querySelector(".preloader");
    const logoBox = document.querySelector(".logo-box");
    const content = document.querySelector(".content");

    // Activar animación inicial
    setTimeout(() => {
        preloader.classList.add("active");
    }, 1000);

    // Comprimir logo y moverlo a la esquina
    setTimeout(() => {
        preloader.classList.add("fade-out"); // Desvanece la pantalla de carga
        logoBox.classList.add("final-position"); // Mueve el logo a la esquina
        content.classList.add("visible"); // Muestra el contenido principal
    }, 3000);
});
