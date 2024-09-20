import React, { useEffect, useState } from "react";
import HeaderLogo from '../assests/Header-logo.svg';
import Button from "../Button/button";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Footer from "../home/footer";


const DMRole = () => {

    const navigate = useNavigate();
    const location = useLocation(); // Get the current location
    const currentPath = location.pathname; // Get the current pathname

    const handleNext = () => {
        const newPath = `/notice${currentPath}`;
        navigate(newPath);
    }

    const handleStart = () => {
        navigate('/');
    }

    return (
        <>

            <div className="bootcamp-container">

                <header className="header" onClick={handleStart}>

                    <img src={HeaderLogo} alt="Logo" />

                </header>
                <div className="content">

                    <div id="domain-content">


                        <div className="role-head" style={{ textAlign: "left" }}>
                            Does your skill fit one of these roles?                    </div>
                        <div className="role-content">
                            <ul>
                                <li>Social Media Researcher </li>
                                <li>Social Media Manager</li>
                                <li>Ads Specialist</li>
                                <li>Content Production Executive</li>
                                <li>Video Editor</li>

                            </ul>
                        </div>

                        <div className="note-domain">
                            You can only take this quiz once, so answer each question carefully. If you exit or quit midway, all entered data will be lost.
                        </div>


                        <div className="role-btn">
                            <Button label="Yes, Lets Go 💪" onClick={handleNext} />

                        </div>




                    </div>
                </div>

                <Footer />


            </div>

        </>
    )
}

export default DMRole;



