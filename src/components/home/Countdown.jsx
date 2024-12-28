import React, { useEffect, useState } from 'react'

const Countdown = ({ expiryDate }) => {
    const [timeLeft, setTimeLeft] = useState([{ hours: 0, minutes: 0, seconds: 0 }]);

    const calcTimeLeft = (expiryDate) => {
        const now = new Date().getTime();
        const timeLeft = expiryDate - now;

        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        return { hours, minutes, seconds }
    };

    useEffect(() => {
        const intervalnumber = setInterval(() => {
            const updateTimes = calcTimeLeft(expiryDate);
            setTimeLeft(updateTimes);
        }, 1000);

        return () => clearInterval(intervalnumber);
    }, [expiryDate]);

    return (
        <div>
            {expiryDate ? `${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s` : 'Expired'}
        </div>
    );
}

export default Countdown