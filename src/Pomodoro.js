import React, { useState, useEffect } from 'react'

export default function Pomodoro(){

    //Here you can definite time
    const [minutes, setMinutes] = useState(50)
    const [seconds, setSeconds] = useState(5)
    const [displayMessage, setDisplayMessage] = useState(false)

    useEffect(() => {
        let interval = setInterval(() => {
            clearInterval(interval);
            if(seconds === 0){
                if(minutes !== 0){
                    setSeconds(59);
                    setMinutes(minutes - 1);
                }else{
                    // time for break after 50 minut studing
                    let minutes = displayMessage ? 50 : 9;
                    let seconds = 59;

                    setSeconds(seconds);
                    setMinutes(minutes);
                    setDisplayMessage(!displayMessage);
                }
            }else{
                setSeconds(seconds - 1);
            }
        }, 1000)
    },[seconds])
    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return(
        <div className="pomodoro">
            <div className="message">
                {displayMessage && <div>Freeezeee it is a Break Time</div>}
             </div>
            <div className="timer">{timerMinutes}:{timerSeconds}</div>
            
        </div>
    )
};

