import React, { ReactNode, useEffect, useRef, useState } from 'react';

const BloomPage = () => {

    return (
        <div style={{marginBottom: "10vh"}}>
            <p>
                For the past five years, I have dedicated my efforts to developing a custom game engine to overcome the challenges I encountered while using Unreal Engine. This 2D-focused engine, which includes light 3D capabilities, is a high-performance, low-level solution that utilizes a minimal set of libraries and leverages OpenGL 4.3 (Core) and C++14 for rendering. Tailored specifically to my needs, my engine achieves frame rates that are 200% to 250% faster than those of other commercial engines, allowing for a smoother and more responsive experience. This project not only highlights my technical expertise but also reflects my commitment to solving real-world problems in game development.
            </p>
            <p style={{marginTop:"5vh"}}>Here is some footage from early in the project's development:</p>
            <div style={{ width: "100%", display: "flex", justifyContent: "space-around" }}>
                <div style={{ display: "flex", flexDirection: "column", maxWidth: "300px",height: "250px", justifyContent: "space-between", textAlign: "center" }}>
                    <img src='bloom_image1.png' />
                    <label>First rendering tests with pixel art character rigs</label>
                </div>
                <div style={{ display: "flex", flexDirection: "column", maxWidth: "300px",height: "250px", justifyContent: "space-between", textAlign: "center" }}>
                    <video src="bloom_boxer_testing.mp4" autoPlay loop/>
                    <label>One of the first projects made with my engine, testing the capabilities of the 1.0.0 release</label>
                </div>
                <div style={{ display: "flex", flexDirection: "column", maxWidth: "300px",height: "250px", justifyContent: "space-between", textAlign: "center" }}>
                    <video src="bloom_entities_testing.mp4" autoPlay loop/>
                    <label>Testing how much physical entities affect performance, the average FPS remained above 1500</label>
                </div>
            </div>
        </div>
    );
};

export default BloomPage;