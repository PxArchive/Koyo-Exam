

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



/* ------------------- Countdown Code -------------------*/

// Set the date we're counting down to
var countDownDate = new Date("Sep 8, 2023 18:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var dayText = days.toString();
    var hourText = hours.toString();
    var minText = minutes.toString();
    var secText = seconds.toString();

    // 3 digit day counter
    if (days < 10) {
        dayText = "00" + dayText;
    }
    else if (days < 100) {
        dayText = "0" + dayText;
    }

    // 2 digit hour counter
    if (hours < 10) {
        hourText = "0" + hourText;
    }

    // 2 digit min counter
    if (minutes < 10) {
        minText = "0" + minText;
    }

    // 2 digit sec counter
    if (seconds < 10) {
        secText = "0" + secText;
    }

    // Output the result in an element with id="demo"
    document.getElementById("countdown").innerHTML = dayText + " " + hourText + " "
        + minText + " " + secText + " ";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Eventet er begyndt!";
    }
}, 1000);
