import React, { ReactNode, useEffect, useRef, useState } from 'react';

const GrapplingHookPage = () => {

    return (
        <div style={{ marginBottom: "1vh" }}>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignContent: "center", }}>
                <p>
                    The only remnant of my time using Unreal Engine is a tutorial I created on a grappling hook swinging system. While it may not be the most groundbreaking piece of content, it was highly requested by fellow developers and garnered around 30,000 views on YouTube. Since then, I have significantly improved my skills in game development and programming, and I'm confident that I could produce something far more sophisticated today—even though I haven't worked with Unreal in years. This experience not only reflects my growth as a developer but also my commitment to sharing knowledge within the community.            </p>
                <br />
                <div style={{ display: "flex", flexDirection: "column", maxWidth: "300px", height: "200px", justifyContent: "space-between", textAlign: "center", paddingTop: "2vh" }}>
                    <video src="grappling_hook_video.mp4" autoPlay loop />
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", textAlign: "center", marginTop:"0px" }}>
                <iframe src="https://blueprintue.com/render/k94u5cca/" allowFullScreen width={"950px"} height={"460px"} style={{ overflow: "hidden" }} />
            </div>
        </div>
    );
};

export default GrapplingHookPage;