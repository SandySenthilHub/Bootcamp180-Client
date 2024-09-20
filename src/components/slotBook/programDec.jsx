import React, { useEffect, useState } from "react";
import HeaderLogo from '../assests/Header-logo.svg';
import calender from '../assests/d-calender.svg';
import location from '../assests/d-location.svg';
import fresher from '../assests/d-fresher.svg';
import switchI from '../assests/d-swith.svg';
import D3 from '../assests/d-3.svg';
import tick from '../assests/d-tick.svg';
import grouth from '../assests/d-grouth.svg';


import Button from "../Button/button";
import { useNavigate } from "react-router-dom";
import Footer from "../home/footer";

const ProgramDescription = () => {

    const navigate = useNavigate();

    const handlestart = ()=>{
        navigate('/')
    }

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


        <div className="bootcamp-container">

            <header className="header" id="dec-header" onClick={handlestart}>

                <img src={HeaderLogo} alt="Logo" />

            </header>
            <div className="content" id="content-scroll">


                <div className="dec-content">
                    <div className="des-head">
                        A New Way to Work, Learn, and Live
                    </div>
                    <div className="des-content1">
                        100% Placement
                    </div>
                    <div className="des-content1">
                        No Placement? Full Refund
                    </div>
                    <div className="des-content1">
                        Only for the first 402 Slots
                    </div>
                    <div className="des-content2">
                        Your stepping stone to <b>leveling up</b> in the professional world for <b>just ₹50,000</b>. Yes, it’s an investment, but what’s better than <b>investing in your future</b>?
                    </div>


                    <div className="program-contents">

                        <div className="program1-head">Program Details:</div>

                        <div className="program1">
                            <div>Duration: 6 Months (3 months training + 3 months internship)</div>

                            <div className="calender-contaoner">
                                <div >
                                    <img src={calender} alt="img" />
                                    <div>October 1, 2024</div>
                                </div>
                                <div>
                                    <img src={location} alt="img" />
                                    <div>Onsite at Invicious, Coimbatore</div>
                                </div>
                            </div>

                            <div>Training Program charges : <b>₹50,000</b> </div>
                            <div><b>Note: This fee covers the full training program, excluding accommodation and device.</b></div>
                            <div>
                                <div><b>Additional Services:</b></div>
                                <ul>
                                    <li><b>Accommodation & Device</b>: If you require accommodation or a device during the program, additional charges will apply. Assistance available for these services upon request.</li>
                                </ul>
                            </div>

                        </div>

                        <div className="program2">
                            <div className="program1-head">Who is this for?</div>

                            <div className="calender-contaoner">
                                <div >
                                    <img src={fresher} alt="img" />
                                    <div> Graduates / Freshers</div>
                                </div>
                                <div>
                                    <img src={switchI} alt="img" />
                                    <div>Career switcher</div>
                                </div>
                                <div>
                                    <img src={grouth} alt="img" />
                                    <div>Growth Seekers</div>
                                </div>
                            </div>

                            <div className="program2-content">Bootcamp.180 offers a comprehensive 6-month training program designed to equip you with the essential skills and hands-on experience needed to succeed.</div>

                        </div>


                        <div className="program3">
                            <div className="program1-head">What We Offer:</div>
                            <div className="program3-img" >
                                <img src={fresher} alt="img" />
                                <div>Diverse Roles</div>
                            </div>

                            <div className="program3-list">
                                <div>Choose from <b>402 open positions</b> across various domains.</div>
                                <div><b>Design</b> - Graphic Designer, UX Researcher, UX Writer, UI Designer, Interaction Designer, UI testing / Quality Control </div>
                                <div><b>Development</b> - Front End Developer, Back End Developer, Devops Engineer, Software Tester, Process Architect </div>
                                <div><b>Digital Marketing</b> - Social Media Researcher, Social Media Manager, Ads Specialist, Content Production Executive, Video Editor</div>
                            </div>

                        </div>


                        <div className="program4">
                            <div className="program1-head">Structured Training</div>
                            <div>Our program is divided into two key phases:</div>

                            <div className="p4-flex">
                                <img src={D3} alt="img" />
                                <div><b>3 Months Hands-On Learning:</b> Begin with demo projects to build foundational skills, followed by live client projects to gain real-world experience.</div>

                            </div>

                            <div className="p4-flex">
                                <img src={D3} alt="img" />
                                <div><b>3 Months Internship:</b> Work as an intern or trainee under the guidance of experienced team leaders, handling client communication, internal collaboration, and gaining practical insights.</div>
                            </div>

                        </div>

                        <div className="program5">
                            <div className="program1-head">Why Choose Bootcamp.180?</div>
                            <div>Transform your passion into a successful career. Join Bootcamp.180 and gain the skills and experience that make you job-ready from day one.</div>

                            <div className="p5-flex">
                                <div className="program3-img" >
                                    <img src={tick} alt="img" />
                                    <div>Immersive Onsite Training</div>
                                </div>

                                <div className="program3-img" >
                                    <img src={tick} alt="img" />
                                    <div>Career-Building Internships</div>
                                </div>
                            </div>

                        </div>

                        <div className="program-goals">
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
                        </div>

                        <div className="pContact">
                            <div>For more details, contact us at:</div>
                            <ul>
                                <li>
                                    Phone:
                                    <a href="tel:9150043778"> 9150043778</a>,
                                    <a href="tel:8877880101"> 8877880101</a>
                                </li>
                                <li>
                                    Email:
                                    <a href="mailto:experience@invicious.in"> experience@invicious.in</a>
                                </li>
                            </ul>


                            <div>Apply Today and Take the First Step Towards Your Future!</div>
                        </div>



                    </div>

                </div>




            </div>

            <Footer />


        </div>

    );
};

export default ProgramDescription;
