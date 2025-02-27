document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const closeBtn = document.querySelector(".close-menu");

    if (menuToggle && navLinks) {
        // 🔹 Abrir menú
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
            menuToggle.classList.toggle("active");
        });

        // 🔹 Cerrar menú con la "X"
        if (closeBtn) {
            closeBtn.addEventListener("click", function () {
                navLinks.classList.remove("active");
                menuToggle.classList.remove("active");
            });
        }

        // 🔹 Cerrar menú al hacer clic en un enlace
        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                menuToggle.classList.remove("active");
            });
        });
    }
    // 📌 FORMULARIO DE CONTACTO (Evita la redirección a Formspree)
    const form = document.getElementById("contact-form");
    const mensajeExito = document.getElementById("mensaje-exito");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            fetch(form.action, {
                method: "POST",
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            })
            .then(response => {
                if (response.ok) {
                    form.reset();
                    mensajeExito.style.display = "block";
                } else {
                    alert("Hubo un error al enviar tu mensaje. Intenta de nuevo.");
                }
            })
            .catch(error => alert("Hubo un error. Intenta de nuevo."));
        });
    }
});