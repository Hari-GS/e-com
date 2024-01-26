import {useState} from "react";
import "./NavbarStyles.css";
import {Link} from "react-router-dom";
import { MenuItems } from "./MenuItems";
import SignUp from './SignUp.js'
import SignUpOrg from "./SignUpOrg";

function Navbar(){
    const [clicked,setClicked] =useState(false)
    const [popup,setPopup]=useState(false)
    const [signup, setsignup] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLoginSuccess = () => {
        setLoggedIn(true);
        console.log("Called")
    };

    const handleLogout = () => {
        setLoggedIn(false);
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
                  <button className="user-icon">
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
            < SignUp loggedIn={loggedIn} onLoginSuccess={handleLoginSuccess} handlePopupClick={handleClick} handleSignUp={openSignUp}/>   
        </div> 
         }
         {signup&&
            <div className="the-sign-up">
            < SignUpOrg handleSignUp={closeSignUp} handleOpenLogin={openLogin}/>   
        </div> 
         }
         
        
        </div>
    
    )
}

export default Navbar