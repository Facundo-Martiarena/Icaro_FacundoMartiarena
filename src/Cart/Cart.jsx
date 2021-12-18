import { Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "./../context/CartContext";
import React, { useState } from 'react';
import { getFirestore } from '../service/getFirestore.js';
import firebase from 'firebase';
import Modal from './../components/Modal/Modal';


function Cart(item) {

    const [idOrder, setIdOrder] = useState('')

    const {cartList, emptyCart, totalPrice, deleteItem} = useCartContext()

    const [active, setActive] = useState(false);

    const toggle = () => {
        setActive(!active);
    }

    const [formData, setFormData] = useState({
        name:'',
        phone:'',
        email: ''
    })
 

    const generateOrder = (e) => {
        e.preventDefault()

        
        const order = {}
        order.date = firebase.firestore.Timestamp.fromDate(new Date());  


        order.buyer = formData;
        order.total = totalPrice()

      
        order.items = cartList.map(cartItem => {
            const id = cartItem.product.idProd
            const name = cartItem.product.brand
            const price = cartItem.product.price * cartItem.quantity

            return {id,name, price} 
        })

        const dbQuery = getFirestore()  
        dbQuery.collection('orders').add(order)
        .then(resp => setIdOrder(resp.id))
        .catch(err=> console.log(err))


        

    }

    const handleChange=(e)=>{
        setFormData({
             ...formData, 
             [e.target.name]: e.target.value
         })
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

                    <button className="btn" onClick={toggle}>GENERATE ORDER</button>
                    <Modal active={active} toggle={toggle}>
                        
                        <form
                            
                            onSubmit={generateOrder}
                            onChange={handleChange}
                            
                        >
                            
                                <input type='text' name='name' placeholder='NAME' value={formData.name}/>
                                <input type='text' name='phone'placeholder='PHONE' value={formData.phone}/>
                                <input type='email' name='email'placeholder='EMAIL' value={formData.email}/>
                                <input type='email' name='validate'placeholder='VALIDATE EMAIL' value={formData.email}/>
                                <button className="btn" >SEND</button>
                        </form>
                        <section>
                            {idOrder!==''&& <label>ORDER ID: {idOrder}</label> }
                        </section>
                    </Modal>
                </Row>
            )
        } 
    }

export default Cart;