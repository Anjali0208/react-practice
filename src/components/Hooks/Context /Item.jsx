// Item.js
import React from 'react'
import { useCart } from "../../../context/Cart"
import './Item.css';

function Item(props) {
    const cart = useCart();
    const handleCart = () => {
        cart.setItems([...cart.items, { name: props.name, price: props.price }])
    }
    return (
        <div className="item-container">
            <h5>{props.name}</h5>
            <p>Price - ${props.price}</p>
            <button onClick={handleCart}>Add to cart</button>
        </div>
    )
}

export default Item
