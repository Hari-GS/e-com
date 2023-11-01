import Destination from "../Components/Destination";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar"
import Trip from "../Components/Trip";
import yourImage from '../assets/Big-Temple-Entrance.jpg';
import Footer from "../Components/Footer";

function Hhome(){
    return(
        <>
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
        </>
    )
}

export default Hhome;