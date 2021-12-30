import React from 'react'
import { useCartContext } from "./../context/CartContext";

const Brief = () => {

    const {cartList, totalPrice, deleteItem} = useCartContext()

    const brief = cartList.map(prod => 
        <h5 key={prod.product.id}>
            
            {"Quantity: "}{prod.quantity}
            {" - Product: "} {prod.product.brand} 
            {" - "} {prod.product.model}
            {" - Price: USD"} {(prod.product.price * prod.quantity)} 
            {" -- "}
            {<button className="btn" onClick={()=> deleteItem(prod.product.idProd)}>DELETE ITEM</button>}
            
            
        </h5>)

    
    return (
        <div>
            {brief}
            <hr/>
            <h5>
                {`| TOTAL PRICE: USD ${totalPrice()} |`} 
            </h5>
                   
        </div>
    )
}

export default Brief
