import React from "react";

import "./style.css"
import { Link } from "react-router-dom";

const ItemCard = ({item}) => {

    return (
        <div className="item-card">
            <div className="image-card-container"><img src="" alt="" /></div>
            <div className="text-card-containet">
                <h4>{item.title}</h4>
                <h5>{item.category}</h5>
                <p>${item.price}</p>
            </div>
            <Link to={`/productos/${item.id}`}><button>Más detalles</button></Link>
        </div>
    )
}

export default ItemCard