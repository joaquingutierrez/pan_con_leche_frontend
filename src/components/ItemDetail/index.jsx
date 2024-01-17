import React from "react";

import "./style.css"

const ItemDetail = ({ item }) => {

    return (
        <div className="item-detail">
            <div className="item-detail-image-container">
                <h2>Imagen</h2>
            </div>
            <div className="item-detail-title-price-container">
                <h1>{item.title}</h1>
                <p>${item.price}</p>
            </div>
            <div className="item-detail-buttons-container">
                <button>Compartir</button>
                <button>Agregar a favoritos</button>
                <button>Agregar al carrito</button>
            </div>
            <div className="item-detail-description-container">
                <p>{item.description}</p>
            </div>
        </div>
    )
}

export default ItemDetail