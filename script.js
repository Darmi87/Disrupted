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
