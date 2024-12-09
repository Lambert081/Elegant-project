const countDownBox = document.querySelector(".countdown")
const countDownDays = document.getElementById("days");
const countDownHours = document.getElementById("hours");
const countDownMinutes = document.getElementById("minutes");
const countDownSeconds = document.getElementById("seconds");

// create the countdown end date and time 
const endDate = new Date("2025-01-31T00:00:00Z").getTime();

// function to update the countdown
function updateCountdown() {
    // Get the current time now
    const now = new Date().getTime();

    // calculate the time left 
    const timeLeft = endDate - now;

    // calculate the days left 
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    // calculate the hours left
    const hours = Math.floor(timeLeft % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    // calculate the minutes left
    const minutes = Math.floor(timeLeft % (1000 * 60 * 60) / (1000 * 60));
    // calculate for seconds left
    const seconds = Math.floor(timeLeft % (1000 * 60) / (1000));

    // pass the stored values of days, hours, mins and seconds to their respective elements 
    countDownDays.innerHTML = `${days} `;
    countDownHours.innerHTML = `${hours.toString().padStart(2, "0")} `;
    countDownMinutes.innerHTML = `${minutes.toString().padStart(2, "0")} `;
    countDownSeconds.innerHTML = `${seconds.toString().padStart(2, "0")}`;

    // if countdown has finished OR endDate
    if (timeLeft <= 0) {
        // clear any existing interval 
        clearInterval(countdownInterval);
        countDownBox.innerHTML = "countdown has ended";
    }

};

//  running the updatecount function every second using setInterval 
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();
