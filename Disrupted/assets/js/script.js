document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const mensajeExito = document.getElementById("mensaje-exito");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita la redirección a Formspree
        
        // Enviar los datos del formulario a Formspree
        fetch(form.action, {
            method: "POST",
            body: new FormData(form),
            headers: { 'Accept': 'application/json' }
        }).then(response => {
            if (response.ok) {
                form.reset(); // Limpia el formulario después del envío
                mensajeExito.style.display = "block"; // Muestra el mensaje de éxito
            } else {
                alert("Hubo un error al enviar tu mensaje. Intenta de nuevo.");
            }
        }).catch(error => alert("Hubo un error. Intenta de nuevo."));
    });
});
