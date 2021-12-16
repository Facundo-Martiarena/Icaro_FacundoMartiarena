import { Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "./../context/CartContext";
import React from 'react';
import { getFirestore } from '../service/getFirestore.js'
import firebase from 'firebase'


function Cart(item) {

    const {cartList, emptyCart, totalPrice, deleteItem} = useCartContext()

    const generateOrder = (e) => {
        e.preventDefault()

        
        const order = {}
        order.date = firebase.firestore.Timestamp.fromDate(new Date());  


        order.buyer = {name: "Juan", email:"juanperez@gmail.com" , phone: "123456789"}
        order.total = totalPrice()

      
        order.items = cartList.map(cartItem => {
            const id = cartItem.product.idProd
            const name = cartItem.product.brand
            const price = cartItem.product.price * cartItem.quantity

            return {id,name, price} 
        })

        const dbQuery = getFirestore()  
        dbQuery.collection('orders').add(order)
        .then(resp => console.log(`your purchase order is : ${resp.id}`))
        .catch(err=> console.log(err))



    }
    
    if(cartList.length === 0){
        return(
            <div className="text-center">
                <h3>There are no products in the cart</h3>
                <Link to="/products">
                    <button className="btn">Continue shopping</button>
                </Link>
            </div>
        )
    }else{

            return (
                <Row>
                    <Col>
                        <div>
                        
                        { cartList.map(prod => 
                            <h5 key={prod.product.id}>
                                {"Quantity: "}{prod.quantity} {" - Product: "} {prod.product.brand} {" - Price: U$S"} {(prod.product.price * prod.quantity)} {<button className="btn" onClick={()=> deleteItem(prod.product.idProd)}>DELETE ITEM</button>}
                            </h5>)
                        }
                        

                        <h5>
                            {`Total Price: U$S ${totalPrice()}`} 
                                
                        </h5>    
                        
                        </div>
                    </Col>

                    
                    
                    <button className="btn" onClick={()=> emptyCart()}>EMPTY CART</button>

                    
                    <form
                        onSubmit={generateOrder}>
                             
                            <button className="btn">GENERATE ORDER</button>
                        </form>
                
                </Row>
            )
        } 
    }

export default Cart;