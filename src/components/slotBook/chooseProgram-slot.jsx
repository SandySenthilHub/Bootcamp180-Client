import React, { useState } from "react";
import HeaderLogo from '../assests/Header-logo.svg';
import { useNavigate } from "react-router-dom";
import Footer from "../home/footer";

const ChooseProgramSlot = () => {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate('/')
    }

    const [selectedProgram, setSelectedProgram] = useState("");

    const programSlugs = {
        "Design & Creation": "design",
        "Web Development": "development",
        "Digital Marketing": "marketing",
        "Entrepreneurship": "entrepreneurship"
    };

    const handleProgramSelect = (program) => {
        setSelectedProgram(program);

        navigate(`/${programSlugs[program]}-date`);

        localStorage.setItem('selectedProgram', program);
    };




    return (
        <div className="bootcamp-container">
            <header className="header" onClick={handleStart}>
                <img src={HeaderLogo} alt="Logo" />
            </header>
            <div className="content" style={{ justifyContent: 'center' }}>
                <div className="qtn-head">
                Which program would you like to choose                </div>

                <div className="opt-btn">
                    <button
                        className={`option-btn ${selectedProgram === "Design & Creation" ? 'selected' : ''}`}
                        onClick={() => handleProgramSelect("Design & Creation")}
                    >
                        UI UX Design  + No Code                    </button>

                    <button
                        className={`option-btn ${selectedProgram === "Web Development" ? 'selected' : ''}`}
                        onClick={() => handleProgramSelect("Web Development")}
                    >
                        MERN Stack Development                    </button>

                    <button
                        className={`option-btn ${selectedProgram === "Digital Marketing" ? 'selected' : ''}`}
                        onClick={() => handleProgramSelect("Digital Marketing")}
                    >
                        Digital Marketing
                    </button>

                    <button
                        className={`option-btn ${selectedProgram === "Entrepreneurship" ? 'selected' : ''}`}
                        onClick={() => handleProgramSelect("Entrepreneurship")}
                        disabled
                    >
                        Entrepreneurship
                    </button>
                </div>
            </div>



            <Footer />
        </div>
    );
};

export default ChooseProgramSlot;
