import React from "react";

import "./style.css"
import ItemCard from "../ItemCard";

const ItemList = ({items}) => {

    return (
        <div className="item-list-container">
            {items.map(item => {
                return <ItemCard key={item.id} item={item} />
            })}
        </div>
    )
}

export default ItemList