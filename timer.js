// Setting up date
var countDownDate = new Date("Jun 01, 2023 10:00:00").getTime();

// Getting timer el
var daysSegment = document.querySelector('[data-segment="days"]');
var hoursSegment = document.querySelector('[data-segment="hours"]');
var minutesSegment = document.querySelector('[data-segment="minutes"]');
var secondsSegment = document.querySelector('[data-segment="seconds"]');

// Every second refresh
var x = setInterval(function () {
  // Get time and date
  var now = new Date().getTime();

  // Counting difference
  var distance = countDownDate - now;

  // Counting days,hours...
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Showing results
  daysSegment.innerHTML = days;
  hoursSegment.innerHTML = hours;
  minutesSegment.innerHTML = minutes;
  secondsSegment.innerHTML = seconds;

  // If timer is over,stop him
  if (distance < 0) {
    clearInterval(x);
    daysSegment.innerHTML = "0";
    hoursSegment.innerHTML = "0";
    minutesSegment.innerHTML = "0";
    secondsSegment.innerHTML = "0";
  }
}, 1000);
