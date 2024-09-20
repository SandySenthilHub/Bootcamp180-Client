import React, { useState } from "react";
import HeaderLogo from '../assests/Header-logo.svg';
import Button from "../Button/button";
import { useNavigate } from "react-router-dom";
import Footer from "../home/footer";
import axios from 'axios';
import { BASE_URL } from "../../Utils/ApplicationURL";

const IDVerify = () => {
    const [userInfo, setUserInfo] = useState({ id: "" });
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleHome = () => {

        navigate('/')
    }

    const handleStart = async () => {
        try {
            // const response = await axios.post('http://localhost:5000/api/verify-id', { kywId: userInfo.id });
            const response = await axios.post(`${BASE_URL}/api/verify-id`, { kywId: userInfo.id });

            if (response.data.valid) {

                localStorage.setItem('kywId', userInfo.id);
                localStorage.setItem('userEmail', response.data.email);
                navigate('/domain-slot');
            } else {
                setErrorMessage(response.data.message || 'The KYW ID you entered is invalid. Please try again.');
            }
        } catch (error) {
            const backendMessage = error.response?.data?.message;
            setErrorMessage(backendMessage);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
    };

    return (
        <div className="bootcamp-container">
            <header className="header" onClick={handleHome}>
                <img src={HeaderLogo} alt="Logo" />
            </header>
            <div className="content">
                <div className="slotpage-head">
                    Enter the KYW ID we emailed you.
                </div>
                <div className="verify-content">
                    Check your inbox! We sent this after you completed the "Know Your Worth" quiz.
                </div>
                <div className="id-verify">
                    <div className="form-row" id="id-input">
                        <input
                            type="text"
                            name="id"
                            value={userInfo.id}
                            onChange={handleInputChange}
                            required
                            maxLength={10}
                            className="id-input-input"
                        />
                        <label className={userInfo.id ? 'focused' : ''}>KYW ID</label>
                    </div>
                    <div className="dive-in-btn">
                        <Button label="Book Slot" onClick={handleStart} />
                    </div>

                    {errorMessage && <div style={{ marginTop: '30px' }} className="error">{errorMessage}</div>}

                    <div className="navigatehome">
                        Haven’t attended the quiz? <br /> <a href="" onClick={handleHome}>Know Your Worth</a>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default IDVerify;
