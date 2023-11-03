import Destination from "../Components/Destination";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar"
import Trip from "../Components/Trip";
import yourImage from '../assets/Big-Temple-Entrance.jpg';
import Footer from "../Components/Footer";
import SignUp from "../Components/SignUp";
import { useState } from "react";



function Hhome(){

    

    return(
        <div className="main">
        <Navbar/>
        <Hero
            cName="hero"
            heroImg={yourImage}
            title="Your Tanjore Trip is Ready"
            text="2000 Years of History Waiting For You"
            buttonText="Trip Plan"
            url="/"
            btnClass="show"
        /> 
        <Destination/>
        <Trip/>
        <Footer/>
      
        </div>
    )
}

export default Hhome;