import React, { useEffect, useState } from "react";

const Timer = ({ onSubmit }) => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    const toggleTimer = () => {
        setIsRunning(!isRunning);
    };

    const resetTimer = () => {
        setIsRunning(false);
        setTime(0);
    };

    useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        } 
        return () => clearInterval(timer);
    }, [isRunning]);

    const formatTime = (time) => {
        const minutes = Math.floor(time/60);
        const seconds = time % 60;
        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };

    const saveSession = () => {
        if (onSubmit) {
            onSubmit({ time });
        }
        resetTimer();
    };

    return (
        <div className="timer">
            <h2>Timer</h2>
            <p>{formatTime(time)}</p>
            <button onClick={toggleTimer}>
                {isRunning ? "Pause" : "Start"}
            </button>
            <button onClick={resetTimer} disabled={time === 0}>
                Reset
            </button>
            <button onClick={saveSession} disabled={time === 0}>
                Save Session
            </button>
        </div>
    );
};

export default Timer;