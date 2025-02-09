document.addEventListener("DOMContentLoaded", function() {
    const logoText = document.querySelector(".logo-text");
    const logoBox = document.querySelector(".logo-box");
    const preloader = document.querySelector(".preloader");
    const sloganContainer = document.querySelector(".slogan-container");
    const sloganText = document.querySelectorAll(".slogan p");
    const menu = document.querySelector(".menu");

    // Animación inicial
    gsap.timeline()
        .set(logoText, { opacity: 0 }) // Ocultar texto al inicio
        .to(logoText, { opacity: 1, duration: 1 }) // Aparecer DISRUPTED
        .to(logoText, { scale: 1.5, duration: 1 }) // "Explosión" del texto
        .to(logoText, { opacity: 0, duration: 0.5 }) // Desaparece y se comprime
        .to(logoBox, { width: 80, height: 80, duration: 1 }) // Se vuelve caja de nuevo
        .to(preloader, { opacity: 0, visibility: "hidden", duration: 1 }) // Desvanece la pantalla de carga
        .to(logoBox, { top: "20px", left: "20px", duration: 1 }) // Se mueve a la esquina
        .to(sloganContainer, { left: "100px", opacity: 1, duration: 1 }) // Aparece "OUT OF THE BOX"
        .to(sloganText, { opacity: 1, stagger: 0.2, duration: 0.5 }) // Letras salen en escalera

    // Click en el logo para abrir/cerrar menú
    logoBox.addEventListener("click", function() {
        menu.classList.toggle("open");
    });
});
