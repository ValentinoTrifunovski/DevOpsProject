import React, {Component} from "react";
import { Route, Redirect } from "react-router-dom"
import auth from "./auth";

export const ProtectedRoute = ({ component: Component, ...rest}) => {

    return (
        <Route
            {...rest}
            render = {props => {
                if (localStorage.getItem("isAuth" === "true")){
                    return <Component {...props}/>
                } else{
                    return (
                        props.history.push("/")
                    )
                }
        }}
        />
    )
}