import React, { useState, useEffect } from "react";
import HeaderLogo from '../assests/Header-logo.svg';
import Button from "../Button/button";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Footer from "../home/footer";
import { BASE_URL } from "../../Utils/ApplicationURL";

const CalenderUI = () => {
    const navigate = useNavigate();
    const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const daysInMonth = new Array(30).fill(null).map((_, i) => i + 1); // September has 30 days
    const firstDayOffset = 7; // September 1, 2024 starts on a Wednesday

    const [selectedDay, setSelectedDay] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [bookedTimes, setBookedTimes] = useState([]);
    const [userBookedSlots, setUserBookedSlots] = useState([]); // State for user booked slots
    const [errorMessage, setErrorMessage] = useState(""); // State for error message

    // Time slots available for booking
    const timeSlots = [
        '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
        '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM',
        '04:30 PM', '05:00 PM', '05:30 PM'
    ];

    // Get the current date
    const today = new Date();
    const currentMonth = 8; // September is month 8 (0-indexed)
    const currentDate = today.getMonth() === currentMonth ? today.getDate() : null;

    
    const currentHour = today.getHours();
    const currentMinute = today.getMinutes();

    // Fetch booked slots for the user when the component mounts
    useEffect(() => {
        const fetchBookedSlots = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/booked-slots/digital-marketing`);
                const bookedSlots = response.data; // Array of objects with date and time

                // Update state with booked slots
                setUserBookedSlots(bookedSlots);
            } catch (error) {
                console.error('Error fetching booked slots:', error);
                setErrorMessage('Error fetching booked slots');
            }
        };

        fetchBookedSlots();
    }, []);

    const isTimeSlotDisabled = (time) => {
        if (!selectedDay) return false; // Don't disable time slots if no day is selected

        const [hour, minutePart] = time.split(':');
        const [minute, period] = minutePart.split(' ');

        let hourNumber = parseInt(hour);
        if (period === 'PM' && hourNumber !== 12) {
            hourNumber += 12; // Convert PM to 24-hour format
        }
        if (period === 'AM' && hourNumber === 12) {
            hourNumber = 0; // Convert 12 AM to 0 hours
        }

        // Disable if the selected day is today and the time is earlier than the current time
        return selectedDay === currentDate && (hourNumber < currentHour || (hourNumber === currentHour && parseInt(minute) < currentMinute));
    };

    // Function to check if the selected time slot is available
    const isTimeSlotAvailable = (selectedDay, selectedTime) => {
        return !userBookedSlots.some(slot => slot.date === selectedDay && slot.time === selectedTime);
    };




    const handleBook = async () => {
        if (!selectedDay || !selectedTime) {

            setErrorMessage('Please select both a day and a time to book.');
            return;
        }

        const bookedToday = userBookedSlots.filter(slot => slot.date === `${selectedDay}/09/2024`);

        if (isTimeSlotAvailable(selectedDay, selectedTime)) {

            // Save selected date and time to localStorage
            localStorage.setItem('selectedDay', `${selectedDay}/09/2024`);
            localStorage.setItem('selectedTime', selectedTime);

            // Update state to reflect the booked times
            setBookedTimes((prev) => [...prev, selectedTime]);

            // Navigate to the checkout page
            navigate('/checkout');
        } else {
            // console.error('Error booking slot:', error);
            setErrorMessage('An error occurred while booking the slot. Please try again.');
        }
    };


    const handleDayClick = (day) => {
        if (day >= currentDate || currentDate === null) {
            setSelectedDay(day);
            setSelectedTime(null); // Reset time selection when a new day is clicked
            setErrorMessage(""); // Reset error message
        }
    };

    const handleTimeSelect = (time) => {
        setSelectedTime(time);
        setErrorMessage(""); // Reset error message on time selection
    };

    return (
        <div className="bootcamp-container">
            <header className="header">
                <img src={HeaderLogo} alt="Logo" />
            </header>
            <div className="content" >

                <div id="calender-content">
                    <div className="calender-head">
                        Pick a convenient time to meet us at our office in Coimbatore!
                    </div>

                    {/* Error Message */}
                    {errorMessage && <div style={{ marginTop: '10px' }} className="error">{errorMessage}</div>}

                    {/* Hide calendar if a day is selected */}
                    {!selectedDay && (
                        <>
                            <div className="sept">September 2024</div>

                            <div className="calendar-container">
                                <div className="days-of-week">
                                    {daysOfWeek.map((day) => (
                                        <div key={day} className="weekday">
                                            {day}
                                        </div>
                                    ))}
                                </div>

                                <div className="days-grid">
                                    {new Array(firstDayOffset).fill(null).map((_, i) => (
                                        <div key={i} className="empty-day"></div>
                                    ))}

                                    {daysInMonth.map((day) => {
                                        const isDisabledDate = [15, 22, 29].includes(day);

                                        return (
                                            <div
                                                key={day}
                                                className={`day ${day < currentDate ? 'disabled-day' : ''} ${isDisabledDate ? 'disabled-day' : ''} ${day === currentDate ? 'current-day' : ''}`}
                                                onClick={() => !isDisabledDate && handleDayClick(day)} // Disable click on specific dates
                                            >
                                                {day}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </>
                    )}

                    {/* Show time slots if a day is selected */}
                    {selectedDay && (
                        <>
                            <div className="sept-time">Select Time - IST - September {selectedDay}</div>

                            <div className="time-selection">
                                <div className="time-slots">
                                    {timeSlots.map((time) => {
                                        const isBooked = userBookedSlots.some(slot => slot.date === `${selectedDay}/09/2024` && slot.time === time);
                                        const isDisabled = isBooked || isTimeSlotDisabled(time);

                                        return (
                                            <button
                                                key={time}
                                                className={`time-slot ${selectedTime === time ? 'selected-time' : ''} ${isDisabled ? 'disabled-time' : ''}`} // Disable booked time slots
                                                onClick={() => !isDisabled && handleTimeSelect(time)} // Prevent selecting booked times
                                                disabled={isDisabled} // Disable button if booked
                                            >
                                                {time}
                                            </button>
                                        );
                                    })}
                                </div>

                                {/* Show the "Book Now" button only after a time is selected */}
                                {selectedTime && (
                                    <div className="book-now-btn">
                                        <Button label="Book Now" onClick={handleBook} />
                                    </div>
                                )}
                            </div>
                        </>
                    )}

                </div>
            </div>

            <Footer />
        </div>
    );
};

export default CalenderUI;
