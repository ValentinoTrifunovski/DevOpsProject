import React from "react";
import { withRouter } from 'react-router-dom'
import PasswordMask from 'react-password-mask';
import Axios from "../../custom-axios/axios";
import { useState, useEffect } from 'react';
import qs from 'qs'


const EditProfileComponent = props => {

    const [username,setUsername] = useState("")
    const [currentPassword,setCurrentPassword] = useState("")
    const [newPassword,setNewPassword] = useState("")

    const handleUsername = (event) => {
        setUsername(event.target.value)
    }
    const handleCurrentPassword = (event) => {
        setCurrentPassword(event.target.value)
    }
    const handleNewPassword = (event) => {
        setNewPassword(event.target.value)
    }

    const handleSubmit = async event => {
        console.log("TESTTTTTT")
        console.log(newPassword)
        console.log(currentPassword)
        event.preventDefault();
        const fetchItemById = await fetch(`/api/users/${username}`);
        const item = await fetchItemById.json();

        if (newPassword.length <= 5)
            window.alert("Your new password should be longer than 5 characters!")

        else{
            if (localStorage.getItem("password") === currentPassword) {
                const data = {
                    password:newPassword,
                    nameKey: "",
                    sizeKey: 0,
                    descriptionKey: "",
                    priceKey: 0,
                    onStockKey: false,
                    imageUrlKey:"",
                    nameKeychain: "",
                    descriptionKeychain: "",
                    priceKeychain: 0,
                    onStockKeychain: false,
                    imageUrlKeychain: ""
                }
                const formParams = qs.stringify(data);
                if (window.confirm("Change your informations?")) {
                    props.history.push("/")
                    return Axios.patch(`/api/users/${localStorage.getItem("username")}`, formParams, {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    })
                        .then(res => console.log(res))
                        .catch(err => console.error(err))
                }
            } else {
                window.alert("Passwords does not match!")
            }
        }

    }
    return(
        <div >
            {localStorage.getItem("showSignUp") === "true" ?
                <div className="card text-white bg-light mb-3">
                    <h1><i className="signUpHeader">Edit profile: {localStorage.getItem("username")}</i></h1>

                    <PasswordMask id="password" name="password" id="password" placeholder="New password" value={newPassword} onChange={handleNewPassword} useVendorStyles={true} className="form-control mr-sm-2 "/>

                    <div style={{"marginTop":"10px"}}>
                        <PasswordMask id="password" name="password" id="password" placeholder="Current password" value={currentPassword} onChange={handleCurrentPassword} useVendorStyles={true} className="form-control mr-sm-2 "/>
                        <button style={{"marginTop":"10px"}} className="btnSignUp" onClick={handleSubmit}>Confirm</button>
                    </div>
                </div>
                : null }
        </div>
    )
}

export default withRouter(EditProfileComponent)