import {Component} from "react";
import "./DestinationStyles.css";
import  b1 from '../assets/big temple des1.jpg'
import  b2 from '../assets/big temple des2.jpg'


class DestinationData extends Component{
    render(){
        return(
            <div className={this.props.className}>
            <div className="des-text">
                <h2>{this.props.heading}</h2>
                <p>
                    {this.props.text}
                </p>
            </div>

            <div className="image">
                <img alt="Big temple " src={this.props.img1}/>
                <img alt="Big temple " src={this.props.img2}/>
            </div>
        </div>
        )
    }
}

export default DestinationData  