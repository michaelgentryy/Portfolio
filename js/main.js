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