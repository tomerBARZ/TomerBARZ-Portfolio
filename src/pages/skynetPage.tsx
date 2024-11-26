import React, { ReactNode, useEffect, useRef, useState } from 'react';

const SkynetPage = () => {

    return (
        <div style={{ marginBottom: "30vh" }}>
            <p>
                After completing my military service, I returned to mentor my high school robotics team, where I provide guidance in various areas including CAD (computer-aided design), CAM (computer-aided manufacturing), and programming for both manual and autonomous control of their robot. This mentorship experience allows me to share my knowledge and passion for robotics while supporting young engineers in honing their skills and fostering their creativity in project development.
            </p>
            <div style={{ width: "100%", display: "flex", justifyContent: "space-around" }}>
                <div style={{ display: "flex", flexDirection: "column", maxWidth: "300px", height: "250px", justifyContent: "space-between", textAlign: "center" }}>
                    <img src='skynet_image1.jpg' />
                    <label>The team's robot for the 2024 Season</label>
                </div>
                <div style={{ display: "flex", flexDirection: "column", maxWidth: "350px", height: "250px", justifyContent: "space-between", textAlign: "center" }}>
                    <img src='visualizer_image1.png' />
                    <label>Static Image of the simualted robot</label>
                </div>
                <div style={{ display: "flex", flexDirection: "column", maxWidth: "300px", height: "250px", justifyContent: "space-between", textAlign: "center" }}>
                    <video src="skynet_video.mp4" autoPlay loop muted/>
                    <label>An autonomous sequence performed by this year's robot</label>
                </div>
            </div>

        </div >
    );
};

export default SkynetPage;