import React, {useEffect, useState} from "react";
import ReactDOM from 'react-dom'

import {Link, withRouter} from "react-router-dom";

import '../../App.css';
import KeyService from "../../Repository/axiosKeyRepository";
import axios from 'axios'
import KeyComponent from "../KeyComponent";
import CarService from "../../Repository/axiosCarRepository";

class FilterCarsComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            carsApi: [],
            carBrand:"",
            carModel:"",
            year:"",
            showModal: false
        };
        this.handleChange = this.handleChange.bind(this);
    }

    loadCars = () => {
        CarService.fetchCarData("/api/cars").then(response => {
            const carsApi = response.data;
            this.setState({carsApi})
        })
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.carBrand !== this.state.carBrand ||
            prevState.carModel !== this.state.carModel)
            this.setState({year:""})
    }

    componentDidMount() {
        this.setState({
            showModal:true
        })
        this.loadCars();
    }

    handleChange(event){
        const {name,value} = event.target;
        this.setState({
            [name]:value,
        })
    }

    handleClick = () => {
        if (!this.state.showModal)
         window.location.reload(false);

        if (this.state.carBrand === "" || this.state.carModel === "")
            window.alert("Please select brand and model")

        else {
            this.props.history.push({
                pathname: "/cars/filteredByKeys",
                state: {
                    carModel: this.state.carModel,
                    carBrand: this.state.carBrand,
                    year: this.state.year
                }
            })
            console.log("godina: " + this.state.year)
        }
    };

    render() {

        const modelsByBrand = this.state.carsApi.map(car => car.carBrand === this.state.carBrand);
        const carsSetBrand = [...new Set(this.state.carsApi.map(car => car.carBrand))];
        const carsSetModel = [...new Set(this.state.carsApi.filter(car => car.carBrand === this.state.carBrand).map(car => car.carModel))];
        if (!this.props.showModal) {
            return null;
        }
        return(
            <div>
                <div className="filterCarsStyle" id="filterCarsStyle">
                    <div className="card text-white bg-light mb-3" styles="max-width: 10rem;">
                        <div className="card-header">Name: </div>

                                <div className="card-body">
                                    <span>Select brand:</span>
                                    <select className="browser-default custom-select"
                                            name="carBrand"
                                            onChange={this.handleChange}
                                    >
                                        <option id="brand" defaultValue="Brand">Brand</option>
                                        {carsSetBrand.map(car1 => {
                                            return <option key={car1} value={car1}>{car1}</option>
                                        })}


                                    </select>

                                    <span>Select model:</span>
                                    <select className="browser-default custom-select"
                                            name="carModel"
                                            onChange={this.handleChange}
                                    >
                                        <option id="model" defaultValue="Model">Model</option>
                                        {carsSetModel.map(carModel => {
                                           return <option key={carModel} value={carModel}>{carModel}</option>
                                        })}
                                    </select>

                                    <span>Select year: (optional)</span>
                                    <select className="browser-default custom-select"
                                            name="year"
                                            onChange={this.handleChange}
                                    >
                                        <option id="year" defaultValue="year">Select year</option>
                                        {this.state.carsApi.filter(car => car.carBrand === this.state.carBrand && car.carModel === this.state.carModel).map(car1 => {
                                            return <option key={car1.year} value={car1.year}>{car1.year}</option>
                                        })}
                                    </select>
                                </div>
                       <div className="filterCarsButton"><button className="btn btn-info" id="filterButton" onClick={this.handleClick}>Filter</button></div>
                    </div>
                </div>

            </div>

        )
    }

}
export default withRouter(FilterCarsComponent)