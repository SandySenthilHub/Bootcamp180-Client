import React, { useEffect, useRef, useState } from "react";
import '../home/home.css';
import HeaderLogo from '../assests/Header-logo.svg';
import Design3 from '../assests/Design-3.svg';
import Design2 from '../assests/Design-2.svg';
import DesignLine from '../assests/Design-line.svg';
import Emoji from '../assests/result-emoji.svg';
import Analysing from '../assests/Analysing.svg';
import Button from "../Button/button";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import story from '../assests/story-doodle.svg';
import Download from '../assests/downloadIcon.svg';
import bgWorth from '../assests/bg-worth.svg';
import Arrow from '../assests/arrowLeft.svg';

import html2canvas from 'html2canvas';



import UI1 from '../assests/UI-1.svg';
import UI3 from '../assests/UI3.png';
import UI2 from '../assests/UI2.png';
import UI4 from '../assests/UI4.png';
import UI5 from '../assests/UI5.png';
import UI6 from '../assests/UI6.png';
import UI7 from '../assests/UI7.png';
import UI8 from '../assests/UI8.png';

import UIB1 from '../assests/UIB1.svg';
import UIB2 from '../assests/UIB2.svg';
import UIB3 from '../assests/UIB3.svg';
import UIB4 from '../assests/UIB4.svg';
import ResultAnalysing from "./result-loading";
import Footer from "../home/footer";
import { BASE_URL } from "../../Utils/ApplicationURL";





const mcqData = [
    {
        question: "On your recent project, which part did you do first and enjoy the most?",
        image: UI1,
        options: [
            { label: "Sketching out the visual layout", points: 1 },
            { label: "Understanding what my users need", points: 2 },
            { label: "Mapping what grabs attention", points: 2 },
            { label: "Focusing on meaningful content", points: 0 }
        ]
    },
    {
        question: "When you’re stuck on a design problem, what do you usually do?",
        image: UI2,
        options: [
            { label: "Take a break and return with fresh eyes.", points: 2 },
            { label: "Get feedback from users or colleagues.", points: 2 },
            { label: "Do more research or look for inspiration online.", points: 0 },
            { label: "Experiment with different ideas until something clicks.", points: 1 }
        ]
    },
    {
        question: "The project deadline is in 2 days, but you need more time to refine your design. What would you do?",
        image: UI3,

        options: [
            { label: "Prioritise key elements and deliver a functional design", points: 2 },
            { label: "Ask for an extension to ensure top quality", points: 1 },
            { label: "Complete what you can and explain the situation", points: 1 },
            { label: "Submit the design as it is", points: 0 }
        ]
    },
    {
        question: "You’re in a team meeting with lots of different design ideas. How do you handle it?",
        image: UI4,

        options: [
            { label: "Find common ground by discussing", points: 2 },
            { label: "Push for your idea if you’re confident", points: 1 },
            { label: "Go with the majority decision", points: 0 },
            { label: "Let someone else make the final call", points: 0 }
        ]
    },
    {
        question: "The client changes their design brief midway through the project. wHAT DO YOU DO?",
        image: UI5,

        options: [
            { label: "Adjust the design without hesitation", points: 2 },
            { label: "Ask for more clarification to ensure alignment.", points: 2 },
            { label: "Explain the impact of the changes on the timeline.", points: 1 },
            { label: " Stick to the original brief and resist changes.", points: 0 }
        ]
    },
    {
        question: "How did you get started in design?",
        image: UI6,

        options: [
            { label: "Doing Self Learning", value: 1500 },
            { label: "Pursuing a Tech Course", value: 2000 },
            { label: "Working On-Role", value: 2500 },
            { label: "Working Off-Role", value: 3000 }
        ]
    },
    {
        question: "Where does your salary currently fall?",
        image: UI7,

        options: [
            { label: "Currently not Working", value: 5000, },
            { label: "Lesser than 1.2 LPA", value: 10000 },
            { label: "1.2 LPA - 3.6 LPA", value: 17500 },
            { label: "Greater than 3.6 LPA", value: 37500, }
        ]
    },
    {
        question: "What’s your total work experience so far?",
        image: UI8,

        options: [
            { label: "Internship", value: 0 },
            { label: "0 - 2 Years", value: 500, },
            { label: "3 - 5 Years", value: 1000, },
            { label: "5+ Years", value: 1000 }
        ]
    }
];

