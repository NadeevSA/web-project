import './Header.css'
import Time from './Time.js'
import { useState } from 'react'

export default function Timer() {
    var [hours, setHours] = useState('00h');
    var [minutes, setMinutes] = useState('00m');
    var [seconds, setSeconds] = useState('00s');

    setInterval(function() {
        var now = new Date().getTime()
        var distance = now
    
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        var seconds = Math.floor((distance % (1000 * 60)) / 1000)
        
        setHours((hours.toString().length == 1 ? '0' + hours : hours) + 'h')
        setMinutes((minutes.toString().length == 1 ? '0' + minutes : minutes) + 'm')
        setSeconds((seconds.toString().length == 1 ? '0' + seconds : seconds) + 's')
    }, 1000);
    
    return (
        <div className="header_div_main_text_50">
            <Time value={hours} />
            <Time value={minutes} />
            <Time value={seconds} />
        </div>
    );
}
