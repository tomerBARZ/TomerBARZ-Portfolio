import React, { ReactNode, useEffect, useRef, useState } from 'react';

const PointsPage = () => {

    return (
        <div style={{ marginBottom: "10vh" }}>
            <p>
                I developed <a href="https://points.practicalmedia.io" style={{ color: "cyan" }}>Practical Analytics</a>, a streamlined platform designed in collaboration with PracticalNPC, which serves as an all-in-one solution for tracking Twitch viewer engagement through rewards and redeems. This engaging website showcases a leaderboard featuring all connected streamers and their viewers, encouraging healthy competition for the coveted top spot. Since launching the platform and sharing it with streamers in the game development community, we have observed a remarkable increase in reward engagement across their channels, highlighting the positive impact of our innovative tool.
            </p>
            <div style={{ width: "100%", display: "flex", justifyContent: "space-around" }}>
                <div style={{ display: "flex", flexDirection: "column", maxWidth: "22.5vw", justifyContent: "space-between", textAlign: "center" }}>
                    <img src='practicalanalytics_image1.png' />
                    <label>The landing page showing all time data</label>
                </div>
                <div style={{ display: "flex", flexDirection: "column", maxWidth: "22.5vw", justifyContent: "space-between", textAlign: "center" }}>
                    <img src='practicalanalytics_image2.png' />
                    <label>A streamer specific page, showing a list to filter by reward</label>
                </div>
            </div>

        </div >
    );
};

export default PointsPage;