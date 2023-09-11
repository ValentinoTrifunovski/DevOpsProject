import React from "react";
import { withRouter } from 'react-router-dom'
import PasswordMask from 'react-password-mask';
import Axios from "../../custom-axios/axios";
import { useState, useEffect } from 'react';

const SignUpComponent = props => {

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const handleUsername = (event) => {
        setUsername(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = async event => {
        event.preventDefault();
        const fetchItemById = await fetch(`/api/users/${username}`);
        const item = await fetchItemById.json();

        if (item !== null)
            window.alert("Username already exists")

        else {
            if (password.length <= 5)
                window.alert("Your password should be longer than 5 characters!")
            else
                return Axios.post('/api/users', {
                    username: username,
                    password: password,
                    keyList: []
                }).then(function () {
                    if (!window.alert("Successfuly signed up"))
                        props.history.push("/")
                }).then(function (response) {
                    console.log(response);
                })
                    .catch(function (error) {
                        console.log(error);
                    });
        }
    }

    return(
        <div >
            {localStorage.getItem("showSignUp") === "true" ?
                <div className="card text-white bg-light mb-3">
                    <h1><i className="signUpHeader">Sign up</i></h1>

                        <input type="text"placeholder="Enter username" onChange={handleUsername}/><br/>
                        <span style={{"position":"relative","top":"-10px"}}><PasswordMask id="password" name="password" id="password" placeholder="Enter password" value={password} onChange={handlePassword} useVendorStyles={true} className="form-control mr-sm-2 "/></span>

                        <div><button className="btnSignUp" onClick={handleSubmit}>Submit</button></div>
                </div>
                : null }
        </div>
    )
}

export default withRouter(SignUpComponent)