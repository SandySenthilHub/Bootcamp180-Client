import React, { useEffect, useState } from "react";
import '../home/home.css';
import HeaderLogo from '../assests/Header-logo.svg';
import Design3 from '../assests/Design-3.svg';
import Design2 from '../assests/Design-2.svg';
import DesignLine from '../assests/Design-line.svg';
import Button from "../Button/button";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { BASE_URL } from "../../Utils/ApplicationURL";

const mcqData = [
  {
    question: "Are you currently?",
    options: [
      { label: "Pursuing Graduation" },
      { label: "Working in the IT Sector" },
      { label: "Working in Core [Non - IT]" },
      { label: "Seeking for Job" }
    ]
  },
  {
    question: "You think you are best skilled in?",
    options: [
      { label: "Design & Creation" },
      { label: "Programming & Development" },
      { label: "Marketing & Strategy" },
      { label: "Hybrid Exposure [2 or more]" }
    ]
  },
  {
    question: "Your total professional experience in your skill?",
    options: [
      { label: "Internship", value: 0 },
      { label: "2 - 5 Years", value: 3000 },
      { label: "0 - 2 Years", value: 1500 },
      { label: "5+ Years", value: 5000 }
    ]
  },
  {
    question: "Your current package falls at?",
    options: [
      { label: "Lesser than 1.2 LPA", value: 7000 },
      { label: "3.6 LPA - 7.2 LPA", value: 38000 },
      { label: "1.2 LPA - 3.6 LPA", value: 18000 },
      { label: "Greater than 7.2 LPA", value: 50000 }
    ]
  },
  {
    question: "Your highest educational qualification is?",
    options: [
      { label: "High School Graduate" },
      { label: "Diploma Graduate" },
      { label: "Under Graduate" },
      { label: "Post Graduate" }
    ]
  },
  {
    question: "You acquired your core skill-set while?",
    options: [
      { label: "Doing Self Learning", value: 1500 },
      { label: "Pursuing a Tech Course", value: 2000 },
      { label: "Working On-Role", value: 2500 },
      { label: "Working Off-Role", value: 3000 }
    ]
  },
  {
    question: "How many hours do you spend working?",
    options: [
      { label: "Lesser than 5 hours a day", value: 300 },
      { label: "5 - 8 hours a day", value: 600 },
      { label: "8 - 10 hours a day", value: 900 },
      { label: "Greater than 10 hours a day", value: 1200 }
    ]
  },
  {
    question: "Your current work domain?",
    options: [
      { label: "Design", value: 1000 },
      { label: "Development", value: 1000 },
      { label: "Marketing", value: 500 },
      { label: "Non - IT Role or Other", value: 0 }
    ]
  }
];

