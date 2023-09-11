import React, {useEffect, useState} from "react";

import {Link} from "react-router-dom";

import '../../App.css';
import KeyComponent from "../KeyComponent";
import CarService from "../../Repository/axiosCarRepository";
import $ from "jquery";
import PaginacionTabla from "../Pagination";

class ProfileComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            keysApiByCar:[],
            carBrand: "",
            carModel: "",
            year: "",
            dataAvailable: true
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.carBrand !== this.props.location.state.carBrand ||
            prevState.carModel !== this.props.location.state.carModel ||
            prevState.year !== this.props.location.state.year) {
                this.loadKeysByCar()
        }

    }

    loadKeysByCar = () => {
        const brand = this.props.location.state.carBrand;
        const model = this.props.location.state.carModel;
        const year = this.props.location.state.year;
        var url;

        if(year === "" || year === "Select year")
            url = "/api/cars?" + $.param({carBrand: brand, carModel: model});

        else
            url = "/api/cars?" + $.param({carBrand: brand, carModel: model, year: year});


        console.log(url)

        CarService.fetchCarData(url).then(response => {
            if (!response.data.length)
                this.setState({dataAvailable:false})
            else {
                const keysApiByCar = response.data;
                this.setState({keysApiByCar, dataAvailable: true})
            }
        })
        this.setState({
            carBrand:brand,
            carModel:model,
            year:year
        })
    };

    

    componentDidMount() {

            // console.log(this.props.location.state.carBrand)
            // console.log(this.props.location.state.carModel)
            // console.log(this.props.location.state.year)

            this.setState({
                carBrand: this.props.location.state.carBrand,
                carModel: this.props.location.state.carModel,
                year: this.props.location.state.year
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
export default ProfileComponent