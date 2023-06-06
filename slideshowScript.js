/* ------------------- Slideshow Code -------------------*/

let slideIndex = 0;
let countdownTimer = 10000; // Change image every 10 seconds
playSlides();

function playSlides() {
    plusSlides();
    setTimeout(playSlides, countdownTimer); 
}

// Next controls
function plusSlides() {
    slideIndex++;
    showSlides(slideIndex);
}

// Previous controls
function minusSlides() {
    slideIndex--;
    showSlides(slideIndex);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    //console.log(slideIndex);

    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
}