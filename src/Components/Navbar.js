import {Component, useState} from "react";
import "./NavbarStyles.css";
import {Link} from "react-router-dom";
import { MenuItems } from "./MenuItems";
import SignUp from "./SignUp";

function Navbar(){
    const [clicked,setClicked] =useState(false)

    const [popup,setPopup]=useState(false)

    const humburgerClick=()=>{
        setClicked(!clicked)
    }

    const handleClick=()=>{
        setPopup(true)
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
                    <i class={item.icon}></i> {item.title}
                    </Link>
                </li>
                    )
                })}
                <button onClick={handleClick}>Sign Up</button>
            </ul>

          
        
        
        
        </nav>
         
        {popup &&   <div className="the-sign-up">
        <SignUp trigger={popup} setTrigger={setPopup}/>   
        </div>}
        </div>
    
    )
}

export default Navbar

