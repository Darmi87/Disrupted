document.addEventListener("DOMContentLoaded", function() {
    const influencers = document.querySelectorAll(".influencer");

    influencers.forEach(influencer => {
        influencer.addEventListener("click", function() {
            this.classList.toggle("active");
        });
    });
});

