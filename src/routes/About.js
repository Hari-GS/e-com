import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar"
import yourImage from '../assets/Big temple vimanam.jpg';
import Footer from "../Components/Footer";
import AboutUs from "../Components/AboutUs";
    

function About(){
    return(
        <>
        <Navbar/>
        <Hero
            cName="hero-mid"
            heroImg={yourImage}
            title="About"
            btnClass="hide"
        /> 
        <AboutUs/>
        <Footer/>         
        </>
    )
}

export default About;