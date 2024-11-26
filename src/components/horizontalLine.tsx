import React, { useEffect, useRef, useState } from 'react';

const HorizontalLine = ({ startAnimation, maxWidth = '100%', height = '2px', color = 'black', duration = '1s' }) => {
    const [isVisible, setIsVisible] = useState(false);
    const lineRef = useRef(null);

    useEffect(() => {
        if (startAnimation) {
            // Trigger the animation when startAnimation becomes true
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 100); // Optional initial delay

            return () => clearTimeout(timer); // Cleanup the timer on unmount
        } else {
            // Reset the animation if startAnimation becomes false
            setIsVisible(false);
        }
    }, [startAnimation]); // Depend on startAnimation

    return (
        <div
            ref={lineRef}
            style={{
                width: isVisible ? maxWidth : '0',
                height: height,
                backgroundColor: color,
                transition: `width ${duration} ease`,
            }}
        />
    );
};

export default HorizontalLine;