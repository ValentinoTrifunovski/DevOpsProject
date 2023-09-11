import React from "react";

import {Link, withRouter} from "react-router-dom";

import '../App.css';
import qs from "qs";
import Axios from "../custom-axios/axios";

class KeyChainComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            added: false
        }
    }

    componentDidMount() {
        console.log(this.props)
        if (this.props.added)
            this.setState({added:true})
        this.fetchItem()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.added !== this.state.added) {
            this.fetchItem()
        }
    }

    fetchItem = async () => {
        let count = 0, fetchItemById;

        if (localStorage.getItem("isAuth") === "true") {
            fetchItemById =  await fetch(`/api/users/${localStorage.getItem("username")}`);
            const item = await fetchItemById.json();

            count = item.keyChainList.filter(keychain => keychain.name === this.props.name).length
        }

        if (count !== 0)
            this.setState({
                added:true
            })
    }

    render() {
        return(
            <div>
                <div className="cardStyle" key={this.props.name}>
                    <div className="card text-white bg-light mb-3" styles="max-width: 10rem;">
                        <div className="card-header"><Link to={`/keychains/${this.props.name}`}><span className="card-header">Name: {this.props.name}</span></Link></div>
                        <div className="card-body"><Link to={`/keychains/${this.props.name}`}>
                            <h4 className="card-title">{this.props.onStock ? <h3 style={{color : 'green', float: 'right'}}>On Stock</h3> : <h3 style={{color : 'red',float: 'right'}}>On Stock</h3>}</h4>
                            <img src={this.props.imageUrl} className="keyImage" alt=""/>
                            <p>Click here for more details...</p></Link>
                            <span className="editAndRemoveBtn">
                                {!this.state.added ?
                                    <button type="button" className="btn btn-primary" onClick={() => {
                                        if (localStorage.getItem("isAuth") === "false") {
                                            window.alert("Please log in!")
                                        }
                                        else {
                                            const data = [...new Array(JSON.parse(localStorage.getItem("savedKeychains")))];

                                            const keys = {
                                                username:localStorage.getItem("username"),
                                                password:localStorage.getItem("password"),
                                                nameKey: "",
                                                sizeKey: 0,
                                                descriptionKey: "",
                                                priceKey: 0,
                                                onStockKey: false,
                                                imageUrlKey:"",
                                                nameKeychain: this.props.name,
                                                descriptionKeychain: this.props.description,
                                                priceKeychain: this.props.price,
                                                onStockKeychain: this.props.onStock,
                                                imageUrlKeychain:this.props.imageUrl
                                            }

                                            const formParams = qs.stringify(keys);
                                            if (window.confirm("Add this product to your products?")) {
                                                this.setState({added: true})
                                                return Axios.patch(`/api/users/${localStorage.getItem("username")}`, formParams, {
                                                    headers: {
                                                        'Content-Type': 'application/x-www-form-urlencoded'
                                                    }
                                                })
                                                    .then(res => console.log(res))
                                                    .catch(err => console.error(err))
                                            }

                                        }
                                    }}>Add to your products</button>
                                    : <button type="button" className="btn btn-outline-primary" onClick={() => {
                                        const keysChains = {
                                            password:localStorage.getItem("password"),
                                            nameKey: "",
                                            sizeKey: 0,
                                            descriptionKey: "",
                                            priceKey: 0,
                                            onStockKey: false,
                                            imageUrlKey:"",
                                            nameKeychain: this.props.name,
                                            descriptionKeychain: this.props.description,
                                            priceKeychain: this.props.price,
                                            onStockKeychain: this.props.onStock,
                                            imageUrlKeychain:this.props.imageUrl
                                        }

                                        const formParams = qs.stringify(keysChains);
                                        if (window.confirm("Remove item from your products?")) {
                                            this.setState({added:false})
                                            window.location.reload()
                                            return Axios.put(`/api/users/${localStorage.getItem("username")}`, formParams, {
                                                headers: {
                                                    'Content-Type': 'application/x-www-form-urlencoded'
                                                }
                                            })
                                                .then(res => console.log(res))
                                                .catch(err => console.error(err))
                                        }
                                    }}>Remove from your products</button>}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
export default withRouter(KeyChainComponent)