const batchData = [
    {
        batch: 4,
        image: UIB1,
        description: "You’re just getting started in UI/UX design, but with more experience and training, you can boost your design skills and increase your market worth by 100%! Our course will help you become a top designer."
    },
    {
        batch: 3,
        image: UIB2,
        description: " You’ve begun your design journey and are gaining confidence. With further refinement, you could improve your design process and boost your worth by 50-75%. The course will help you develop stronger design strategies."
    },
    {
        batch: 2,
        image: UIB3,
        description: "You have a solid grasp of design principles, and your career can leap by 30-50% with some specialised training. Let our course guide you toward becoming a sought-after designer!"
    },
    {
        batch: 1,
        image: UIB4,
        description: " You’re a creative powerhouse! With further specialisation, you can increase your market worth by 20-30% & lead more high-impact projects. Join our course to elevate your expertise!"
    }
];







const ShareComponent = ({ batchImage, batchDescription, userName, onBack }) => {
    const [imageDataUrl, setImageDataUrl] = useState(null);

    // Automatically generate the image when the component mounts
    useEffect(() => {
        const generateImage = async () => {
            const element = document.getElementById('download-part');

            if (element) {
                // Convert the div content to canvas using html2canvas
                const canvas = await html2canvas(element);

                // Convert the canvas to a data URL
                const dataUrl = canvas.toDataURL('image/png');

                // Set the generated image data URL
                setImageDataUrl(dataUrl);
            }
        };

        generateImage();
    }, []); // Empty dependency array ensures this runs only once after the component mounts

    const downloadImage = async () => {
        const element = document.getElementById('download-part'); // Get the download part div

        // Convert the div content to canvas using html2canvas
        const canvas = await html2canvas(element);

        // Create a link to download the image
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'bootcamp180.png'; // Name of the downloaded file
        link.click();
    };

    return (
        <div className="share-container">

            <button className="backResult" onClick={onBack}>
                <img src={Arrow} alt="img" />
                <div>Back</div>
            </button>

            <img
                className="story-img"
                id="story-img"
                src={story}
                alt="img"
                width={236}
                style={{ cursor: 'pointer' }}
                onClick={downloadImage}
            />

        


                <div id="download-part" className="download-part">
                    <header id="header-none" className="header" style={{ paddingTop: "0" }}>
                        <img src={HeaderLogo} alt="Logo" />
                    </header>
                    <div className="batch-details">
                        <div className="batchimg">
                            <img src={batchImage} alt="Batch" />
                        </div>
                        <p className="result-description-story">
                            <div className="result-name">{userName}</div>
                            {batchDescription}
                        </p>
                        <div className="tag-result">Tag @bootcamp.180 to get featured</div>
                    </div>

                    <div className="result-footer">
                        <div>Know your Worth! It's your turn</div>
                        <div>Visit - www.bootcamp180.com</div>
                        <div>180 DAYS IS ALL IT TAKES TO CHANGE YOUR LIFESTYLE</div>
                    </div>
                </div>

        </div>
    );
};


