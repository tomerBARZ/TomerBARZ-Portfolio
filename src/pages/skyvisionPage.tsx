import React, { ReactNode, useEffect, useRef, useState } from 'react';

const SkyvisionPage = () => {

    return (
        <div style={{ marginBottom: "3vh" }}>
            <p>
                Skyvision is a web interface combined with a powerful computer vision system, designed to empower users to create computer vision pipelines without requiring any coding knowledge. This user-friendly platform simplifies the process by allowing for the modification and calibration of pipelines on the fly, which significantly reduces downtime between deployments. With Skyvision, users can efficiently adapt their visual processing needs in real time, enhancing overall productivity and flexibility in their projects.
            </p>
            <div style={{ width: "100%", display: "flex", justifyContent: "space-around" }}>
                <div style={{ display: "flex", flexDirection: "column", maxWidth: "40vw", justifyContent: "space-between", textAlign: "center" }}>
                    <img src='skyvision_image1.png' />
                    <label>An error in the current pipeline, due to a bad camera id</label>
                </div>
            </div>

        </div >
    );
};

export default SkyvisionPage;