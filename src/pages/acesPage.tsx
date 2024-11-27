import React, { ReactNode, useEffect, useRef, useState } from 'react';

const AcesPage = () => {

    return (
        <div style={{ marginBottom: "10vh" }}>
            <p>
            Recently, I’ve been collaborating with a group of friends to reimagine the classic Ace of Aces picture game book as an engaging online web game. While the project is still in development and not yet live, we’ve made significant progress by meticulously scanning all the pages from both 1980 books and creating a comprehensive CSV file that outlines all possible player moves. When two players enter the website, the server automatically assigns them to a game lobby, allowing them to engage in battle seamlessly. Our web version retains the essence of the original game while significantly enhancing the experience: players no longer need to track various metrics, as calculations are automatically handled by the server, making gameplay quicker and more convenient.
            </p>
            <div style={{ width: "100%", display: "flex", justifyContent: "space-around" }}>
                <div style={{ display: "flex", flexDirection: "column", maxWidth: "15vw", justifyContent: "space-between", textAlign: "center" }}>
                    <img src='aces_image2.png' />
                    <label>A dashboard from our web version, showing the current game state from the pilots POV and their available controls</label>
                </div>
                <div style={{ display: "flex", flexDirection: "column", maxWidth: "15vw",  justifyContent: "space-between", textAlign: "center" }}>
                    <img src='aces_image1.png' />
                    <label>The original picture-game books</label>
                </div>
                <div style={{ display: "flex", flexDirection: "column", maxWidth: "15vw", justifyContent: "space-between", textAlign: "center" }}>
                    <img src='aces_image3.png' />
                    <label>A spreadsheet featuring all player moves, it contains 11600 numbers that had to match perfectly with each other and were filled using a special tool I developed </label>
                </div>
            </div>

        </div >
    );
};

export default AcesPage;