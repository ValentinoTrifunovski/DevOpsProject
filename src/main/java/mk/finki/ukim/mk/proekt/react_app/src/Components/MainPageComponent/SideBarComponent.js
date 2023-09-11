import React from "react";
import {Link} from 'react-router-dom'
import {BrowserRouter as Router, withRouter, Redirect, Route,Switch} from 'react-router-dom'
import $ from 'jquery'
import "../../App.css"
import App from "../../App";
import KeyService from "../../Repository/axiosKeyRepository";
import FilterCarsComponent from "../FilterComponent/FilterCarsComponent";
import Clock from "react-live-clock";
import ReactFitText from 'react-fittext'

class SideBarComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            product: "products",
            filterCarsModal: false,
            searchValue: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleChange(event){
        const {name,value} = event.target;
        this.setState({
            [name]:value
        })
        if (value !== 'Select')
            this.props.history.push(`${value}`)
    }
    handleSearch(event){
        const {name,value} = event.target;
        this.setState({
            [name]:value
        })
    }

    handleClick = () => {
        if (this.state.searchValue === "")
            window.alert("Searched value is empty")
        else{
            this.props.history.push({
                pathname:`/cars/keysByCarBrand`,
                state: {
                    searchedBrand: this.state.searchValue
                }
        })}
    }

    toggleFilterCarsModal = () => {
        this.setState(prevState=>{
            return{
                filterCarsModal: !prevState.filterCarsModal
            }
        });
        //console.log("filterCarsModal = " + this.state.filterCarsModal)
    };
    setModalToFalse = () => {
        this.setState({
            filterCarsModal: false
        })
    };
    
    render() {

        $(".btn").click(function(){
                $(".aaa").animate({right: '10px'},400);
        });
        return (
            <div className="container-fluid">
                <div className="row">
                    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                        <div className="sidebar-sticky">
                            <ul className="nav flex-column">
                               <div><ReactFitText compressor={0.4}>
                                    <h1>
                                        <Clock
                                            format={'dddd,h:mm:ss A'}
                                            style={{'fontSize':"20px"}}
                                            ticking={true}
                                            timezone={'CET'} />
                                    </h1>
                               </ReactFitText></div>
                                <li>
                                    <select className="browser-default custom-select"
                                            value={this.state.product}
                                            onChange={this.handleChange}
                                            name="product"
                                    >
                                        <option value="/">Select products</option>
                                        <option value="/keys">Keys</option>
                                        <option value="/keychains">Keychains</option>
                                    </select>
                                </li>

                            </ul>
                        </div>
                    </nav>

                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                        <div
                            className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                            <h1 className="h2"></h1>
                            <div className="btn-toolbar mb-2 mb-md-0">
                                <div>
                                    <button className="btn btn-info" type="submit" onClick={this.toggleFilterCarsModal}>Filter Cars</button>
                                    <div className="btn-group mr-2">
                                        <input className="form-control mr-sm-2 " name="searchValue" type="text" placeholder="Search by brand" onChange={this.handleSearch}
                                               aria-label="Search"/>
                                    </div>
                                    <button type="button" className="btn btn-secondary" name="searchValue" onClick={this.handleClick}>Search</button>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>

                <div className="aaa" id="aa">
                    <FilterCarsComponent showModal={this.state.filterCarsModal} rendered="rendered"/>
                </div>

            </div>
        )
    }
}

export default withRouter(SideBarComponent)