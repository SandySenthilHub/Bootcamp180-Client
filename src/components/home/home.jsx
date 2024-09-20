import React, { useEffect, useState } from "react";
import './home.css';
import HeaderLogo from '../assests/Header-logo.svg';
import Button from "../Button/button";
import { useNavigate } from "react-router-dom";
import Emoji1 from '../assests/emoji1.svg';
import Footer from "./footer";

const HomePage = () => {


    const ScrollToTop = () => {
        useEffect(() => {
            window.scrollTo(0, 0);
        }, []);

        return null;
    };

    const navigate = useNavigate();
    const handleStart = () => {

        navigate('/domain')

    }

    const handleBook = () => {
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

                    <div className="home-head">
                        KNOW YOUR WORTH
                    </div>
                    <div className="home-content">
                        Take 8 quick questions to discover your current worth and how <b>Bootcamp.180 - a paid training program initiative</b> can help you achieve your real career / life potential.                </div>

                    <div className="dive-in-btn">
                        <Button label="Dive in" onClick={handleStart} />

                    </div>

                    <div className="doodle-home">
                        <img src={Emoji1} alt="" />

                        <section>
                            <blockquote className="speech bubble">   Want to know how? <a href="" onClick={handleDetails}>Click here</a></blockquote>
                        </section>
                    </div>

                    <div className="our-goals-container">
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

                    <div style={{ marginTop: '12px' }}>Join our 6 months paid training program and get instant offer letter</div>

                    <div className="dive-in-btn">
                        <Button label="Enroll Now" onClick={handleBook} />
                    </div>




                </div>

                <Footer />


            </div>
        </>

    );
};

export default HomePage;
