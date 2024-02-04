import "./TripStyles.css"
import TripData from "./TripData";
import card1 from "../assets/trip guide.jpg"
import card2 from "../assets/Trip food.jpg"
import card3 from "../assets/trip dslr.jpg"


function Trip(){
    return(
        <div className="trip">
            <h1>Availabe Services</h1>
            <p>The services which can be included in your tanjore tour package</p>
            <div className="tripcard">
                <TripData
                    image={card1}
                    heading="Trip Guide"
                    text="where unforgettable journeys await at every turn. Our expert guides are passionate about curating immersive 
                    travel experiences tailored to your unique interests and preferences. Whether you seek cultural enlightenment, adventure
                     thrills, or serene escapes, our knowledgeable guides will craft a seamless itinerary that transcends ordinary travel. 
                     With a keen eye for hidden gems and local insights, we go beyond the traditional tourist path to ensure you discover 
                     the heart and soul of each destination."
                />
                 <TripData
                    image={card2}
                    heading="Food"
                    text="Indulge your senses with our exquisite Food Guide service, where culinary delights take center stage in your 
                    travel experience. Whether you're a connoisseur seeking Michelin-starred elegance or an avid 
                     street food enthusiast craving authentic local flavors, our guides are your culinary compass. We meticulously curate dining
                      experiences that showcase the essence of each destination, from hidden gems to renowned establishments.Join us, and let the 
                      joy of discovery unfold with every delectable bite"
                />
                 <TripData
                    image={card3}
                    heading="DSLR Photography"
                    text="Embark on a visual odyssey with our DSLR Photography service, where every click tells a story and every frame is a work of art.
                    Our skilled photographers are equipped with the technical prowess and creative insight to elevate your photography experience.
                    We delve into the intricacies of camera settings, composition, and lighting, providing hands-on guidance to ensure you
                    capture the perfect shot in any setting. Join us on a visual journey where each click is an opportunity to freeze a moment in time with 
                    unparalleled clarity and emotion."
                />
            </div>
        </div>
    )
}

export default Trip;