const Survey = () => {
  const navigate = useNavigate();
  const [responses, setResponses] = useState(Array(mcqData.length).fill(null));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [result, setResult] = useState(null);
  const [formVisible, setFormVisible] = useState(false);
  const [currentWorth, setCurrentWorth] = useState(null);
  const [afterWorth, setafterWorth] = useState(null);

  const [userInfo, setUserInfo] = useState({ name: '', email: '', phone: '', city: '' });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const [isFormValid, setIsFormValid] = useState(false);



  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };



  const handleSubmit = () => {
    if (selectedOption) {
      const updatedResponses = [...responses];
      updatedResponses[currentQuestion] = selectedOption;
      setResponses(updatedResponses);
      setSelectedOption(null);

      if (currentQuestion === mcqData.length - 1) {
        setFormVisible(true);
      } else {
        setCurrentQuestion(currentQuestion + 1);
      }
    }
  };

  const navigateHome = () =>{
    navigate('/')
  }


  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      console.log("Form Submitted!", userInfo);
    }
    calculateResult(responses);
    handleDataSubmit();

  };

  const handleDataSubmit = async () => {

    const selectedMcqData = responses.map((response, index) => ({
      question: mcqData[index].question, 
      selectedOption: response, 
    }));

    const afterWorthCTC = localStorage.getItem('afterProgram')

  
    const data = {
      userInfo,
      mcqData: selectedMcqData, 
      currentWorth,
      afterWorth:afterWorthCTC

    };

    try {
      // await axios.post('http://localhost:5000/api/submit', data);
      await axios.post(`${BASE_URL}/api/submit`, data);

      console.error('Data submitted successfully', data);

    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  localStorage.setItem('userEmail',userInfo.email)

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

  function calculateCurrentWorth(responses) {
    let baseWorth = 0;

    // Determine base worth from current package
    switch (responses[3]?.label) {
      case "Lesser than 1.2 LPA":
        baseWorth += 7000;
        break;
      case "1.2 LPA - 3.6 LPA":
        baseWorth += 18000;
        break;
      case "3.6 LPA - 7.2 LPA":
        baseWorth += 38000;
        break;
      case "Greater than 7.2 LPA":
        baseWorth += 50000;
        break;
      default:
        break;
    }

    // Calculate experience value
    let experienceValue = 0;
    switch (responses[2]?.label) {
      case "Internship":
        experienceValue += 0;
        break;
      case "0 - 2 Years":
        experienceValue += 1500;
        break;
      case "2 - 5 Years":
        experienceValue += 3000;
        break;
      case "5+ Years":
        experienceValue += 5000;
        break;
      default:
        break;
    }

    // Adjust experience value based on current package
    switch (responses[3]?.label) {
      case "Lesser than 1.2 LPA":
      case "1.2 LPA - 3.6 LPA":
        break;
      case "3.6 LPA - 7.2 LPA":
        experienceValue *= 2.5;
        break;
      case "Greater than 7.2 LPA":
        experienceValue *= 5;
        break;
    }

    // Calculate hours spent value
    let hoursValue = 0;
    switch (responses[6]?.label) {
      case "Lesser than 5 hours a day":
        hoursValue += 300;
        break;
      case "5 - 8 hours a day":
        hoursValue += 600;
        break;
      case "8 - 10 hours a day":
        hoursValue += 900;
        break;
      case "Greater than 10 hours a day":
        hoursValue += 1200;
        break;
    }

    // Adjust hours value based on current package
    switch (responses[3]?.label) {
      case "Lesser than 1.2 LPA":
        break;
      case "1.2 LPA - 3.6 LPA":
        hoursValue *= 2;
        break;
      case "3.6 LPA - 7.2 LPA":
        hoursValue *= 3;
        break;
      case "Greater than 7.2 LPA":
        hoursValue *= 4;
        break;
    }

    // Calculate work domain value
    let domainValue = 0;
    switch (responses[7]?.label) {
      case "Design":
        domainValue += 1000;
        break;
      case "Development":
        domainValue += 1000;
        break;
      case "Marketing":
        domainValue += 500;
        break;
      case "Non - IT Role or Other":
        domainValue += 0;
        break;
    }

    // Calculate learning value based on core skill-set acquisition
    let learningValue = 0;
    switch (responses[5]?.label) {
      case "Doing Self Learning":
        learningValue += 1500;
        break;
      case "Pursuing a Tech Course":
        learningValue += 2000;
        break;
      case "Working On-Role":
        learningValue += 2500;
        break;
      case "Working Off-Role":
        learningValue += 3000;
        break;
      default:
        break;
    }





    const currentWorth = (baseWorth + experienceValue + hoursValue + domainValue + learningValue + 69);

    const baseCostIncr = currentWorth * 1.2;
    const afterProgram = currentWorth * 1.75;


    const LPA = Math.round(baseCostIncr * 12)



    console.log('currentWorth', currentWorth);
    console.log('baseWorth', baseWorth);
    console.log('experienceValue', experienceValue);
    console.log('hoursValue', hoursValue);
    console.log('domainValue', domainValue);
    console.log('learningValue', learningValue);

    console.log('baseCostIncr', baseCostIncr);
    console.log('afterProgram', afterProgram);

    localStorage.setItem('baseCostIncr', LPA)
    localStorage.setItem('afterProgram', afterProgram)

    return LPA;
  }

  useEffect(() => {
    if (responses) {
      const LPA = calculateCurrentWorth(responses).toLocaleString();
      setCurrentWorth(LPA);
    }
  }, [responses]);



  let workingHoursValue = '';
  switch (responses[6]?.label) {
    case "Lesser than 5 hours a day":
      workingHoursValue = 'Sorry! You got to start moving yourself a Bit!';
      break;
    case "5 - 8 hours a day":
      workingHoursValue = 'Oops! your got to work a bit harder than what you already are doing';
      break;
    case "8 - 10 hours a day":
      workingHoursValue = 'Seems like your give back the right value, but you can become more liberal with  the right skillset and in the right workplace';
      break;
    case "Greater than 10 hours a day":
      workingHoursValue = 'Seems like your working really hard. But have you woundered if you are doing it at the right place.  ';
      break;
  }

  return (
    <div className="bootcamp-container">
      <header className="header" onClick={navigateHome}>
        <img src={HeaderLogo} alt="Logo" />
      </header>

      <div className="content">
        {formVisible ? (
          <>
            {result ? (
              <div>
                <h4 className="analysis-head">Your Current Worth</h4>
                <p className="lpa">₹ {calculateCurrentWorth(responses).toLocaleString()} LPA</p>
                <div className="analysis-content"> <span>Hey {userInfo.name} </span>
                  <br />
                  {workingHoursValue}
                  <br /> <a href="">Get into the trend share on social media</a>
                </div>
                <div className="after-program">
                  <img src={Design3} className="design3" alt="Img" />
                  <div className="design-content">Want to know what your CTC will be with us after the bootcamp.180?</div>
                  <img className="img2" src={Design2} alt="Img" />
                </div>
                <img className="imgline" src={DesignLine} alt="Img" />

                <Button label="Check now" onClick={() => navigate('/enroll')} />
              </div>
            ) : (
              <>
                <div className="form-head">No worries, we won’t spam you!</div>

                <form className="user-form">
                  <div className="form-row">
                    <input
                      type="text"
                      name="name"
                      value={userInfo.name}
                      onChange={handleInputChange}
                      required
                    />
                    <label className={userInfo.name ? 'focused' : ''}>
                      Name
                    </label>
                    {/* {errors.name && <span className="error">{errors.name}</span>} */}

                  </div>

                  <div className="form-row">
                    <input
                      type="email"
                      name="email"
                      value={userInfo.email}
                      onChange={handleInputChange}
                      required
                    />
                    <label className={userInfo.email ? 'focused' : ''}>
                      Email
                    </label>

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
                    <label className={userInfo.phone ? 'focused' : ''}>
                      Phone
                    </label>
                    {/* {errors.phone && <span className="error">{errors.phone}</span>} */}

                  </div>

                  <div className="form-row">
                    <input
                      type="text"
                      name="city"
                      value={userInfo.city}
                      onChange={handleInputChange}
                      required
                    />
                    <label className={userInfo.city ? 'focused' : ''}>
                      City
                    </label>
                  </div>
                </form>
                {errors.email && <span className="error">{errors.email}</span>}

                <Button disabled={!isFormValid} label="Next" type="submit" onClick={handleFormSubmit} />

              </>
            )}
          </>
        ) : (
          <>
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

            <Button label="Next" onClick={handleSubmit} />
          </>
        )}
      </div>

      <footer className="footer">
        <a href="">@bootcamp.180</a>
      </footer>
    </div>
  );
};

export default Survey;
