import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar"
import yourImage from '../assets/Service pic.jpg';
import Footer from "../Components/Footer";
import Trip from "../Components/Trip";

function Service(){
    return(
        <>
              <Navbar/>
        <Hero
            cName="hero-mid"
            heroImg={yourImage}
            title="Service"
            btnClass="hide"
        /> 
        <Trip/>
        <Footer/>         
        </>
    )
}

export default Service;