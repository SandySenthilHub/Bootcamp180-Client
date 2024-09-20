import React, { useEffect, useState } from "react";
import HeaderLogo from '../assests/Header-logo.svg';
import Button from "../Button/button";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Footer from "../home/footer";


const DevRole = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;

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
                                <li>Front End Developer </li>
                                <li>Back End Developer</li>
                                <li>Devops Engineer</li>
                                <li>Software Tester</li>
                                <li>Process Architect </li>

                            </ul>
                        </div>

                        <div className="note-domain">
                            <b>Note:</b> You can only take this quiz once, so answer each question carefully. If you exit or quit midway, all entered data will be lost.
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

export default DevRole;



