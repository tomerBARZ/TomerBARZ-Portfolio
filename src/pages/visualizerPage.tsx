import React, { ReactNode, useEffect, useRef, useState } from 'react';

const VisualizerPage = () => {

    return (
        <div style={{ marginBottom: "30vh" }}>
            <p>
            In 2023, I developed a simulation platform utilizing Meshcat to test automations on theoretical 'robots' of my own design. This platform allowed me to proactively identify potential issues and refine both the design and autonomous behavior of the robots before physical implementation. Notably, I leveraged the same codebase for this simulation as I did for the Model Predictive Control (MPC) controller, creating a cohesive environment for testing and optimization that enhanced my overall development process.
            </p>
            <div style={{ width: "100%", display: "flex", justifyContent: "space-around" }}>
                <div style={{ display: "flex", flexDirection: "column", maxWidth: "15vw", justifyContent: "space-between", textAlign: "center" }}>
                    <video src="visualizer_video1.mp4" autoPlay loop/>
                </div>
                <div style={{ display: "flex", flexDirection: "column", maxWidth: "15vw", justifyContent: "space-between", textAlign: "center" }}>
                    <img src='visualizer_image1.png' />
                    <label>Static Image of the simualted robot</label>
                </div>
                <div style={{ display: "flex", flexDirection: "column", maxWidth: "15vw", justifyContent: "space-between", textAlign: "center" }}>
                    <video src="visualizer_video2.mp4" autoPlay loop/>
                    <label>The simualted robot controlled directly by gamepad inputs</label>
                </div>
            </div>

        </div >
    );
};

export default VisualizerPage;