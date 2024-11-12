const mainPage = document.getElementById("openingPage");
const ddPage = document.getElementById("deadwoodDominance");
const wwPage = document.getElementById("whisperWinds");

showMain();
function showMain() {
    mainPage.style.display = "block";
    ddPage.style.display = "none";
    wwPage.style.display = "none";
}

function returnToMain() {
    mainPage.style.display = "block";
    ddPage.style.display = "none";
    wwPage.style.display = "none";

    window.scrollTo(0, 2550);
}

function showDD() {
    ddPage.style.display = "block";
    mainPage.style.display = "none";
    wwPage.style.display = "none";

    showSlides(0);

    window.scrollTo(0, 0);
}

function showWW() {
    wwPage.style.display = "block";
    mainPage.style.display = "none";
    ddPage.style.display = "none";

    showSlides(4);

    window.scrollTo(0, 0);
}

document.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth > 1024) { // Check if the screen width is greater than 1024px
        const observerOptions = {
            root: null,
            threshold: 0.6 // Fires when 60% of the element is visible
        };

        let timeout;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Clear any ongoing adjustments
                    clearTimeout(timeout);

                    // Delay the adjustment slightly for smoother interaction
                    timeout = setTimeout(() => {
                        entry.target.scrollIntoView({
                            behavior: "smooth",
                            block: "center"
                        });
                    }, 100); // Adjust delay as needed
                }
            });
        }, observerOptions);

        const sections = document.querySelectorAll(".section");
        sections.forEach(section => observer.observe(section));
    }
});