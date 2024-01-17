import React from "react";

import "./style.css"
import { useParams } from "react-router-dom";
import { ItemDetail } from "../../components";

const ItemDetailContainer = () => {

    const {id} = useParams()

    const item = {
        img: [],
        id:9,
        title:"Prueba 9",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        stock: 10,
        price: 299,
        category: "categoria 3",
        custom: false,
    }


    return (
        <main>
            <ItemDetail item={item}/>
        </main>
    )
}

export default ItemDetailContainer