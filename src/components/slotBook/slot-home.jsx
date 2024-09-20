import React, { useEffect, useState } from "react";
import HeaderLogo from '../assests/Header-logo.svg';
import Button from "../Button/button";
import { useNavigate } from "react-router-dom";
import Emoji1 from '../assests/emoji1.svg';
import Footer from "../home/footer";

const SlotHomePage = () => {

    const ScrollToTop = () => {
        useEffect(() => {
            window.scrollTo(0, 0);
        }, []);

        return null;
    };

    const navigate = useNavigate();
    const handleStart = () => {

        navigate('/verify')

    }

    const handleDetails = () => {

        navigate('/program-details')

    }

    useEffect(() => {
        localStorage.clear();
    }, []);

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const scrollContainer = document.querySelector('.our-goals');
        scrollContainer.style.transform = `translateX(-${activeIndex * 100}%)`;

        // Update active dot
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, idx) => {
            dot.classList.toggle('active', idx === activeIndex);
        });
    }, [activeIndex]);

    return (

        <>

            <ScrollToTop />



            <div className="bootcamp-container">

                <header className="header">

                    <img src={HeaderLogo} alt="Logo" />

                </header>
                <div className="content">

                    <div className="slotpage-head">
                        Join Our Paid Training Program and Get an Instant Offer Letter!
                    </div>
                    <div className="slotpage-content">
                        100% Placement <br />
                        No Placement? Full Refund <br />
                        Only for the first 402 Slots                </div>

                    <div className="dive-in-btn">
                        <Button label="Enroll Now" onClick={handleStart} />

                    </div>

                    <div className="slotpage-con-2">Your stepping stone to <b>leveling up</b> in the professional world for <b>just ₹50,000.</b>
                        Yes, it’s an investment, but what’s better than <b>investing in your future?</b></div>
                    <div>Why Join Bootcamp.180?</div>



                    <div className="our-goals-container" id="slot-goal">
                        <div className="our-goals">
                            <div className="goals-section goals-head1">
                                <div className="goals-head">Our Goals</div>
                                <div className="goals-content">
                                    <ul>
                                        <li>Foster a Great Work Environment</li>
                                        <li>Empower Freshers to Succeed </li>
                                        <li>Support Work-Life Balance </li>
                                        <li>Give Real-World Experience </li>

                                    </ul>

                                </div>
                            </div>
                            <div className="goals-section goals-head2">
                                <div className="goals-head">Our Expectations</div>
                                <div className="goals-content">
                                    <ul>
                                        <li>A Willingness to Grow </li>
                                        <li>Teamwork & Collaboration </li>
                                        <li>Passion & Eagerness to Learn </li>
                                        <li>A Positive, Supportive Attitude </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="scroll-indicator">
                            <span className="dot active"></span>
                            <span className="dot"></span>
                        </div>
                    </div>

                    <div className="doodle-home" id="slot-doodle">
                        <img src={Emoji1} alt="" />

                        <section>
                            <blockquote className="speech bubble">   Want to know how? <a href="" onClick={handleDetails}>Click here</a></blockquote>
                        </section>
                    </div>

                </div>

                <Footer />


            </div>

        </>

    );
};

export default SlotHomePage;
