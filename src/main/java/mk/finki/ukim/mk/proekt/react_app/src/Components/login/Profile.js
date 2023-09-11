import React,{ useState, useEffect } from "react";
import {Link,Redirect} from "react-router-dom";

import '../../App.css';
import {render} from "react-dom";

class Profile extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            item: [],
            password:"",
            url:`/api/users/`,
            loggedIn:false
        }
    }


    render(){

        return(
            <div>profile component</div>
        )
    }
}
export default Profile
