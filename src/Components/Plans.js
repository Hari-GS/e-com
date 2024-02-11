import React from 'react'
import axios from 'axios';
import { useEffect , useState } from 'react';
import './PlansStyles.css'
import { Link } from 'react-router-dom';


function Plans() {

    const [busDetails, setBusDetails] = useState([]);

    useEffect(() => {
        axios.get('https://tanjore-tour-api.onrender.com/plans')
            .then(response => setBusDetails(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (        
            <div className="background-container details-container">
            {busDetails.map(bus => (
                <div key={bus.id} className="card">
                    <div className="bus-details">
                        <div className="left">
                            <h3>Bus Number    :</h3>
                            <p>Number of Days :</p>
                            <p>Available Seats:</p>
                            <p>Departure date :</p>
                            <p>Location       :</p>
                        </div>
                        <div className="right">
                            <h3>{bus.busNumber}</h3>
                            <p>{bus.numberOfDays}</p>
                            <p>{bus.availableSeats}</p>
                            <p>{bus.date}</p>
                            <p>{bus.location}</p>
                        </div>
                    </div>
                    <div className="b-btn">
                    <Link to={`/book/${bus.busNumber}`}>
                        <button>To book</button>
                    </Link>
                    </div>
                    
                </div>
            ))}
            </div>

    )
}

export default Plans
