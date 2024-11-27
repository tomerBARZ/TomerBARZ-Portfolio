import React, { ReactNode, useEffect, useRef, useState } from 'react';

const AutoAlignPage = () => {

    return (
        <div style={{ marginBottom: "10vh" }}>
            <p>
                I developed this tool specifically to facilitate the data collection process for our Ace of Aces game. Utilizing OpenCV, it efficiently displays all the scanned pages, automatically identifies key regions of interest, and extracts the relevant sections of the images. The tool also informs users of any discrepancies or missing information from the spreadsheet, highlighting areas that require correction. This streamlined approach not only enhances accuracy but also significantly simplifies the verification process, ensuring that our data remains precise and consistent.
            </p>
            <div style={{ width: "100%", display: "flex", justifyContent: "space-around" }}>
                <div style={{ display: "flex", flexDirection: "column", maxWidth: "22.5vw", justifyContent: "space-between", textAlign: "center" }}>
                    <video src="autoalign_video.mp4" autoPlay loop />
                    <label>Scrolling through all the pages and seperating the numerical data from the graphics</label>
                </div>
                <div style={{ display: "flex", flexDirection: "column", maxWidth: "22.5vw", justifyContent: "space-between", textAlign: "center" }}>
                    <img src='autoalign_image1.png' />
                    <label>Using the tool to compare discrepancies in the data</label>
                </div>
            </div>

        </div >
    );
};

export default AutoAlignPage;