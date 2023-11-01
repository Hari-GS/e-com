import DestinationData from "./DestinationData"
import "./DestinationStyles.css"
import  b1 from '../assets/big temple des1.jpg'
import  b2 from '../assets/big temple des2.jpg'
import  b3 from '../assets/b3.jpg'
import  b4 from '../assets/b4.jpg'


const Destination=()=>{
    return(
        <div className="destination">
            <h1>Popular Places</h1>
            <p>You must visit atleast once in a life time</p>

            <DestinationData
                className="first-des"
                heading="The Big Temple"

                text="Brihadishvara Temple, called Rajarajesvaram by its builder, and known locally as
                 Thanjai Periya Kovil and Peruvudaiyar Kovil, is a Shaivite Hindu temple built in a Chola architectural 
                style located on the south bank of the Cauvery river in Thanjavur, Tamil Nadu, India"
                
                img1={b1}
                img2={b2}
            />

<DestinationData
                heading="The Maratha palace"
                className="first-des-reverse"
                text="The Thanjavur Maratha palace was originally constructed by the rulers of Thanjavur Nayak kingdom. After the fall of the Thanjavur Nayak kingdom, it served as the official 
                residence of the Thanjavur Marathas. When most of the Thanjavur Maratha kingdom was annexed by the British Empire in 1799, the Thanjavur Marathas continued to hold 
                sway over the palace and the surrounding fort. The Bhonsle family continued to hold on to the palace even after the last king, Shivaji of Thanjavur."
                
                img1={b3}
                img2={b4}
            />
           
        </div>
    )
}

export default Destination