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
      
      <div className="cont123">
      <div className="inside-cont1">
        <p>User Name:</p>
        <p>User Id:</p>
        <p>Bus Number:</p>
        <p>Booked seats:</p>
        <p>Departure date:</p>
        <p>Location:</p>
      </div>
      
      <div className="inside-cont2">
        <p>{user.userName} </p>
        <p>{user.userId}</p>
        <p>{user.busNumber}</p>
        <p>{user.bookedSeats}</p>
        <p>{user.date}</p>
        <p>{user.location}</p>
      </div>
      </div>
      
 </div>
    )
}

export default BookedDetails
