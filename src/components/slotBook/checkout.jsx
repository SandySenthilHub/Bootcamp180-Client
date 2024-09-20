import React, { useEffect, useState } from "react";
import HeaderLogo from '../assests/Header-logo.svg';
import Button from "../Button/button";
import { useNavigate } from "react-router-dom";
import Footer from "../home/footer";
import axios from "axios";
import { BASE_URL } from "../../Utils/ApplicationURL";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Checkout = () => {



    const [selectedProgram, setSelectedProgram] = useState("");
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const programFee = 50000; 
    const gstRate = 0.18; 

    const calculateInitialPayment = () => {
        if (selectedProgram === "2500") {
            // return 2119;
            return 2;

        } else if (selectedProgram === "10") {
            // return 4237;
            return 3;


        }
        return 0;
    };

    const calculateGST = (initialPayment) => {
        return Math.round(initialPayment * gstRate);
    };

    const calculateTotalAmount = (initialPayment) => {
        return initialPayment + calculateGST(initialPayment);
    };

    const navigate = useNavigate();

    const handleProgramSelect = (program) => {
        setSelectedProgram(program);
    };



    const handleDetails = () => {
        navigate('/program-details')
    }

    const handlestart = () => {
        navigate('/')
    }

    // const handleBooked = async () => {
    //     const kywId = localStorage.getItem('kywId');
    //     const email = localStorage.getItem('userEmail');
    //     const selectedDay = localStorage.getItem('selectedDay');
    //     const selectedTime = localStorage.getItem('selectedTime');

    //     if (!kywId) {
    //         console.log("KYW ID is not available!");
    //         return;
    //     }

    //     if (!selectedDay || !selectedTime) {
    //         console.log("Date and time are not available!");
    //         return;
    //     }

    //     try {

    //         const dateTimeData = {
    //             email,
    //             date: selectedDay,
    //             time: selectedTime,
    //         };

    //         const dateTimeResponse = await axios.post(`${BASE_URL}/api/add-date-time`, dateTimeData);

    //         if (dateTimeResponse) {
    //             const paymentResponse = await axios.post(`${BASE_URL}/api/submit-payment`, {
    //                 kywId: kywId,
    //                 payment: true,
    //             });

    //             if (paymentResponse.data.success) {
    //                 setIsPopupOpen(false);
    //                 navigate('/slot-booked');
    //             } else {
    //                 alert('Payment verification failed.');
    //             }
    //         } else {
    //             alert('Payment verification failed.');

    //         }


    //     } catch (error) {
    //         console.error("Error during booking or payment:", error);
    //     }
    // };


    // const handleBooked = async () => {
        
    //     const kywId = localStorage.getItem('kywId');
    //     const email = localStorage.getItem('userEmail');
    //     const selectedDay = localStorage.getItem('selectedDay');
    //     const selectedTime = localStorage.getItem('selectedTime');
    
    //     if (!kywId || !selectedDay || !selectedTime) {
    //         console.log("Missing data!");
            
    //         return;
    //     }
    
    //     try {
    //         const dateTimeData = { email, date: selectedDay, time: selectedTime };
    //         await axios.post(`${BASE_URL}/api/add-date-time`, dateTimeData);
            
    //         setIsPopupOpen(false);
    //         navigate('/slot-booked');
    //     } catch (error) {
    //         console.error("Error during booking:", error);
    //     } 
    // };
    



    const closePopup = () => {
        setIsPopupOpen(false);
    };

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const initialPayment = calculateInitialPayment();
    const gst = calculateGST(initialPayment);
    const totalAmount = calculateTotalAmount(initialPayment);

    // const key_id = 'rzp_test_j7Wb0YSkE5ieKp'
    const key_id = process.env.REACT_APP_API_KEY


    // const initPayment = (data) => {
    //     const options = {
    //         key: key_id,
    //         amount: data.amount,
    //         currency: data.currency,
    //         description: "Test Transaction",
    //         order_id: data.id,
    //         handler: async (response) => {
    //             try {
    //                 const verifyUrl = `${BASE_URL}/api/payment/verify`;
    //                 const { data } = await axios.post(verifyUrl, response);
    //                 // console.log(data);
    //             } catch (error) {
    //                 console.log(error);
    //             }
    //         }
    //     };
    //     const rzp1 = new window.Razorpay(options);
    //     rzp1.open();
    // };

    // const handlePayment = async () => {
    //     try {
    //         const orderUrl = `${BASE_URL}/api/payment/orders`;
    //         const { data } = await axios.post(orderUrl, { amount: totalAmount });
    //         // console.log(data);
    //         initPayment(data.data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };


    const initPayment = (data) => {
        const options = {
            key: key_id,
            amount: data.amount,
            currency: data.currency,
            description: "Test Transaction",
            order_id: data.id,
            handler: async (response) => {
                try {
                    const verifyUrl = `${BASE_URL}/api/payment/verify`;
                    const { data: verificationData } = await axios.post(verifyUrl, response);
    
                    if (verificationData.success) {
                        const kywId = localStorage.getItem('kywId');
                        const email = localStorage.getItem('userEmail');
                        const selectedDay = localStorage.getItem('selectedDay');
                        const selectedTime = localStorage.getItem('selectedTime');
                        const paymentmethod = selectedProgram
                        const amount = data.amount
    
                        if (!kywId || !selectedDay || !selectedTime) {
                            console.log("Missing data!");
                            return;
                        }
    
                        const dateTimeData = { email, date: selectedDay, time: selectedTime, paymentmethod , amount};
                        await axios.post(`${BASE_URL}/api/add-date-time`, dateTimeData);
    
                        setIsPopupOpen(false);
                        navigate('/slot-booked');
                    } else {
                        toast.error("Payment failed. Please try again.");
                    }
                } catch (error) {
                    console.log(error);
                    toast.error("Payment failed. Please try again.");
                }
            },
            theme: {
                color: "#3399cc"
            },
            modal: {
                ondismiss: () => {
                    toast.error("Payment failed. Please try again.");
                }
            }
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    };
    
    const handlePayment = async () => {
        try {
            const orderUrl = `${BASE_URL}/api/payment/orders`;
            const { data } = await axios.post(orderUrl, { amount: totalAmount });
            initPayment(data.data);
        } catch (error) {
            console.log(error);
            toast.error("An error occurred while initiating the payment.");
        }
    };
    

    const handleProceedToPay = () => {
        // setIsPopupOpen(true);
        handlePayment()
    };


    useEffect(() => {
        const kywId = localStorage.getItem('kywId');
        const userEmail = localStorage.getItem('userEmail');
        const selectedDay = localStorage.getItem('selectedDay');
        const selectedTime = localStorage.getItem('selectedTime');

        if (!kywId || !userEmail || !selectedDay || !selectedTime) {
            navigate('/slot-booking');
        }
    }, [navigate]);


    return (

        <>
            <div className={`bootcamp-container ${isPopupOpen ? 'blur-background' : ''}`}>
                <header className="header" onClick={handlestart}>
                    <img src={HeaderLogo} alt="Logo" />
                </header>
                <div className="content">

                    <div className="checkout">

                        <div className="checkout-con1">
                            <div className="checkout-head">
                                Which method do you opt for
                            </div>

                            <div className="opt-btn" id="checkout-opt-btn">
                                <button
                                    className={`option-btn ${selectedProgram === "2500" ? 'selected' : ''}`}
                                    onClick={() => handleProgramSelect("2500")}
                                >
                                    Pay ₹2500 Now and Rest while visiting
                                </button>

                                <button
                                    className={`option-btn ${selectedProgram === "10" ? 'selected' : ''}`}
                                    onClick={() => handleProgramSelect("10")}
                                >
                                    Pay 10% Now and Rest while visiting
                                </button>
                            </div>

                            <div className="checkout-note">Note: Amount paid is non-refundable. Please double-check all the <a href="" onClick={handleDetails}>details</a> before proceeding.</div>
                        </div>


                        <div className="endline" id="checkout-endline" />
                        <div className="checkout-con2">

                            <div className="checkout-sum">
                                <div className="CSD1">Checkout Summary</div>
                                <div className="CSD2">
                                    <div>Overall Program Fee</div>
                                    <div>₹ {programFee.toLocaleString()}</div>
                                </div>
                                <div className="endline" />
                                <div className="CSD3">
                                    <div>Initial Payment</div>
                                    <div>₹ {initialPayment.toLocaleString()}</div>
                                </div>
                                <div className="CSD4">
                                    <div style={{ width: '100%', textAlign: 'left' }}>Tax / GST (18%)</div>
                                    <div style={{ width: '100%', textAlign: 'right' }}>₹ {gst.toLocaleString()}</div>
                                </div>
                                <div className="endline" />
                                <div className="CSD5">
                                    <div style={{ width: '100%', textAlign: 'left' }}>Total Amount</div>
                                    <div style={{ width: '100%', textAlign: 'right' }}>₹ {totalAmount.toLocaleString()}</div>
                                </div>
                            </div>

                            <div className="checkout-footer" id="t7c-note">
                                By clicking, I agree with the
                                <a href="" onClick={() => navigate('/refund-policy')}> Refund Policy</a>
                                &
                                <a href="" onClick={() => navigate('/t&c')}> Terms & Conditions </a>
                            </div>

                        </div>

                    </div>
                    <Button label='Proceed to pay' disabled={!selectedProgram} onClick={handleProceedToPay} />
                </div>

                <ToastContainer />



                <Footer />
            </div>
            {isPopupOpen && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <div className="popup-head">
                            <div>Important Notice</div>
                            <button onClick={closePopup}>X</button>
                        </div>

                        <div className="popup-text">
                            <div>We’re currently not accepting online payments. Don’t worry, your slot is reserved!</div>
                            <div>Please make your payment directly at our office when you visit.</div>
                            <div>Thank you for your understanding and patience!</div>

                        </div>

                        <Button label="Proceed"
                        //  onClick={handleBooked} 
                         />

                    </div>
                </div>
            )}
        </>

    );
};

export default Checkout;
