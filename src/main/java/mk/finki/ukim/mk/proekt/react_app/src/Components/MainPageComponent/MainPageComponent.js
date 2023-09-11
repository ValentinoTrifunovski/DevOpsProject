import React from "react";
import {BrowserRouter as Router, Redirect, Route,Switch,withRouter} from 'react-router-dom'
import "../../App.css"
import NavBarComponent from "./NavBarComponent";
import SideBarComponent from "./SideBarComponent";
import FooterComponent from "./FooterComponent";


const MainPageComponent = props => {
    return(
        <div>
            <NavBarComponent/>
            <SideBarComponent/>
            <FooterComponent/>
        </div>
    )
}
export default withRouter(MainPageComponent);