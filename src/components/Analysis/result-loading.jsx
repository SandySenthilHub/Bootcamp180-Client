import React, { useEffect, useState } from "react";
import HeaderLogo from '../assests/Header-logo.svg';
import { useNavigate } from "react-router-dom";
import Footer from '../home/footer';
import Analysing from '../assests/Analysing.svg';

const ResultAnalysing = () => {


    return (
        <>
            <div className="bootcamp-container">
                {/* <header className="header" onClick={handleStart}>
                    <img src={HeaderLogo} alt="Logo" />
                </header> */}

                <div className="loading-container">
                    <img src={Analysing} alt="img" />
                    <div className="loading-animation">
                        <div className="analysing">Analysing</div>
                        <div className="dots">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>

                {/* <Footer /> */}
            </div>
        </>
    );
}

export default ResultAnalysing;
