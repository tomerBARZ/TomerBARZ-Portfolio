import React, { ReactNode, useEffect, useState } from 'react';

const SectionDiv: React.FC<{ startAnimation: boolean, duration?: string, delayms?: number, children: ReactNode, title?:string }> = ({ startAnimation, duration = '1s', delayms = 100, children, title }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (startAnimation) {
            // Trigger the fade-in animation
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, delayms); // Optional initial delay

            return () => clearTimeout(timer); // Cleanup the timer on unmount
        } else {
            // Reset the visibility if startAnimation becomes false
            setIsVisible(false);
        }
    }, [startAnimation]); // Depend on startAnimation

    return (
        <div
            style={{
                opacity: isVisible ? 1 : 0, // Set opacity based on isVisible
                transition: `opacity ${duration} ease`, // Transition for opacity
                visibility: isVisible ? 'visible' : 'hidden', // Hide the element when not visible
                display:"flex",
                marginBottom:"3.5vh",
                flexDirection:"column"
            }}
        >
            <h2 style={{marginTop:"0px"}}>{title}</h2>
            <div style={{marginLeft:"3vw", display:"flex"}}>
                {children}
            </div>
        </div>
    );
};

export default SectionDiv;