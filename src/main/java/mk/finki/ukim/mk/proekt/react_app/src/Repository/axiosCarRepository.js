import axios from "axios";
import $ from 'jquery'
import Axios from "../custom-axios/axios";

const CarService = {

    fetchCarData: (url) => {
        return axios.get(url);
    }

};

export default CarService