import React, { ReactNode, useEffect, useRef, useState } from 'react';
import useWindowHeight from '../hooks/useWindowHeight';

const GrapplingHookPage = () => {

    const height = useWindowHeight();

    return (
        <div style={{ marginBottom: "5vh" }}>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignContent: "center", }}>
                <p>
                    The only remnant of my time using Unreal Engine is a tutorial I created on a grappling hook swinging system. While it may not be the most groundbreaking piece of content, it was highly requested by fellow developers and garnered around 30,000 views on YouTube. Since then, I have significantly improved my skills in game development and programming, and I'm confident that I could produce something far more sophisticated today—even though I haven't worked with Unreal in years. This experience not only reflects my growth as a developer but also my commitment to sharing knowledge within the community.            </p>
                <br />
                <div style={{ display: "flex", flexDirection: "column", maxWidth: "15vw", height: "20vh", justifyContent: "space-between", textAlign: "center", paddingTop: "2vh" }}>
                    <video src="grappling_hook_video.mp4" autoPlay loop />
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", marginTop:"0px", height:height/3.5, width:"100%", alignItems:"center" }}>
                <iframe src="https://blueprintue.com/render/k94u5cca/" allowFullScreen width={"90%"} height={height/3.5} style={{ overflow: "hidden" }} />
            </div>
        </div>
    );
};

export default GrapplingHookPage;