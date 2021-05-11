import { useState, useRef } from 'react';
import { React } from 'react';

const useCountDown = (initialState = 0) => {
    const [timer, setTimer] = useState(initialState)
    const [isTimerEnd, setIsTimerEnd] = useState(false)
    const countRef = useRef(null)
     
    const clear = () => {
        window.clearInterval(countRef.current);
    };

    const handleStart = () => {
        clear();
        setIsTimerEnd(false)
        countRef.current = window.setInterval(() => {
            setTimer((time) => {
                time -= 1
                if (time === 0) {
                    onTimerEnd()
                }
                return time
        
            });
        }, 1000);
    }

    const onTimerEnd = () => {
        clear()
        setTimer(0)
        setIsTimerEnd(true)
    }
    
  return {timer, isTimerEnd, handleStart }
}

export default useCountDown  