import React, { ReactNode, useEffect, useRef, useState } from 'react';

const PracticalMediaPage = () => {

    return (
        <div style={{ marginBottom: "10vh" }}>
            <p>
            <a href="https://practicalmedia.io" style={{ color: "cyan" }}>Practical Media</a>  is another project created by PracticalNPC and developed by me, serving as a dedicated hub for news and articles related to game development. The site features a built-in Markdown/HTML editor, enabling the PracticalNPC team to effortlessly publish content. Additionally, it includes a customizable pages system, allowing for tailored solutions such as press kits for their games or wiki pages for their ongoing RPG projects. Designed with efficiency in mind, Practical Media minimizes hosting costs, ensuring that the platform remains sustainable and accessible for its users.
            </p>
            <div style={{ width: "100%", display: "flex", justifyContent: "space-around" }}>
                <div style={{ display: "flex", flexDirection: "column", maxWidth: "450px", height: "250px", justifyContent: "space-between", textAlign: "center" }}>
                    <img src='practicalmedia_image1.png' />
                    <label>The home page showing the latest articles and upcoming events</label>
                </div>
                <div style={{ display: "flex", flexDirection: "column", maxWidth: "450px", height: "250px", justifyContent: "space-between", textAlign: "center" }}>
                    <img src='practicalmedia_image2.png' />
                    <label>Editing an article using the markdown editor</label>
                </div>
            </div>

        </div >
    );
};

export default PracticalMediaPage;