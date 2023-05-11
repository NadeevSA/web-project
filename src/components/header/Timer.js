import '../../css/header.css'
import Time from './Time.js'

var countDownDate = new Date("May 14, 2023 00:00:00").getTime();

function Timer() {
    setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;
    
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        //document.getElementById("DD").innerHTML = (days.toString().length == 1 ? '0' + days : days) + 'd';
        //document.getElementById("HH").innerHTML = (hours.toString().length == 1 ? '0' + hours : hours) + 'h';
        //document.getElementById("MM").innerHTML = (minutes.toString().length == 1 ? '0' + minutes : minutes) + 'm';
        //document.getElementById("SS").innerHTML = (seconds.toString().length == 1 ? '0' + seconds : seconds) + 's';
    }, 1000);
    
    return (
        <div className="header_div_main_text_50">
            <Time id='DD' value="00d"></Time>
            <Time id='HH' value="00h"></Time>
            <Time id='MM' value="00m"></Time>
            <Time id='SS' value="00s"></Time>
        </div>
    );
}

export default Timer;
