function showSlides(n) {
    let slides = document.querySelectorAll(".mySlides");
    let buttons = document.querySelectorAll(".slideButton");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let j = 0; j < buttons.length; j++) {
        buttons[j].classList.remove('w3-white');
    }

    slides[n].style.display = "block";
    buttons[n].classList.add('w3-white');
}