import React, { useEffect, useState } from "react";
import HeaderLogo from '../assests/Header-logo.svg';
import Button from "../Button/button";
import { useNavigate } from "react-router-dom";
import Footer from "../home/footer";

const SlotReserved = () => {

    const navigate = useNavigate();

    const handleStart = () => {
        navigate('/')
    }


    useEffect(() => {
        localStorage.clear();
    }, []);

    const slotDay = localStorage.getItem('selectedDay') || ''
    const slotTime = localStorage.getItem('selectedTime')

    const [day, month, year] = slotDay.split('/').map(Number);
    const dateObj = new Date(year, month - 1, day); // JS months are 0-indexed

    const formattedDate = dateObj.toLocaleString('en-US', { month: 'short', day: 'numeric' });

    const slot = `${formattedDate} - ${slotTime}`;






    return (


        <div className="bootcamp-container">

            <header className="header" onClick={handleStart}>

                <img src={HeaderLogo} alt="Logo" />

            </header>
            <div className="content">

                <div className="slot-content">
                    <div className="slot-head">
                        Your slot is reserved.
                    </div>
                    <div className="slot-content">
                        See you on {slot} at our office.
                    </div>
                    <div className="slot-content">
                        We've emailed you the all other details and location details.                </div>
                    <div className="slot-content">
                        Important: Please make sure to attend your scheduled slot. If you miss it, you will only have one more opportunity to enroll, and only under valid or unfortunate circumstances.                </div>
                    <div className="slot-content">
                        If you have any questions, just let us know!
                    </div>
                </div>

                <div className="contact">

                    <div>
                        <a href="https://wa.me/7550043778" target="_blank" rel="noopener noreferrer">
                            WhatsApp - 7550043778
                        </a>,
                        <a style={{ marginLeft: '10px' }} href="https://wa.me/8877880101" target="_blank" rel="noopener noreferrer">
                            8877880101
                        </a>
                    </div>
                    <div>
                        <a href="mailto:support@invicious.in" target="_blank" rel="noopener noreferrer">
                            E - Mail - support@invicious.in
                        </a>
                    </div>
                </div>


            </div>

            <Footer />


        </div>

    );
};

export default SlotReserved;
