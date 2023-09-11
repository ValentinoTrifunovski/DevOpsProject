import React from "react";
import ReactDOM from 'react-dom'

import {Link} from "react-router-dom";

import '../App.css';

class KeyComponentEdit extends React.Component{

    render() {
        return(
            <div>
                <div className="filterCarsStyle" id="filterCarsStyle">
                    <div className="card text-white bg-light mb-3" styles="max-width: 10rem;">
                        <div className="card-header">Name: </div>
                        <div className="card-body">
                            <h3>Name: <input type="text"/></h3>
                            <h3>Size: <input type="text"/></h3>
                            <h3>Description: <input type="text"/></h3>
                            <h3>Price: <input type="text"/></h3>
                            <h3>On Stock: <input type="text"/></h3>
                            <h3>Image url: <input type="text"/></h3>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}
export default KeyComponentEdit