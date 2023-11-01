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
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis molestie urna, nec dapibus 
                    libero rutrum vestibulum. Ut id justo a purus elementum faucibus vel vel massa. Aliquam a lectus non magna
                     fermentum elementum. Etiam pulvinar nisl justo, vel tincidunt tortor eleifend a. Donec id fermentum augue. 
                     Vivamus a felis mauris. Curabitur eget ullamcorper urna, ut faucibus tellus. Ut sem nulla, faucibus vel interdum 
                     non, vestibulum mollis ligula. Cras feugiat purus tristique augue tempor, in dapibus dui commodo."
                />
                 <TripData
                    image={card2}
                    heading="Food"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis molestie urna, nec dapibus 
                    libero rutrum vestibulum. Ut id justo a purus elementum faucibus vel vel massa. Aliquam a lectus non magna
                     fermentum elementum. Etiam pulvinar nisl justo, vel tincidunt tortor eleifend a. Donec id fermentum augue. 
                     Vivamus a felis mauris. Curabitur eget ullamcorper urna, ut faucibus tellus. Ut sem nulla, faucibus vel interdum 
                     non, vestibulum mollis ligula. Cras feugiat purus tristique augue tempor, in dapibus dui commodo."
                />
                 <TripData
                    image={card3}
                    heading="DSLR Photography"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis molestie urna, nec dapibus 
                    libero rutrum vestibulum. Ut id justo a purus elementum faucibus vel vel massa. Aliquam a lectus non magna
                     fermentum elementum. Etiam pulvinar nisl justo, vel tincidunt tortor eleifend a. Donec id fermentum augue. 
                     Vivamus a felis mauris. Curabitur eget ullamcorper urna, ut faucibus tellus. Ut sem nulla, faucibus vel interdum 
                     non, vestibulum mollis ligula. Cras feugiat purus tristique augue tempor, in dapibus dui commodo."
                />
            </div>
        </div>
    )
}

export default Trip;