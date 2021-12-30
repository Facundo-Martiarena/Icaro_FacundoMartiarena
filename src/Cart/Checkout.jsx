import React from 'react'
import { useState } from 'react';
import { useCartContext } from "../context/CartContext";
import { getFirestore } from '../service/getFirestore.js';
import firebase from 'firebase';
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Checkout = () => {

    const { cartList, totalPrice } = useCartContext()
    const [idOrder, setIdOrder] = useState('')
    const [orderReady, setOrderReady] = useState("false");


    const [data, setData] = useState({
        name: '',
        lastname: '',
        email: '',
        validate: '',
        address: '',
        phone: '',
    })




    const generateOrder = (e) => {

        
        const order = {};
        order.date = firebase.firestore.Timestamp.fromDate(new Date());  

        
        order.buyer = data;
        order.total = totalPrice();

    
        order.items = cartList.map(cartItem => {
            const id = cartItem.product.idProd
            const name = cartItem.product.brand
            const price = cartItem.product.price * cartItem.quantity

            return {id,name, price} 
        })

    

        const dbQuery = getFirestore();  

        dbQuery.collection('orders')
        .add(order)
        .then(resp => setIdOrder(resp.id))
        .catch(err=> console.log(err))
        .finally(setOrderReady("true"));

    
    
    
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (data.email === data.validate) {
        generateOrder(data);
        } else {
            alert("los email son diferentes, escríbelos de nuevo.");
        }
    }

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }


    
    


    return (
        <Card style={{ width: '25rem', alignItems: 'center', marginLeft: 500, marginTop: 50 }}>
            <div>
                

                <tr>
                    <td>
                    
                        {
                            cartList.map(prod => 
                                <h5 key={prod.product.id}>
                                    <th>
                                        {prod.quantity}
                                    
                                        {"  - "} {prod.product.brand} {"  -  "} {prod.product.model}   
                                    </th>
                                </h5>)
                        }
                        <hr/>
                        <h5>
                            {`TOTAL PRICE: USD ${totalPrice()}`} 
                        </h5>
                    </td>
                </tr>

            </div>

            <div>
                <form
                    onSubmit={handleSubmit} 
                    onChange={handleChange}
                    >
                    <table>
                    
                        
                    <hr/>
                        <Card.Title>ENTER THE DATA TO BE ABLE TO SEND THE SHIPMENT</Card.Title>
                        <div style={{marginLeft: 40, marginTop: 15}}>
                            <tr>
                                <td>
                                    <label>Name</label>
                                </td>
                                <td>
                                    <input type='text' name='name' value={data.name}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Last Name</label>
                                </td>
                                <td>
                                    <input type='text' name='lastname' value={data.lastname}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Phone</label>
                                </td>
                                <td>
                                    <input type='text' name='phone' value={data.phone}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Email</label>
                                </td>
                                <td>
                                    <input type='text' name='email' value={data.email}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Repeat Email</label>
                                </td>
                                <td>
                                    <input type='text' name='validate' value={data.validate}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Address</label>
                                </td>
                                <td>
                                    <input type='text' name='address' value={data.address}/>
                                </td>

                            </tr>
                            
                            
                        </div>
                        </table> 
                        <div>
                            <td>
                            {orderReady === "false" ?

                                (
                                    <button className="btn" style={{marginLeft: 150, marginTop: 15}}>Checkout</button>
                                )
                                
                                :
                                
                                (<Link to={'/products'}>
                                    <button className="btn" style={{marginLeft: 120, marginTop: 15}}>BACK TO PRODUCTS</button>
                                </Link>)
                            }
                            </td>
                            <section>
                                {idOrder!=='' && <label>ORDER ID: {idOrder}, TOTAL PRICE: USD {totalPrice()}</label>}
                            </section>

                        </div>
                        

                    

                </form>

            </div>
        </Card>
    )
}

export default Checkout