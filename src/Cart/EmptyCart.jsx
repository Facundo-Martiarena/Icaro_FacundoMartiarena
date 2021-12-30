import React from 'react';
import { Link } from "react-router-dom";

function EmptyCart() {
    return(
        <div className="text-center">
            <h3>There are no products in the cart</h3>
            <Link to="/products">
                <button className="btn">Continue shopping</button>
            </Link>
        </div>
    )
}

export default EmptyCart
