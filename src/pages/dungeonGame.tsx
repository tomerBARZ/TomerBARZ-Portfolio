import React, { ReactNode, useEffect, useRef, useState } from 'react';

const DungeonGamePage = () => {

    return (
        <div style={{marginBottom: "3vh"}}>
            <p>
                I have been diligently working on my game for the past two years, and while there isn’t much to showcase at the moment due to the scope of the project and my development approach, I’m excited about its potential. This game will be a roguelike souls-lite experience that emphasizes player skill over luck, setting it apart from traditional roguelikes. Currently, the game features over 30 items and 20 unique enemies across two main areas. Additionally, I’ve structured the game in a way that will make integrating online co-op functionality straightforward, so there’s a possibility of that feature being added in the future.
            </p>
            <div style={{ width: "100%", display: "flex", justifyContent: "space-around", marginTop:"0px",}}>
                <div style={{ display: "flex", flexDirection: "column", width: "20vw", justifyContent: "space-between", textAlign: "center" }}>
                    <img src='dungeon_game_image1.png' />
                    <label>A human entering the dungeon and the darkness</label>
                </div>
                <div style={{ display: "flex", flexDirection: "column", width: "20vw", justifyContent: "space-between", textAlign: "center" }}>
                    <img src='dungeon_game_image3.png' />
                    <label>Getting hurt while fighting high level goblins</label>
                </div>
            </div>
            <div style={{ width: "100%", display: "flex", justifyContent: "space-around" }}>
                <div style={{ display: "flex", flexDirection: "column", width: "20vw", justifyContent: "space-between", textAlign: "center" }}>
                    <img src='dungeon_game_image4.png' />
                    <label>Spreading fireflies around to set enemy frogs on fire</label>
                </div>
                <div style={{ display: "flex", flexDirection: "column", width: "20vw", justifyContent: "space-between", textAlign: "center" }}>
                    <img src='dungeon_game_image2.png' />
                    <label>Trying to get a key guarded by armored goblins</label>
                </div>
            </div>
        </div>
    );
};

export default DungeonGamePage;