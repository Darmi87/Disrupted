// Animación de inicio
document.addEventListener("DOMContentLoaded", function () {
  const introAnimation = document.getElementById("intro-animation");
  const logo = document.getElementById("logo");
  const slogan = document.getElementById("slogan");

  // Simulación de animación (la reemplazaremos con GSAP o CSS)
  setTimeout(() => {
    logo.style.transform = "scale(1.5)";
    slogan.style.opacity = "1";
  }, 1000);

  setTimeout(() => {
    introAnimation.style.display = "none";
  }, 3000);
});

// Scroll to top
const smallLogo = document.getElementById("small-logo");
smallLogo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
const smallLogo = document.getElementById("small-logo");
smallLogo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
