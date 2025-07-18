import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import './App.css';


const Timer = () => {
    //tracks how many seconds have passed
    const [time, setTime] = useState(0);

    //track if timer is running or not 
    const [isRunning, setIsRunning] = useState(false);

    //useEffect runs when isRunning changes
    useEffect(() => {
        let interval; //store interval here

        //if timer is running, set an interval that ticks every 1 second
        if (isRunning) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1); //increases time by 1 second
            }, 1000);
        } else {
            //if timer stops, clear interval so it doesn't keep increasing
            clearInterval(interval);
        }

        //cleanup function to clear interval if the component unmounts or isRunning is changed
        return () => clearInterval(interval);
    }, [isRunning]); //re-run only when isRunning changes


    //toggle between start and stop
    const handleStartStop = () => {
        setIsRunning((prev) => !prev) //flip boolean
    }

    //reset button
    const handleReset = () => {
        setTime(0);
    }

    return (
        <div className="timer-container">
            {/* show current time */}
            <motion.h1
                className="timer-display"
                key={time} //this tells react to re-render and animate everytime time changes
                initial={{ opacity: 0, y: -10 }} //sets starting animation
                animate={{ opacity: 1, y: 0 }} //final state
                transition={{ duration: 0.4 }} //controls speed of animation
            >
                {time}s
            </motion.h1>

            {/* start stop button shows different text based on state */}
            <motion.button
                className="timer-button"
                onClick={handleStartStop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                {isRunning ? 'Stop' : 'Start'}
            </motion.button>

            {/* reset button */}
            <motion.button
                className="timer-button"
                onClick={handleReset}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                Reset
            </motion.button>
        </div>
    )

}

export default Timer;