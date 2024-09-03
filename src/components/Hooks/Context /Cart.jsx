// Context cart

import React from 'react'
import { useCart } from "../../../context/Cart"
import './Cart.css';

function Cart() {
    const cart = useCart()
    const total = cart.items.reduce((a, b) => a + b.price, 0)
    return (
        <div className="cart-container">
            <h1>Cart</h1>
            {cart && cart.items.map((item, index) => (
                <li key={index}>{item.name} - ${item.price}</li>
            ))}
            <p>Total - ${total}</p>
        </div>
    )
}

export default Cart
