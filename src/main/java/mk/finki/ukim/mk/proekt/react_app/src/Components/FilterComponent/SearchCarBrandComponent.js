import React, {useEffect, useState} from "react";

import {Link} from "react-router-dom";

import '../../App.css';
import KeyComponent from "../KeyComponent";
import CarService from "../../Repository/axiosCarRepository";
import $ from "jquery";
import PaginacionTabla from "../Pagination";

class SearchCarBrandComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            keysApiByCar:[],
            carBrand: "",
            dataAvailable: true
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.carBrand !== this.props.location.state.searchedBrand) {
            this.loadKeysByCar()
        }

    }

    loadKeysByCar = () => {
        const brand = this.props.location.state.searchedBrand;
        var url = `/api/cars?carBrand=${brand.slice(0,1).toUpperCase() + brand.slice(1)}`;
        console.log("URLLLL")
        console.log(url)

        CarService.fetchCarData(url).then(response => {
            console.log("RESPONSE")
            console.log(response.data)
            if (!response.data.length)
                this.setState({dataAvailable:false})
            else {
                const keysApiByCar = response.data;
                this.setState({keysApiByCar, dataAvailable: true})
            }
        })
        this.setState({
            carBrand:brand
        })

    };

    componentDidMount() {
        this.setState({
            carBrand: this.props.location.state.searchedBrand
        })
        this.loadKeysByCar()
    }

    render() {
        const keysDataByCar = this.state.keysApiByCar.map(key => <KeyComponent key={key.name} name={key.name} size={key.size} description={key.description} price={key.price} onStock={key.onStock} imageUrl={key.imageUrl}/>)
        return(
            <div className="cardStyle">
                {this.state.dataAvailable ?
                    <div style={{"position":"relative","top":"-50px"}}>
                        <PaginacionTabla
                            itemsperpage={5}
                            items={keysDataByCar}
                            pagesspan={4}
                        />
                    </div>
                    :
                    <h1>No keys available for this type of car</h1>}
            </div>
        )
    }

}
export default SearchCarBrandComponent