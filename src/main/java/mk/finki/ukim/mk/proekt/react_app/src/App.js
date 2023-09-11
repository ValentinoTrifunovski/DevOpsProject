import React from 'react';
import './App.css';
import ReactDOM from 'react-dom'
import KeyComponent from "./Components/KeyComponent";
import {BrowserRouter as Router, HashRouter, Link, MemoryRouter, Route, Switch, withRouter} from 'react-router-dom'
import KeyService from "./Repository/axiosKeyRepository";
import KeyComponentDetails from "./Components/KeyComponentDetails"
import ProfileComponent from "./Components/login/ProfileComponent";
import FilteredByKeys from "./Components/FilterComponent/FilteredByKeys"
import {BrowserRouter} from "react-router-dom";
import SignUpComponent from "./Components/login/signUpComponent";
import PaginacionTabla from "./Components/Pagination";
import EditProfileComponent from "./Components/login/EditProfileComponent";
import MainPageComponent from "./Components/MainPageComponent/MainPageComponent";
import HomePageComponent from "./Components/MainPageComponent/HomePageComponent";
import car_keys_image from "./images/car_keys_image.jfif";
import car_keychains_image from "./images/car_keychains_image.jpg";
import KeychainService from "./Repository/axiosKeychainRepository";
import KeyChainComponent from "./Components/KeyChainComponent";
import KeychainComponentDetails from "./Components/KeychainComponentDetails";
import SearchCarBrandComponent from "./Components/FilterComponent/SearchCarBrandComponent";


class App extends React.Component{

    constructor() {
        super();
        this.state = {
            keysApi: [],
            keychainsApi: [],
            keysApiByCar:[],
            keysApiById: [],
            isLoading: true,
            loggedIn: false,
            reloadKeys: false
        }
    }


    componentDidMount() {
        this.setState({
            isLoading: true
        });
        this.loadKeys();
        this.loadKeychains();
    }

    loadKeys = () => {
        KeyService.fetchKeyData().then(response => {
            const keysApi = response.data;
            this.setState({keysApi,isLoading:false})
        })
    };
    loadKeychains = () => {
        KeychainService.fetchKeychainData().then(response => {
            const keychainsApi = response.data;
            this.setState({keychainsApi,isLoading:false})
        })
    };



    onLogIn(logged) {
        this.setState({loggedIn:logged})
    }

