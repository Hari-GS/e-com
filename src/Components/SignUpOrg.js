import React from 'react'
import { useState } from 'react';
import './SignUpOrgStyles.css'
import axios from 'axios';

function SignUpOrg(props) {
    const [selectedCity, setSelectedCity] = useState(""); // State to track the selected city
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
    };

    const handleClose=()=>{
        props.handleSignUp()
    }

    const handleLogin=()=>{
        props.handleOpenLogin()
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Assuming you have an API endpoint for registration
            const response = await axios.post('http://localhost:8080/signup', {
                username: username,
                password: password,
                city: selectedCity
            });

            // Do something with the response if needed

            // Close the sign-up form
            props.handleSignUp();
        } catch (error) {
            // Handle error, show a message, etc.
            console.error('Error during registration:', error);
        }
    };

    return (
        <div className='login-container'>
        <div className='top-heading'>
            <h2>SignUp</h2>
            <button onClick={handleClose}>Close</button> 
        </div>
       
    <form onSubmit={handleSubmit}>
        <div>
            <input type="text" name="username" placeholder="Username" value={username} onChange={handleUsernameChange} required/>
        </div>
        <div>
            <input type="password" name="password" placeholder="Password" value={password} onChange={handlePasswordChange} required/>
        </div>
        <div className="dropdown">
        <label htmlFor="city">Select Your City:</label>
                    <select id="city" name="city" value={selectedCity} onChange={handleCityChange} required>
                        <option value="">Select a city</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Coimbatore">Coimbatore</option>
                        <option value="Kanyakumari">Kanyakumari</option>
                    </select>
        </div>
        <div className='login-btn-container'>
            {/* <input type="submit" value="Login"/> */}
            <button className='login-btn' type='submit'>Sign Up</button>
        </div>
    </form>
    <div className='no-account'>
            <p>Already have an account? <button onClick={handleLogin}>Login</button></p>
        </div>
            

    </div>
    )
}

export default SignUpOrg
