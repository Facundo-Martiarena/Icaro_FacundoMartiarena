import React from 'react'
import './CartWidget.css';

import addToCart from './shoppingCart.ico';

const CartWidget = () => {

    let handlerOnClick = () => {
        
        console.log("contador");
    }

    return (
        <div>
            
            <li><img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/ffffff/external-cart-supermarket-flatart-icons-outline-flatarticons.png" className="addToCart" onClick={handlerOnClick} alt="cart"/></li>
        </div>
    )
}

export default CartWidget
