document.addEventListener("DOMContentLoaded", function () {
    let tl = gsap.timeline({ delay: 0.5 });

    // 🔹 `BOX` logo aparece con Fade In suave
    tl.to("#logo1", { opacity: 1, duration: 1.5, ease: "power2.out" });

    // 🔹 Muestra el segundo logo (DD) más arriba y más cerca del BOX
    tl.to("#logo2", { opacity: 1, y: -90, duration: 1, ease: "power2.out" }, "+=1");

    // 🔹 Muestra el tercer logo (DSRPTD) más cerca del anterior
    tl.to("#logo3", { opacity: 1, y: -180, duration: 1, ease: "power2.out" }, "+=1");

    // 🔹 Muestra el último logo (DISRUPTED) más cerca de los demás
    tl.to("#logo4", { opacity: 1, y: -270, duration: 1.5, ease: "power2.out" }, "+=1");
});
