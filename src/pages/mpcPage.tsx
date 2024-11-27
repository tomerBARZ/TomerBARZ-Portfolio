import React, { ReactNode, useEffect, useRef, useState } from 'react';

const MPCPage = () => {

    return (
        <div style={{ marginBottom: "3vh" }}>
            <p>
                This project represents my foray into programming Model Predictive Control (MPC), a sophisticated control strategy that powers some of the most advanced robotics, like those developed by Boston Dynamics. MPC utilizes a predictive model of a system to optimize control inputs by solving a finite horizon optimization problem at each time step. This approach ensures that system constraints are respected while achieving desired performance. I implemented this advanced control strategy on a small robotics platform that I specifically designed for this purpose, allowing me to explore the capabilities and challenges of MPC in real-world applications.
            </p>
            <div style={{ width: "100%", display: "flex", justifyContent: "space-around" }}>
                <div style={{ display: "flex", flexDirection: "column", maxWidth: "30vw", justifyContent: "space-between", textAlign: "center" }}>
                    <video src="mpc_video.mp4" autoPlay loop/>
                    <label>A simulation of the mpc following setpoints and ignoring collisions</label>
                </div>
                <div style={{ display: "flex", flexDirection: "column", maxWidth: "15vw", justifyContent: "space-between", textAlign: "center" }}>
                    <img src='mpc_image1.jpg' />
                    <label>The small robotic test platform used to develop my implementation of the nonlinear MPC on a differential-drive model</label>
                </div>
            </div>

        </div >
    );
};

export default MPCPage;