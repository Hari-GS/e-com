import React, { useEffect, useState } from 'react';
import './ToBookStyles.css';
import axios from 'axios';
import { useParams} from 'react-router-dom';
import BookedDetails from './BookedDetails';

function ToBook() {
    const [bus, setBus] = useState({});
    const { busNumber } = useParams();
    const [numberOfSeats, setNumberOfSeats] = useState(1);
    const [updatedBus, setUpdatedBus] = useState(null); // New state for updated bus data
    const [buttonText, setButtonText] = useState('Book');
    const [btnClr, setbtnClr] = useState(false)
    const [bookingInProgress, setBookingInProgress] = useState(false);
    const [bookingDetails, setBookingDetails]=useState(false)
      
    
        const increment = () => {
          if (numberOfSeats < 80) {
            setNumberOfSeats(prevCount => prevCount + 1);
          }
        };
      
        const decrement = () => {
          if (numberOfSeats > 1) {
            setNumberOfSeats(prevCount => prevCount - 1);
          }
        };

        const bookSeats = async () => {

            if (bookingInProgress) {
                // If booking is already in progress, do nothing
                return;
            }

            try {
                setBookingInProgress(true);
                const response = await axios.post(`http://localhost:8080/to-book/${localStorage.userName}`, {
                    userName: localStorage.getItem('userName'),
                    userId: localStorage.getItem('userId'),
                    busNumber: bus.busNumber,
                    bookedSeats: numberOfSeats,
                    date: bus.date,
                    location: bus.location,
                  });

                if (response.status === 200) {
                    console.log("Booking details stored successfully");
                
                } else {
                    console.log(`Unexpected status code: ${response.status}`);
                }

                // Fetch the updated bus data after booking
            const updatedResponse = await axios.get(`http://localhost:8080/plan/${busNumber}`);
            setUpdatedBus(updatedResponse.data);
            setButtonText('Booked !');
            setbtnClr('true')
            setBookingDetails(!bookingDetails)
            
            } catch (error) {
                if (error.response.status === 409) {
                    console.log("Booking details for the user already exist");
                }
            }
          };

          useEffect(() => {
            // Update the bus state when updatedBus changes
            if (updatedBus) {
                setBus(updatedBus);
            }
        }, [updatedBus]);
    
        

    useEffect(() => {
        // Make an API call to fetch bus data when the component mounts
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/plan/${busNumber}`); // Replace with your backend endpoint
                setBus(response.data); // Assuming the response contains the bus data
            } catch (error) {
                console.error('Error fetching bus data:', error);
            }
        };

        fetchData();
    }, [busNumber]); // Empty dependency array ensures the effect runs only once (on mount)

    return (
        <div className="big-container">
            <div className="first-half">
            <div className="to-book-container">
           
            <div className="s-left">
                <h3 className="bus-num">Bus Number :</h3>
                <p>Number of Days :</p>
                <p>Available Seats :</p>
                <p>Departure date :</p>
                <p>Location :</p>
            </div>
            <div className="s-right">
                <h3 className="bus-num">{bus.busNumber}</h3>
                <p>{bus.numberOfDays}</p>
                <p>{bus.availableSeats}</p>
                <p>{bus.date}</p>
                <p>{bus.location}</p>
            </div>
            </div>
            <div className="counter-container">
                <div className="counter-set">
                <label>Number of Seats:</label>
                <button className="as-click" onClick={decrement}>-</button>
                <span>{numberOfSeats}</span>
                <button className="as-click" onClick={increment}>+</button>
                </div>
                <br />
                <button className={btnClr?"bk-btn-active":"bk-btn" }onClick={bookSeats} disabled={bookingInProgress}>{buttonText}</button>
            </div>

            </div>
           
            <div className={bookingDetails?"second-half":"invisible"}>
                {bookingDetails && <BookedDetails />}
            </div>
        </div>
        
    );
}

export default ToBook;
