import React, { ReactNode, useEffect, useRef, useState } from 'react';

const AntivisionPage = () => {

    return (
        <div style={{ marginBottom: "30vh" }}>
            <p>
                Antivision is a high-performance System-on-Module designed for high-frequency localization using "AprilTag" fiducials. Developed with OpenCV and implemented on an OrangePi CM4 paired with a calibrated camera, this system operates without graphics to ensure maximum processing speed. The final computed location is transmitted over a socket to the robot's main processor, facilitating rapid and precise localization essential for real-time applications. With its optimized design, Antivision delivers efficient performance tailored for advanced robotic systems.
            </p>
            <div style={{ width: "100%", display: "flex", justifyContent: "space-around" }}>
                <div style={{ display: "flex", flexDirection: "column", maxWidth: "300px", height: "250px", justifyContent: "space-between", textAlign: "center" }}>
                    <img src='antivision_image2.png' />
                    <label>April Tag detection (image found online because antivision outputs no graphics)</label>
                </div>
                <div style={{ display: "flex", flexDirection: "column", maxWidth: "300px", height: "250px", justifyContent: "space-between", textAlign: "center" }}>
                    <img src='antivision_image1.png' />
                    <label>An OrangePi CM4 SBC that hosts the antivision server</label>
                </div>
                <div style={{ display: "flex", flexDirection: "column", maxWidth: "300px", height: "250px", justifyContent: "space-between", textAlign: "center" }}>
                    <img src='antivision_image3.jpg' />
                    <label>Antivision on a small robotics test platform</label>
                </div>
            </div>

        </div >
    );
};

export default AntivisionPage;