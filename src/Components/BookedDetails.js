import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import './BookedDetailsStyles.css'

function BookedDetails() {
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchUserDetails = async () => {
          try {
            console.log("helo")
            const response = await axios.get(`https://tanjore-tour-api.onrender.com/${localStorage.getItem('userId')}/booked`); // Replace with your actual API endpoint
            setUser(response.data);
          
            
          } catch (error) {
            console.error('Error fetching user details:', error);
          }
        };
    
        fetchUserDetails();
      }, []);
    
    return (
        <div className="bd-cont">
             <h2>Booked! Your booking details : </h2>
             <p>User Name:{user.userName} </p>
             <p>User Id: {user.userId}</p>
             <p>Bus Number: {user.busNumber}</p>
             <p>Booked seats: {user.bookedSeats}</p>
             <p>Departure date: {user.date}</p>
             <p>Location : {user.location}</p>
        </div>
    )
}

export default BookedDetails
