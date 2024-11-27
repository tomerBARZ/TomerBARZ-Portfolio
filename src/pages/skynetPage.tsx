import React, { ReactNode, useEffect, useRef, useState } from 'react';
import useWindowWidth from '../hooks/useWindowWidth';

const SkynetPage = () => {

    const width = useWindowWidth();

    return (
        <div style={{ marginBottom: "3vh" }}>
            <p>
                After completing my military service, I returned to mentor my high school robotics team, where I provide guidance in various areas including CAD (computer-aided design), CAM (computer-aided manufacturing), and programming for both manual and autonomous control of their robot. This mentorship experience allows me to share my knowledge and passion for robotics while supporting young engineers in honing their skills and fostering their creativity in project development.
            </p>
            <div style={{ width: "100%", display: "flex", justifyContent: "space-around" }}>
                <div style={{ display: "flex", flexDirection: "column", maxWidth: "25vw", justifyContent: "space-between", textAlign: "center" }}>
                    <iframe className="fusionFrame" src="https://a360.co/3uotU9z" width={width/4} height={width/4} style={{overflow:"hidden"}}></iframe>
                    <label>The team's submission for the 2024 season</label>
                </div>
                <div style={{ display: "flex", flexDirection: "column", maxWidth: "25vw", justifyContent: "space-between", textAlign: "center" }}>
                    <video src="skynet_video.mp4" autoPlay loop muted />
                    <label>An autonomous sequence performed by this year's robot</label>
                </div>
            </div>

        </div >
    );
};

export default SkynetPage;