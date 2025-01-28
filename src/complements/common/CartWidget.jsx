import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
    return (
        <div className="carrito">
            <FaShoppingCart />
            <h3 className='numero'>2</h3>
        </div>
    )
}

export default CartWidget