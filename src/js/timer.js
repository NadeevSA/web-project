
var countDownDate = new Date("May 1, 2023 00:00:00").getTime();

var countdownfunction = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("DD").innerHTML = (days.toString().length == 1 ? '0' + days : days) + 'd';
    document.getElementById("HH").innerHTML = (hours.toString().length == 1 ? '0' + hours : hours) + 'h';
    document.getElementById("MM").innerHTML = (minutes.toString().length == 1 ? '0' + minutes : minutes) + 'm';
    document.getElementById("SS").innerHTML = (seconds.toString().length == 1 ? '0' + seconds : seconds) + 's';
}, 1000);