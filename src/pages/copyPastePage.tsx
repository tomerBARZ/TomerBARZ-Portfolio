import React, { ReactNode, useEffect, useRef, useState } from 'react';

const CopyPastePage = () => {

    return (
        <div>
            <p>
                This year, I participated in the "Solodev Gamejam #4," a 72-hour challenge for solo developers to create a game based on a specific theme. The theme of this jam was "two-button controls," which inspired me to design a puzzle game centered around the concept of copy and pasting. In this game, players must 'write' the code to control their character using snippets they copy from an in-game Stack Overflow-like interface. This innovative mechanic not only challenges players to think critically about coding but also highlights the creative potential of my custom game engine, demonstrating its versatility in handling unconventional gameplay concepts.
            </p>
            <p style={{ marginTop: "5vh" }}>You can find everything about it <a href="https://tomer-barz.itch.io/copypaste" style={{ color: "yellow" }}>here</a>.</p>
            <div style={{ width: "100%", display: "flex", justifyContent: "space-around" }}>
                <div style={{ display: "flex", flexDirection: "column", width: "400px", height: "250px", justifyContent: "space-between", textAlign: "center" }}>
                    <img src='copy_paste_image1.png' />
                    <label>The player looking in a question related to player movement, looking for movement related snippets</label>
                </div>
                <div style={{ display: "flex", flexDirection: "column", width: "400px", height: "250px", justifyContent: "space-between", textAlign: "center" }}>
                    <img src='copy_paste_image2.png' />
                    <label>Editing the movement code to add jumping, and trying to reach the next star</label>
                </div>
            </div>
        </div>
    );
};

export default CopyPastePage;