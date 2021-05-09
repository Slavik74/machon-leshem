import React, { useEffect } from 'react'
import {formatTime} from '../../Utils'

export default function CountDown({Seconds, OnTimerEnd}) {   

    const [timer, setTimer] = React.useState(Seconds);
    const id = React.useRef(null);

    const clear = () => {
        window.clearInterval(id.current);
    };
    React.useEffect(() => {
        id.current = window.setInterval(() => {
            setTimer((time) => time - 1);
        }, 1000);
        return () => clear();
    }, []);

    React.useEffect(() => {
        if (timer === 0) {
            clear();
            OnTimerEnd();
        }
    }, [timer]);

    return (
        <div>{formatTime(timer)}</div>
    );


}
