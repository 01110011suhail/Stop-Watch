// Selecting the timer display element with class 'timerwacth'
let timerwacth = document.querySelector('.timerwacth');

// Selecting the start, stop, and reset buttons by their IDs
let startbtn = document.getElementById('startbtn');
let stopbtn = document.getElementById('stopbtn');
let resetbtn = document.getElementById('resetbtn');

// Initializing variables for milliseconds,  seconds, minutes, and hours
let msec = 0;
let sec = 0;
let min = 0;
let hr = 0;

// Initializing the timer ID variable
let timerid = null;

// Event listener for the start button
startbtn.addEventListener('click', function() {
    // Check if there is an existing timer, clear it before starting a new one
    if (timerid != null) {
        clearInterval(timerid);
    }
    // Set an interval to call the startTimer function every 10 milliseconds
    timerid = setInterval(startTimer, 10);
});

// Event listener for the stop button
stopbtn.addEventListener('click', function() {
    // Clear the interval to stop the timer
    clearInterval(timerid);
});

// Event listener for the reset button
resetbtn.addEventListener('click', function() {
    // Clear the interval
    clearInterval(timerid);
    // Reset the timer display to '00 : 00 : 00 : 00'
    timerwacth.innerHTML = `00 : 00 : 00 : 00`;
    // Reset all timer variables to zero
    msec = sec = min = hr = 0;
});

// Function to handle the timer logic
function startTimer() {
    // Increment milliseconds
    msec++;
    // Check if milliseconds reach 99, then reset and increment seconds
    if (msec == 99) {
        msec = 0;
        sec++;
        // Check if seconds reach 60, then reset and increment minutes
        if (sec == 60) {
            sec = 0;
            min++;
            // Check if minutes reach 60, then reset and increment hours
            if (min == 60) {
                min = 0;
                hr++;
            }
        }
    }

    // Format timer values with leading zeros if less than 10
    let msecString = msec < 10 ? `0${msec}` : msec;
    let secString = sec < 10 ? `0${sec}` : sec;
    let minString = min < 10 ? `0${min}` : min;
    let hrString = hr < 10 ? `0${hr}` : hr;

    // Update the timer display with the formatted values
    timerwacth.innerHTML = ` ${hrString} :  ${minString}: ${secString} : ${msecString}`;
}
