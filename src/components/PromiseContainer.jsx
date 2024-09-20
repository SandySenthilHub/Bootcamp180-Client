import React, { useEffect, useState } from "react";
import HeaderLogo from './assests/Header-logo.svg';
import Button from "./Button/button";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Emoji1 from './assests/emoji1.svg';
import PromiseImg from './assests/Promise.svg';
import Footer from "./home/footer";

const PromiseContainer = () => {

    const navigate = useNavigate();
    const location = useLocation(); 
    const currentPath = location.pathname; 

    // console.log("currentPath",currentPath)

    const handleStart = () => {
        navigate('/')
    }


    const handleNext = () => {
        let route;

        if (currentPath.includes("design")) {
            route = '/analysis-design';
        } else if (currentPath.includes("development")) {
            route = '/analysis-development';
        } else if (currentPath.includes("marketing")) {
            route = '/analysis-marketing';
        } else if (currentPath.includes("entrepreneurship")) {
            route = '/analysis-entrepreneurship';
        } else {
            // Default route if no valid program is found
            route = '/analysis';
        }

        // console.log("Navigating to:", route);

        // Navigate to the constructed route
        navigate(route);
    }

    return (
        <>

            <div className="bootcamp-container">
                <header className="header" onClick={handleStart}>
                    <img src={HeaderLogo} alt="Logo" />
                </header>
                <div className="content" id="pro-content">

                    <div className="doodle-pro">
                        <img src={Emoji1} alt="" />

                        <section>
                            <blockquote className="speech bubble"> Before we start 👇🏻</blockquote>
                        </section>
                    </div>

                    <div className="pro-head">
                        Promise me you'll answer honestly
                    </div>
                    <div className="pro-img" onClick={handleNext}>

                        <img src={PromiseImg} alt="img" />
                        <div>Tap Here</div>

                    </div>
                </div>

             

                <Footer/>
            </div>

        </>
    )
}

export default PromiseContainer