    render() {

        const keysData = this.state.keysApi.map(key => <KeyComponent key={key.id} name={key.name} size={key.size} description={key.description} price={key.price} onStock={key.onStock} imageUrl={key.imageUrl}/>)
        const keychainsData = this.state.keychainsApi.map(keychain => <KeyChainComponent key={keychain.id} name={keychain.name} size={keychain.size} description={keychain.description} price={keychain.price} onStock={keychain.onStock} imageUrl={keychain.imageUrl}/>)
        const routing = (
            <Router>
                <MainPageComponent/>

                <div className="keysData">
                    <Route
                        path={"/"} exact
                        component={HomePageComponent}>
                    </Route>
                </div>

                <div className="keysData">
                    <Route
                        path={"/keys"}
                        exact
                        render={()=> <div><div className="rightSidebar" style={{"marginTop":"1px"}}>
                            <table style={{"border" : "3px solid lightblue","border-collapse" : "collapse"}}>
                                <th><span style={{"color":"black","position":"relative","float":"left","fontSize":"20px"}}>Keychains</span></th><tr><Link to="/keychains"><img src={car_keychains_image} style={{"position":"relative"}} className="car_keychains_image_side"/></Link></tr>
                            </table>
                        </div>

                            <div style={{"position":"relative","top":"-50px"}}>
                                <PaginacionTabla
                                    itemsperpage={5}
                                    items={keysData}
                                    pagesspan={4}
                                />
                            </div>
                        </div>}>
                    </Route>
                </div>

                <div className="keysData">
                    <Route
                        path={"/keychains"}
                        exact
                        render={()=> <div><div className="rightSidebar" style={{"marginTop":"1px"}}>
                            <table style={{"border" : "3px solid lightblue","border-collapse" : "collapse"}}>
                                <th><span style={{"color":"black","position":"relative","float":"left","fontSize":"20px"}}>Keys</span></th><tr><Link to="/keys"><img src={car_keys_image} style={{"position":"relative"}} className="car_keychains_image_side"/></Link></tr>
                            </table>
                        </div>
                            <div style={{"position":"relative","top":"-50px"}}>
                                <PaginacionTabla
                                    itemsperpage={5}
                                    items={keychainsData}
                                    pagesspan={4}
                                />
                            </div>
                        </div>}>
                    </Route>
                </div>


                <div className="keysData">
                    <Route
                        path={"/keys/:name"}
                        component={KeyComponentDetails}>
                    </Route>
                </div>

                <div className="keysData">
                    <Route
                        path={"/keychains/:name"}
                        component={KeychainComponentDetails}>
                    </Route>
                </div>

                <div className="keysData">
                    <Route
                        path={"/users/profile"}
                           render={(props) => <ProfileComponent
                        {...props} onLogIn={this.onLogIn.bind(this)}/>}>
                    </Route>
                </div>

                <div className="keysData">
                    <Route
                        path={"/cars/filteredByKeys"}
                        render={(props) => <div>
                                                <div className="rightSidebar" style={{"marginTop":"1px"}}>
                                                    <table style={{"border" : "3px solid lightblue","border-collapse" : "collapse"}}>
                                                        <th><span style={{"color":"black","position":"relative","float":"left","fontSize":"20px"}}>Keys</span></th><tr><Link to="/keys"><img src={car_keys_image} style={{"position":"relative"}} className="car_keychains_image_side"/></Link></tr>
                                                        <th><span style={{"color":"black","position":"relative","float":"left","fontSize":"20px"}}>Keychains</span></th><tr><Link to="/keychains"><img src={car_keychains_image} style={{"position":"relative"}} className="car_keychains_image_side"/></Link></tr>
                                                    </table>
                                                </div>
                                                        <h3 style={{"marginLeft":"10px","position":"relative","top":"-50px", "color":"darkgray"}}>Filtered keys by car informations</h3>
                                                    <div>
                                                         <FilteredByKeys {...props}/>
                                                    </div>
                                      </div>
                        }>
                    </Route>
                </div>

                <div className="keysData">
                    <Route
                        path={`/cars/keysByCarBrand`}
                        render={(props) => <div>
                            <div className="rightSidebar" style={{"marginTop":"1px"}}>
                                <table style={{"border" : "3px solid lightblue","border-collapse" : "collapse"}}>
                                    <th><span style={{"color":"black","position":"relative","float":"left","fontSize":"20px"}}>Keys</span></th><tr><Link to="/keys"><img src={car_keys_image} style={{"position":"relative"}} className="car_keychains_image_side"/></Link></tr>
                                    <th><span style={{"color":"black","position":"relative","float":"left","fontSize":"20px"}}>Keychains</span></th><tr><Link to="/keychains"><img src={car_keychains_image} style={{"position":"relative"}} className="car_keychains_image_side"/></Link></tr>
                                </table>
                            </div>
                            <h3 style={{"marginLeft":"60px","position":"relative","top":"-50px", "color":"darkgray"}}>Filtered keys by car brand</h3>
                            <div>
                                <SearchCarBrandComponent {...props}/>
                            </div>
                        </div>
                        }>
                    </Route>
                </div>

                <div className="keysData">
                    <Route
                        path={"/users/signUp"}
                        component={SignUpComponent}>
                    </Route>
                </div>
                <div className="keysData">
                    <Route
                        path={"/users/editProfile"}
                        component={EditProfileComponent}>
                    </Route>
                </div>
            </Router>
        )

        return(
            <div>
                <div>
                    {routing}
                </div>
            </div>
        )
    }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<BrowserRouter><App/></BrowserRouter>,rootElement)
export default App
