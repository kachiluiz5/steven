//   Example:
//   <div data-counter="counter-name">
//     <div data-counter-date="Nov 24, 2023 00:00:00 GMT+0100"></div>
//   </div>

// Function to update the countdown and hide the parent when time is 0
function updateCountdown(eventDate, counterElement) {
  var now = new Date(); // Get the current date and time
  var timeDifference = eventDate - now; // Calculate the time difference

  // Check if the event time has already passed
  if (timeDifference <= 0) {
    counterElement.style.display = "none"; // Hide the parent
    counterElement.querySelector('[data-counter-date]').innerHTML = "EXPIRED";
  } else {
    // Convert the time difference into days, hours, minutes, and seconds
    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Format the result
    var countdown = days + "D " + hours + "H " + minutes + "M " + seconds + "S";

    counterElement.querySelector('[data-counter-date]').innerHTML = countdown;
  }
}

// Function to initialize countdowns
function initializeCountdowns() {
  // Check if there are any countdowns on the page using the [data-counter] attribute
  var countdownElements = document.querySelectorAll('[data-counter]');
  
  if (countdownElements.length === 0) {
    return; // Skip the script if no countdowns are found
  }

  // Initialize countdowns
  countdownElements.forEach(function(element) {
    var eventDateString = element.querySelector('[data-counter-date]').getAttribute('data-counter-date');
    var eventDate = new Date(eventDateString);
    updateCountdown(eventDate, element);
    
    // Call the updateCountdown function every second
    setInterval(function() {
      updateCountdown(eventDate, element);
    }, 1000);
  });
}

// Call the initializeCountdowns function to set up all countdowns
initializeCountdowns();

