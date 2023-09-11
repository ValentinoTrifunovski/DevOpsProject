import React,{ useState, useEffect } from "react";
import {Link} from "react-router-dom";

import '../App.css';

function KeychainComponentDetails({match}){

    useEffect(() => {
        fetchItemById();
        console.log(match)
    }, []);
    const [item, setItem] = useState({});

    const fetchItemById = async () => {
        const fetchItemById = await fetch(`/api/keyChains/${match.params.name}`);
        const item = await fetchItemById.json();
        setItem(item)
        console.log(item);
    }

    return(
        <div><b style={{"fontSize":"25px"}}>Details for: <span style={{"marginLeft":"2px"}}>{item.name}</span></b>
            <div className="cardStyleById" >
                <div className="card text-white bg-light mb-3" styles="max-width: 10rem;">
                    <div className="card-header">Name: {item.name}</div>
                    <div className="card-body">
                        <h4 className="card-title">{item.onStock ? <h4 style={{color : 'green', float: 'right'}}>On Stock</h4> : <h3 style={{color : 'red',float: 'right'}}>On Stock</h3>}</h4>
                        <img src={item.imageUrl} className="keyImage" alt=""/>
                        <br/><br/>
                        <h4 className="card-title">Price: {item.price}</h4>
                        <p className="descriptionStyle">Description: <br/><br/>{item.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default KeychainComponentDetails