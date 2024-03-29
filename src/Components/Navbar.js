import {useState,useEffect} from "react";
import "./NavbarStyles.css";
import {Link} from "react-router-dom";
import { MenuItems } from "./MenuItems";
import SignUp from './SignUp.js'
import SignUpOrg from "./SignUpOrg";
import Credentials from "./Credentials";

function Navbar(){
    const [clicked,setClicked] =useState(false)
    const [popup,setPopup]=useState(false)
    const [signup, setsignup] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false);
    const [credentials, setcredentials] = useState(false)
    const [username, setUsername] = useState('');

    const displayUserName=(newUserName)=>{
        setUsername(newUserName)
    }

    const handlecredentials=()=>{
        setcredentials(!credentials)
    }

    const handleLoginSuccess = (username,userId) => {
        setLoggedIn(true);
        // Store the login state in localStorage
        localStorage.setItem('loggedIn', true);
        localStorage.setItem('userName',username)
        localStorage.setItem('userId',userId)
    };

    const handleLogout = () => {
        setLoggedIn(false);
        setUsername("")
        setcredentials(false)
         // Remove login state and username from localStorage
         localStorage.removeItem('loggedIn');
         localStorage.removeItem('username');
    };

    const openLogin=()=>{
        setsignup(!signup)
        setPopup(!popup)
    }

    const openSignUp=()=>{
        setPopup(!popup)
        setsignup(!signup)
    }
    
    const closeSignUp=()=>{
        setsignup(!signup)
    }
   
    const humburgerClick=()=>{
        setClicked(!clicked)
    }
    const handleClick=()=>{
        setPopup(!popup)
        setsignup(false)
    }

    useEffect(() => {
        // Check localStorage for login state when the component mounts
        const storedLoggedIn = localStorage.getItem('loggedIn');
        if (storedLoggedIn) {
            setLoggedIn(true);
            // You may also want to retrieve and set the username here
            const storedUsername = localStorage.getItem('username');
            if (storedUsername) {
                setUsername(storedUsername);
            }
        }
    }, []);




    return(

        <div className="the-whole-nav">
     
         <nav className="NavbarItems">
            <h1 className="navbar-logo">SeeGo</h1>

            <div className="menu-icons" onClick={humburgerClick}>
                <i className={clicked? "fas fa-times":"fas fa-bars"}></i>
            </div>

            <ul className={clicked ? "nav-menu active":"nav-menu"}>
                {MenuItems.map((item,index)=>{
                    return(
                        <li key={index}>
                    <Link className={item.cName} to={item.url}>
                    <i className={item.icon}></i> {item.title}
                    </Link>
                </li>
                    )
                })}
                {loggedIn ? (
              // If logged in, show user icon and handleLogout function
              <div className="icon-container">
                  <button className="user-icon" onClick={handlecredentials}>
                    <i class="fa-solid fa-user"></i>
                  </button>
              </div>
              
            ) : (
              // If not logged in, show login button
              <div className="mobile-sign-up-btn-container">
                  <button className="mobile-signup-btn" onClick={handleClick}>
                    Login
                  </button>
              </div>
              
            )}
                
            </ul>
        </nav>
         {popup&&
            <div className="the-sign-up">
            < SignUp loggedIn={loggedIn} giveUserName={displayUserName} onLoginSuccess={handleLoginSuccess} handlePopupClick={handleClick} handleSignUp={openSignUp}/>   
        </div> 
         }
         {signup&&
            <div className="the-sign-up">
            < SignUpOrg handleSignUp={closeSignUp} handleOpenLogin={openLogin}/>   
        </div> 
         }
         {credentials&&
            <div className="creds">
            <Credentials logout={handleLogout} username={username}/>
         </div>
         }
         
        
        </div>
    
    )
}

export default Navbar