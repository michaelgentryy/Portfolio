document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll(".progress");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                progressBar.style.width = progressBar.getAttribute("data-progress");
                progressBar.style.animation = `fillProgress 1s forwards`;
                observer.unobserve(progressBar);
            }
        });
    }, {
        threshold: 0.5
    });

    progressBars.forEach(progressBar => {
        observer.observe(progressBar);
    });

    // Lightbox functionality
    const lightboxOverlay = document.getElementById('lightbox-overlay');
    const lightboxImage = document.getElementById('lightbox-image');

    document.querySelectorAll('.carousel-item img').forEach(img => {
        img.addEventListener('click', function() {
            lightboxImage.src = this.src;
            lightboxOverlay.classList.remove('hidden');
        });
    });

    lightboxOverlay.addEventListener('click', function(event) {
        if (event.target === lightboxOverlay) {
            lightboxOverlay.classList.add('hidden');
        }
    });

    // Video autoplay functionality
    const carouselVideos = document.querySelectorAll('.carousel-video');

    const videoObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const video = entry.target;
            if (entry.isIntersecting) {
                video.play();
            } else {
                video.pause();
            }
        });
    }, {
        threshold: 0.5
    });

    carouselVideos.forEach(video => {
        videoObserver.observe(video);
    });
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Animate the header
gsap.from("header", { 
    duration: 1, 
    opacity: 0, 
    y: -50, 
    ease: "power2.out" 
});

// Animate the background image box
gsap.from(".bg-img-box", { 
    duration: 1, 
    opacity: 0, 
    y: -50 
});

// Animate the title
gsap.from(".title", { 
    duration: 1, 
    opacity: 0, 
    y: 50, 
    delay: 0.5 
});

// Animate the content sections
gsap.utils.toArray(".content-section").forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none"
        },
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.3
    });
});

// Animate images within sections
gsap.utils.toArray(".sect-box img").forEach(image => {
    gsap.from(image, {
        scrollTrigger: {
            trigger: image,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none"
        },
        duration: 1,
        scale: 0.8,
        opacity: 1
    });
});

// Show project section
function showProject(projectId) {
    const projectSection = document.getElementById(projectId);
    projectSection.classList.add('project-section', 'fade-in');
    projectSection.classList.remove('fade-out');
    document.getElementById("main-content").classList.add("hidden");
    document.getElementById("main-header").classList.add("hidden");
    projectSection.classList.remove("hidden");
    window.scrollTo(0, 0); // Scroll to the top of the page
}

// Show main content
function showMainContent() {
    const projectSections = document.querySelectorAll("main.project-section");
    projectSections.forEach(section => {
        section.classList.add('fade-out');
        section.classList.remove('fade-in');
        setTimeout(() => {
            section.classList.add("hidden");
        }, 500); // Match the animation duration
    });
    document.getElementById("main-content").classList.remove("hidden");
    document.getElementById("main-header").classList.remove("hidden");
}

// Carousel functionality
function nextSlide(projectId) {
    const carouselInner = document.querySelector(`#${projectId} .carousel-inner`);
    const activeItem = carouselInner.querySelector(".carousel-item.active");
    let nextItem = activeItem.nextElementSibling;
    if (!nextItem) {
        nextItem = carouselInner.firstElementChild;
    }
    activeItem.classList.remove("active");
    nextItem.classList.add("active");
    updateCarouselTransform(carouselInner);
    updateDescription(projectId);
}

function prevSlide(projectId) {
    const carouselInner = document.querySelector(`#${projectId} .carousel-inner`);
    const activeItem = carouselInner.querySelector(".carousel-item.active");
    let prevItem = activeItem.previousElementSibling;
    if (!prevItem) {
        prevItem = carouselInner.lastElementChild;
    }
    activeItem.classList.remove("active");
    prevItem.classList.add("active");
    updateCarouselTransform(carouselInner);
    updateDescription(projectId);
}

function updateCarouselTransform(carouselInner) {
    const activeItem = carouselInner.querySelector(".carousel-item.active");
    const index = Array.from(carouselInner.children).indexOf(activeItem);
    carouselInner.style.transform = `translateX(-${index * 100}%)`;
}

function updateDescription(projectId) {
    const descriptionItems = document.querySelectorAll(`#${projectId} .description-item`);
    const activeItem = document.querySelector(`#${projectId} .carousel-inner .carousel-item.active`);
    const index = Array.from(activeItem.parentElement.children).indexOf(activeItem);
    descriptionItems.forEach((item, i) => {
        item.classList.toggle("active", i === index);
    });
}