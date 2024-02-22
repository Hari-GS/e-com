import './SignUpStyles.css'
import { useState } from 'react'
import SignUpOrg from './SignUpOrg'
import axios from 'axios';

function SignUp(props){
   
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showWarning, setShowWarning] = useState(false);
    const { loggedIn, onLoginSuccess } = props;
    const [typedUsername, setTypedUsername] = useState('')
    const { giveUserName } = props;
   

    const handleUsernameChange = (e) => {
        const newUsername = e.target.value;
        setUsername( newUsername);
        giveUserName( newUsername);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            // Assuming you have an API endpoint for login
            const response = await axios.post('https://tanjore-tour-api.onrender.com/login', {
                username: username,
                password: password
            });

            // Check the response from the server, you might get a token or some other data

            // Close the login form or perform other actions based on the response
            // For example, you might redirect the user to a dashboard page
            const responseData=response.data
            const userIdFromResponse = parseInt(responseData.split('User ID: ')[1])
            const usernameFromResponse = responseData.split('for user: ')[1].split('.')[0];
        
            props.handlePopupClick();
            console.log(usernameFromResponse)
            onLoginSuccess(usernameFromResponse,userIdFromResponse);
        } catch (error) {
            // Handle error, show a message, etc.
            console.error('Error during login:', error);
            setShowWarning(true);
        }
    };


    const handleClick=(e)=>{
        e.preventDefault()
        props.handleSignUp()
    }

    const handleClose = () => {
        props.handlePopupClick()
    }
    

    return (
        <div className='login-container'>
            <div className='top-heading'>
                <h2>Login</h2>
                <button onClick={handleClose}>Close</button> 
            </div>
           
        <form onSubmit={handleLogin}>
            <div>
                <input type="text" name="username" placeholder="Username"  value={username} onChange={handleUsernameChange} required/>
            </div>
            <div>
                <input type="password" name="password" placeholder="Password" value={password} onChange={handlePasswordChange} required/>
            </div>
            {showWarning && (
                <div className="warning-message">
                    Incorrect username or password. Please try again.
                </div>
            )}
            <div className='login-btn-container'>
                {/* <input type="submit" value="Login"/> */}
                <button className='login-btn' type='submit'>Login</button>
            </div>
        </form>
        <div className='no-account'>
                <p>Don't have an account? <button onClick={handleClick}>Sign Up</button></p>
            </div>
                

        </div>
    )
}

export default SignUp