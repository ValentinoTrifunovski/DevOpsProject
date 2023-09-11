import React from "react";
import {BrowserRouter as Router, Link, Redirect, Route, Switch, withRouter} from 'react-router-dom'
import "../../App.css"
import TextTransition, { presets } from "react-text-transition";
import car_keychains_image from "../../images/car_keychains_image.jpg"
import car_keys_image from "../../images/car_keys_image.jfif"



const HomePageComponent = props => {
    return(
        <div>
            <div className="cardStyle" style={{"width":"1000px","position":"relative"}}>
                <div className="card text-white mb-3" style={{"backgroundColor":"#002233"}}>
                    <div className="card-header"><span className="card-header text-white">
                        <span style={{"color":"white","position":"relative","left":"180px","fontSize":"20px"}}>Keys</span>
                        <span style={{"color":"white","position":"relative","left":"600px","fontSize":"20px"}}>Key chains</span>
                    </span></div>
                    <div className="card-body text-white">
                       <div>
                           <table style={{"border" : "1px solid #002233","border-collapse" : "collapse"}}>
                               <td><Link to="/keys"><img src={car_keys_image} className="car_keys"/></Link></td>
                               <td><Link to="/keychains"><img src={car_keychains_image} style={{"position":"relative","margin-left":"50px"}} className="car_keychains_image"/></Link></td>
                           </table>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(HomePageComponent);