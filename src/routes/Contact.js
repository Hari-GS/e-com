import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar"
import yourImage from '../assets/Contact pic.jpg'
import Footer from "../Components/Footer";
import ContactUs from "../Components/ContactUs"

function Contact(){
    return(
        <>
        <Navbar/>
        <Hero
            cName="hero-mid"
            heroImg={yourImage}
            title="Contact"
            btnClass="hide"
        />
        <ContactUs/>
        <Footer/>         
        </>
    )
}

export default Contact;