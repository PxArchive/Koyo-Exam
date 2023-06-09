/* ------------------- Countdown Code -------------------*/

// Set the date we're counting down to
var countDownDate = new Date("Jun 30, 2023 18:00:00").getTime();

playTimer();

// Update the count down every 1 second
function playTimer() {
    UpdateTimer();
    setTimeout(playTimer, 1000);
}

function UpdateTimer () {
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

    // Output the result in an element with id="countdown"
    document.getElementById("countdown").innerHTML = dayText + " " + hourText + " "
        + minText + " " + secText + " ";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "000 00 00 00";
        document.getElementById("cdtext").innerHTML = "Event startet!";
    }
}
