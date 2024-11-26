import React, { ReactNode, useEffect, useRef, useState } from 'react';
import './largeButton.css'

const LargeButton: React.FC<{ children: ReactNode, onClick: () => {} }> = ({children, onClick}) => {

    return (
        <button className='fade-button' style={{width:"10vw", height:"10vw", borderRadius:"2px", border:"1px white", background: 'linear-gradient(20deg, #ff7e5f, #feb47b)'}} onClick={onClick}>
            {children}
        </button>
    );
};

export default LargeButton;