const UIAnalysis = () => {
    const navigate = useNavigate();
    const [responses, setResponses] = useState(Array(mcqData.length).fill(null));
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [result, setResult] = useState(null);
    const [formVisible, setFormVisible] = useState(false);
    const [currentWorth, setCurrentWorth] = useState(null);
    const [afterWorth, setafterWorth] = useState(null);
    const [kywId, setKYWId] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const [userInfo, setUserInfo] = useState({ name: '', email: '', phone: '', city: '' });
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const [isFormValid, setIsFormValid] = useState(false);
    const [showResultAnalysis, setShowResultAnalysis] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [showShareComponent, setShowShareComponent] = useState(false);
    const [isMCQCompleted, setIsMCQCompleted] = useState(false);
    const [copied, setCopied] = useState(false);


    const handleCopy = () => {
        navigator.clipboard.writeText(kywId) // Copy KYW ID to clipboard
            .then(() => {
                setCopied(true); // Set copied state to true
                setTimeout(() => setCopied(false), 2000); // Clear copied message after 2 seconds
            })
            .catch(err => console.error('Failed to copy text: ', err)); // Handle errors if any
    };

    const handleShareClick = () => {
        setShowShareComponent(true);
    };
    const handleBackFromShare = () => {
        setShowShareComponent(false);
        setShowResults(true); // Navigate back to the results
    };

    const handleEnroll = () => {
        navigate('/slot-booking')
    }

    const handleback = () => {
        setShowResults(true)
    }

    const userBatch = calculateBatch(responses);
    const batchInfo = batchData.find(batch => batch.batch === userBatch);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        handleSubmit(option)

        if (currentQuestion < mcqData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setCurrentQuestion(currentQuestion + 1);
            setIsMCQCompleted(true);
        }
    };

    const handleSubmit = (option) => {
        if (option) {
            const updatedResponses = [...responses];
            updatedResponses[currentQuestion] = option;
            setResponses(updatedResponses);
            setSelectedOption(null);

            if (currentQuestion === mcqData.length - 1) {
                setFormVisible(true);
            } else {
                setCurrentQuestion(currentQuestion + 1);
            }
        }
    };


    const navigateHome = () => {
        navigate('/')
    }




    // const handleFormSubmit = (e) => {
    //     e.preventDefault();
    //     if (isFormValid) {
    //         console.log("Form Submitted!", userInfo);
    //     }

    //     setShowResults(true);
    //     calculateResult(responses);
    //     handleDataSubmit();

    // };


    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (isFormValid) {
            // console.log("Form Submitted!", userInfo);
            handleDataSubmit();
        }
    };

    const handleDataSubmit = async () => {

        const selectedMcqData = responses.map((response, index) => ({
            question: mcqData[index].question,
            selectedOption: response,
        }));



        const data = {
            userInfo,
            mcqData: selectedMcqData,
            currentWorth: currentWorth,
            afterWorth: afterWorth,
            selectedProgram: localStorage.getItem('selectedProgram')

        };

        try {
            // const response = await axios.post('http://localhost:5000/api/submit', data);
            const response = await axios.post(`${BASE_URL}/api/submit`, data);

            // console.log('Data submitted successfully', data);

            setLoading(true);

            setTimeout(() => {
                setLoading(false); // Stop loading after 5 seconds
                setShowResults(true); // Show results after loading
            }, 5000);

            // setShowResults(true);
            calculateResult(responses);
            const kywId = response.data.kywId;
            setKYWId(kywId)

            if (kywId) {
                // console.log('KYW ID:', kywId);
            } else {
                console.error('KYW ID not found in response');
            }

        } catch (error) {
            console.error('Error submitting data:', error);

            if (error.response && error.response.data) {
                if (error.response.data.message === 'Email already exists') {
                    setErrorMessage('You have already completed the quiz. Each participant can only take it once.');
                } else {
                    setErrorMessage('You have already completed the quiz. Each participant can only take it once.');
                }
            } else {
                setErrorMessage('You have already completed the quiz. Each participant can only take it once.');
            }
        }
    };

    localStorage.setItem('userEmail', userInfo.email)

    const calculateResult = (responses) => {
        let totalCtc = 0;

        responses.forEach((response) => {
            if (response) {
                totalCtc += response.value || 0;
            }
        });

        setResult({ ctc: totalCtc });
    };

    useEffect(() => {
        checkFormValidity();
    }, [userInfo, errors]);

    const validateName = (name) => {
        const nameRegex = /^[a-zA-Z\s]+$/; // Only letters and spaces
        return nameRegex.test(name);
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern
        return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^\d+$/; // Only digits
        return phoneRegex.test(phone);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setUserInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value
        }));

        // Validate inputs based on field name
        if (name === "name") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                name: validateName(value) ? "" : "Name should contain only letters."
            }));
        }

        if (name === "email") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: validateEmail(value) ? "" : "Please enter a valid email address."
            }));
        }

        if (name === "phone") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                phone: validatePhone(value) ? "" : "Phone number should contain only digits."
            }));
        }

        // City validation
        if (name === "city") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                city: value !== "" ? "" : "City cannot be empty."
            }));
        }
    };

    const checkFormValidity = () => {
        const isNameValid = validateName(userInfo.name);
        const isEmailValid = validateEmail(userInfo.email);
        const isPhoneValid = validatePhone(userInfo.phone);
        const isCityValid = userInfo.city !== ""; // Check for empty city field

        setIsFormValid(isNameValid && isEmailValid && isPhoneValid && isCityValid);
    };


    function calculateCurrentWorth(responses, userBatch) {


        let learning = 0;

        switch (responses[5]?.label) {
            case "Doing Self Learning":
                learning += 1500;
                break;
            case "Pursuing a Tech Course":
                learning += 2000;
                break;
            case "Working On-Role":
                learning += 2500;
                break;
            case "Working Off-Role":
                learning += 3000;
                break;
            default:
                learning += 0;
                break;
        }


        let experience = 0;

        switch (responses[7]?.label) {
            case "Internship":
                experience += 0;
                break;
            case "0 - 2 Years":
                experience += 500;
                break;
            case "3 - 5 Years":
                experience += 1000;
                break;
            case "5+ Years":
                experience += 1000;
                break;
            default:
                experience += 0;
                break;
        }

        let baseWorth = 0;

        // Calculate base worth based on the salary-related response
        switch (responses[6]?.label) {
            case "Currently not Working":
                baseWorth += 5000;
                break;
            case "Lesser than 1.2 LPA":
                baseWorth += 10000;
                break;
            case "1.2 LPA - 3.6 LPA":
                baseWorth += 17500;
                break;
            case "Greater than 3.6 LPA":
                baseWorth += 37500;
                break;
            default:
                baseWorth += 0;
                break;
        }

        // Batch-based calculation
        let batchAmount = 0;

        switch (userBatch) {
            case 1:
                batchAmount = 1500; //0-4
                break;
            case 2:
                batchAmount = 2000;  //5-7
                break;
            case 3:
                batchAmount = 3000; //8-9
                break;
            case 4:
                batchAmount = 4000;  //10
                break;
            default:
                batchAmount = 0;
                break;
        }

        if (baseWorth === 0) {
            batchAmount *= 1.6;
        } else if (baseWorth < 1.2) {
            batchAmount *= 1.1;
        } else if (baseWorth >= 1.2 && baseWorth <= 3.6) {
            batchAmount *= 1.05;
        } else if (baseWorth > 3.6) {
            batchAmount *= 1;
        }

        batchAmount = Math.round(batchAmount);



        // Calculate LPA and after worth
        const currentLPA = (baseWorth + batchAmount) * 12;
        // const afterLPA = currentLPA * 1.75;

        // Additional worth calculations
        const currentWorth = baseWorth + learning + experience + batchAmount + 69;
        // const baseCostIncr = currentWorth * 1.2;
        const baseCostIncr = currentWorth;

        const afterProgramWorth = currentWorth * 1.34;

        // Calculate LPA for final output
        const LPA = Math.round(baseCostIncr * 12);

        // console.log('currentWorth', currentWorth);
        // console.log('baseWorth', baseWorth);
        // console.log('learning', learning);
        // console.log('experience', experience);
        // console.log('baseCostIncr', baseCostIncr);
        // console.log('afterProgram', afterProgramWorth);

        // Store values in localStorage with descriptive keys
        localStorage.setItem('baseCostIncrease', LPA);
        localStorage.setItem('afterProgramWorth', afterProgramWorth);

        return {
            currentWorth: LPA,
            afterWorth: Math.round(afterProgramWorth * 12),
        };
    }

    // Batch calculation function
    function calculateBatch(responses) {
        let totalPoints = 0;
        for (let i = 0; i < 5; i++) {
            totalPoints += responses[i]?.points || 0;
        }
        if (totalPoints <= 4) return 1;
        if (totalPoints <= 7) return 2;
        if (totalPoints <= 9) return 3;
        return 4;
    }

    // React useEffect to update current worth
    useEffect(() => {
        if (responses) {
            const userBatch = calculateBatch(responses); // Calculate user batch based on responses
            const { currentWorth: worth, afterWorth: after } = calculateCurrentWorth(responses, userBatch);
            setCurrentWorth(worth);
            setafterWorth(after);
        }
    }, [responses]);


    const [showResult, setShowResult] = useState(false);
    const [dots, setDots] = useState("");

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDots((prevDots) => (prevDots.length === 3 ? "" : prevDots + "."));
        }, 500);

        const timeoutId = setTimeout(() => {
            clearInterval(intervalId);
        }, 5000);

        return () => {
            clearInterval(intervalId);
            clearTimeout(timeoutId);
        };
    }, [navigate]);


    useEffect(() => {
        const timer = setTimeout(() => {
            setShowResult(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    // const IncrPer = Math.round(((LPA - baseCostIncr) / baseCostIncr) * 100);

    // {showResultAnalysis && <ResultAnalysing />}


    return (
        <div className="bootcamp-container">
            <header className="header" onClick={navigateHome}>
                <img src={HeaderLogo} alt="Logo" />
            </header>

            <div className="content">
                {loading ? (
                    <div className="loading-container">
                        <img src={Analysing} alt="Loading" />
                        <div className="loading-animation">
                            <div className="analysing">Analysing</div>
                            <div className="dots">
                                <span></span><span></span><span></span>
                            </div>
                        </div>
                    </div>
                ) : showShareComponent ? (
                    <ShareComponent
                        batchImage={batchInfo.image}
                        batchDescription={batchInfo.description}
                        userName={userInfo.name}
                        onBack={handleBackFromShare}


                    />
                ) : (
                    <>
                        {showResults ? (
                            <div>
                                <div className="batch-details">
                                    <img src={batchInfo.image} alt={`Batch ${userBatch}`} />
                                    <div className="result-name">{userInfo.name}</div>
                                    {/* <div className="result-id" onClick={handleCopy} style={{ cursor: 'pointer' }}> {kywId}
                                        <img style={{ marginLeft: '5px' }} src={Design2} alt="ID Image" />
                                        {copied && <span style={{ marginLeft: '5px', color: '#fff', fontSize: '10px' }}>Copied!</span>}
                                    </div> */}
                                    <p className="result-des">{batchInfo.description}</p>
                                    <div className="doodle-result">
                                        <img src={Emoji} alt="Emoji" />
                                        <section>
                                            <blockquote className="speech bubble">
                                                <div style={{ textAlign: 'left', marginLeft: '6px', fontWeight:600 }}>Yay🎉! You’ve got your results, Now...</div>
                                                <div style={{ display: 'flex', gap: '20px' }}>


                                                </div>


                                            </blockquote>
                                        </section>
                                    </div>

                                    <div className="result-page-btn">

                                        <button onClick={handleShareClick} >Share</button>
                                        {currentWorth > 360000 ? (
                                            <>
                                            </>
                                        ) : (
                                            <button onClick={handleEnroll} >Enroll Now</button>

                                        )}

                                    </div>
                                </div>



                                {/* Current and future worth analysis */}
                                <div className="c-worth-div">

                                    <div className="c-worth">
                                        <h4 className="analysis-head">Your Current Worth</h4>
                                        <p className="lpa">₹{currentWorth.toLocaleString()} LPA</p>
                                    </div>
                                    <div className="c-worth">
                                        <h4 className="analysis-head">Your Worth with us</h4>
                                        <p className="lpa">₹{afterWorth.toLocaleString()} LPA*</p>
                                    </div>
                                </div>



                                {/* Post bootcamp worth increase */}
                                <div className="after-program">
                                    <img src={Design3} className="design3" alt="Img" />
                                    <div className="design-content">
                                        Your worth will increase by {Math.round(((afterWorth - currentWorth) / currentWorth) * 100)}% within 6 months by attending bootcamp.
                                    </div>
                                    <img className="img2" src={Design2} alt="Img" />
                                </div>
                                <img className="imgline" src={DesignLine} alt="Img" />

                                <div className="result-des-note">*Note: Your estimated LPA is based on your quiz performance and may vary depending on your actual performance in the workplace</div>

                                <div>
                                    {currentWorth < 360000 ? (
                                        <>
                                        </>
                                    ) : (
                                        <div style={{ marginTop: '10px' }}>
                                            Send us your resume to
                                            <a style={{ color: 'white', marginLeft: '5px' }} href="mailto:support@invicious.in">support@invicious.in</a>
                                        </div>
                                    )}

                                </div>


                            </div>
                        ) : (
                            <>

                                <div className="mcq-section">
                                    {mcqData[currentQuestion] && (
                                        <>
                                            {mcqData[currentQuestion].image && (
                                                <img
                                                    src={mcqData[currentQuestion].image}
                                                    alt={`Question ${currentQuestion + 1} image`}
                                                    className="question-image"
                                                />
                                            )}
                                            <div className="qtn-head">{mcqData[currentQuestion].question}</div>
                                            <div className="opt-btn">
                                                {mcqData[currentQuestion].options.map((option, optionIndex) => (
                                                    <button
                                                        key={optionIndex}
                                                        className={`option-btn ${selectedOption === option ? 'selected' : ''}`}
                                                        onClick={() => handleOptionClick(option)}
                                                    >
                                                        {option.label}
                                                    </button>
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>

                                {isMCQCompleted && (

                                    <>
                                        <div className="form-head">No worries, we won’t spam you!</div>
                                        <form className="user-form" onSubmit={handleFormSubmit}>
                                            <div className="form-row">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={userInfo.name}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                                <label className={userInfo.name ? 'focused' : ''}>Name</label>
                                            </div>
                                            <div className="form-row">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={userInfo.email}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                                <label className={userInfo.email ? 'focused' : ''}>Email</label>
                                            </div>
                                            <div className="form-row">
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={userInfo.phone}
                                                    pattern="[0-9]{10}"
                                                    maxLength={10}
                                                    onChange={handleInputChange}
                                                    onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                                                    required
                                                />
                                                <label className={userInfo.phone ? 'focused' : ''}>Phone</label>
                                            </div>
                                            <div className="form-row">
                                                <input
                                                    type="text"
                                                    name="city"
                                                    value={userInfo.city}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                                <label className={userInfo.city ? 'focused' : ''}>City</label>
                                            </div>



                                            <Button disabled={!isFormValid} label="Submit" type="submit" />


                                        </form>
                                        {errors.email && <div className="error" style={{ marginTop: '20px' }}>{errors.email}</div>}
                                        {errorMessage && <div className="error" style={{ marginTop: '20px' }}>{errorMessage}</div>}
                                    </>
                                )}
                            </>
                        )}
                    </>
                )}
            </div>




            <Footer />
        </div >
    );
};

export default UIAnalysis;
