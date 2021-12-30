import React from 'react'
import { useState } from 'react';
import { useCartContext } from "../context/CartContext";
import { getFirestore } from '../service/getFirestore.js';
import firebase from 'firebase';

const Checkout = () => {

    const { cartList, totalPrice } = useCartContext()
    const [idOrder, setIdOrder] = useState('')


    const [data, setData] = useState({
        name: '',
        email: '',
        validate: '',
        phone: '',
    })




    const generateOrder = (e) => {



        e.preventDefault();

        
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

        dbQuery.collection('orders').add(order)
        .then(resp => setIdOrder(resp.id))
        .catch(err=> console.log(err))

    
    
    
}

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }


    
    


    return (
        <>
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
                            {`Total Price: U$S ${totalPrice()}`} 
                        </h5>
                    </td>
                </tr>

            </div>

            <div>
                <form
                    onSubmit={generateOrder} 
                    onChange={handleChange}
                    >
                    <table>
                    
                        
                    <hr/>
                        <label>Ingrese sus datos</label>
                        <div>
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
                                    <button className="btn">Checkout</button>
                                </td>
                            </tr>
                            
                        </div>
                        </table> 
                        <div>
                            <section>
                                {idOrder!=='' && <label>ORDER ID: {idOrder}, Precio Total: USD {totalPrice()}</label>}
                            </section>

                        </div>
                        

                    

                </form>

            </div>
        </>
    )
}

export default Checkout