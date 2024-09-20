import React from "react";
import axios from "axios"; // Don't forget to import axios
import HeaderLogo from '../assests/Header-logo.svg';
import Button from "../Button/button";
import { useNavigate } from "react-router-dom";
import Design2 from '../assests/Design-2.svg';
import DesignLine from '../assests/Design-line.svg';
import Design3 from '../assests/Design-3.svg';
import { BASE_URL } from "../../Utils/ApplicationURL";

const Enroll = () => {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate('/program-details');
    };

    const navigateHome = () => {
        navigate('/');
    };

    const saveWorth = async () => {
        const afterProgram = localStorage.getItem('afterProgram');
        const baseCostIncr = localStorage.getItem('baseCostIncr');

        const data = {
            afterWorth: afterProgram, 
            currentWorth: baseCostIncr, 
        };

        try {
            // await axios.post('http://localhost:5000/api/save-after-worth', data);
            await axios.post(`${BASE_URL}/api/save-after-worth`, data); 

            console.log('Worth saved successfully');
        } catch (error) {
            console.error('Error saving worth:', error);
        }
    };

    const afterProgram = localStorage.getItem('afterProgram');
    const baseCostIncr = localStorage.getItem('baseCostIncr');

    const LPA = afterProgram * 12;


    const IncrPer = Math.round(((LPA - baseCostIncr) / baseCostIncr) * 100);

    return (
        <div className="bootcamp-container">
            <header className="header" onClick={navigateHome}>
                <img src={HeaderLogo} alt="Logo" />
            </header>

            <div className="content">
                <div className="enroll-head">
                    Your In-hand salary with us after bootcamp.180
                </div>
                <p className="lpa">₹ {LPA.toLocaleString()} LPA <span>+{IncrPer}%</span></p>

                {LPA > 360000 ? (
                    <>
                        <div className="how">Send us your resume to  <img className="img2-enroll" src={Design2} alt="Img" /></div>
                        <img className="" src={DesignLine} alt="Img" width={140} height={15} />
                    </>
                ) : (
                    <>
                        <div className="how">You can 8x your worth in 6 months and are you wondering who’s gonna hire you? <img className="img2-enroll" src={Design2} alt="Img" /></div>
                        <img className="" src={DesignLine} alt="Img" width={140} height={15} />
                    </>
                )}

                <div className="waiting">Our Design Department is waiting for you!</div>

                <div className="enroll-btn">
                    <Button
                        label={LPA > 360000 ? "support@invicious.in" : "Enroll in Bootcamp.180"}
                        onClick={async () => {
                            if (LPA <= 360000) {
                                await saveWorth(); 
                                handleStart();
                            } else {
                                window.location.href = "mailto:support@invicious.in";
                            }
                        }}
                    />
                    <img src={Design3} className="design3-enroll" alt="Img" />
                </div>
            </div>

            <footer className="footer">
                <a href="">@bootcamp.180</a>
            </footer>
        </div>
    );
};

export default Enroll;
