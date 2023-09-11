import React from "react";
import { useState, useEffect, useBackHandler} from 'react';
import {BrowserRouter as Router, Redirect, Route,Switch,withRouter} from 'react-router-dom'
import "../../App.css"
import userProfileImage from "../../images/userProfileImage.png"
import keyStoreLogoImg from "../../images/KeyStoreLogo.png"
import {Link} from "react-router-dom";
import PasswordMask from 'react-password-mask';


const NavBarComponent = props => {

    const [logIn,setLogIn] = useState(true)
    const [signUp,setSignUp] = useState(true)
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    const [linkToProfile,setLinkToProfile] = useState(false)
    const [noData,setNoData] = useState(false)
    const [loggedIn,setLoggedIn] = useState(false)

    useEffect( () => {

        setLoggedIn(props.loggedIn)

    },[loggedIn])

    useEffect( () => {
        setUsername("")
        setPassword("")
        if (localStorage.getItem("isAuth") === "false")
            localStorage.setItem("isAuth",false)
            localStorage.setItem("linkToProfile",false)
            localStorage.setItem("username",localStorage.getItem("username"))
            localStorage.setItem("password",localStorage.getItem("password"))
    },[])

    useEffect(() => {
        setUsername("")
        setPassword("")
        console.log("PROPSSSS")
        console.log(props)
    }, [props.count])

    useEffect(() => {
        setUsername("")
        setPassword("")
        console.log("PROPSSSS")
        console.log(props)
    }, [props.history.location.state])

    const handleUsername = (event) => {
        setUsername(event.target.value)
        localStorage.setItem("linkToProfile",false)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
        localStorage.setItem("linkToProfile",false)
    }
    const handlePasswordConfirm = (event) => {
        setConfirmPassword(event.target.value)
        setLinkToProfile(false)
    }

    const handleLogIn = () => {
        if (username !== "" && password !== "") {
            setLinkToProfile(true)
            localStorage.setItem("linkToProfile",true)
        }
        else if ((username === "" || password === ""))
            window.alert("Please enter all the inputs")
    }

    const handleSignUp = () => {
    }

    if (localStorage.getItem("linkToProfile") === "true" || localStorage.getItem("isAuth") === "true")
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark" style={{"backgroundColor" : "#002233"}}>
                    <Link to="/"><img src={keyStoreLogoImg} className="keyStoreLogoImg"/></Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02"
                            aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav mr-auto ml-sm-5">
                            <li className={"homeTextStyle"}>
                                <a href="/" style={{"color":"white"}}>Home</a>
                            </li>
                        </ul>
                    </div>
                    <div><button button type="button" className="btn btn-outline-light btn-sm mr-1" onClick={() => {
                        localStorage.setItem("isAuth",false)
                        localStorage.setItem("username","")
                        localStorage.setItem("password","")
                        localStorage.setItem("linkToProfile",false)
                        localStorage.setItem("savedKeys","")
                        localStorage.setItem("savedKeychains","")
                        localStorage.setItem("loggedOut","true")
                        props.history.push({
                            pathname:`/`,
                            state: {
                                username: "",
                                password: ""
                            }
                        })
                    }}>Log Out</button></div>
                    <div><button type="button" className="btn btn-outline-warning" onClick={async () => {

                        const fetchItemById =  await fetch(`/api/users/${localStorage.getItem("username")}`);
                        const item = await fetchItemById.json();
                        console.log("ITEMMMMMMM")
                        console.log(item)
                        localStorage.setItem("savedKeys",JSON.stringify(item.keyList))
                        localStorage.setItem("savedKeychains",JSON.stringify(item.keyChainList))

                        props.history.push({
                            pathname:`/users/profile`,
                            state: {
                                username: localStorage.getItem("username"),
                                password: localStorage.getItem("password"),
                                keyList: JSON.parse(localStorage.getItem("savedKeys")),
                                keyChainList: JSON.parse(localStorage.getItem("savedKeychains"))
                            }
                        })
                    }}>View profile</button>
                    </div>
                </nav></div>

        )

    else
        return (
            <div>
                <nav className="navbar navbar-expand-lg " style={{"backgroundColor" : "#002233"}}>
                    <Link to="/"><img src={keyStoreLogoImg} className="keyStoreLogoImg"/></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02"
                            aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav mr-auto ml-sm-5">
                           <li className={"homeTextStyle"}>
                                <a href="/" style={{"color":"white"}}>Home</a>
                           </li>

                        </ul>
                        <div className="form-inline my-2 my-lg-0">
                                <div><input className="form-control mr-sm-2 " type="text" id="username" name="username" placeholder="Username" onChange={handleUsername} aria-label="Search"/>
                                <PasswordMask id="password" name="password" id="password" placeholder="Enter password" value={password} onChange={handlePassword} useVendorStyles={true} className="form-control mr-sm-2 "/></div>
                                <div><button className="btn btn-success my-2 mr-sm-1" type="submit" onClick={() => {
                                    localStorage.setItem("loggedOut","false")
                                    if ((username === "" || password === "")){
                                        window.alert("Please enter all the inputs")
                                        document.getElementById("username").value = ""
                                        document.getElementById("password").value = ""
                                    }
                                    else
                                        props.history.push({
                                            pathname:`/users/profile`,
                                            state: {
                                                username: username,
                                                password: password
                                            }
                                         })
                                }} >Log In</button></div>
                                <div><button className="btn btn-success my-2 mr-sm-1" type="submit" onClick={() => {
                                    props.history.push({
                                        pathname:"/users/signUp"
                                    })
                                }}>Sign Up</button></div>
                        </div>
                    </div>
                </nav>
            </div>
        );
}
export default withRouter(NavBarComponent);