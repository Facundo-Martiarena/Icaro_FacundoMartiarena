import { Row, Col} from "react-bootstrap";
import { useCartContext } from "./../context/CartContext";
import EmptyCart from "./EmptyCart";
import React from 'react';
import Brief from "./Brief";
import { Link } from "react-router-dom";


function Cart() {


    const {cartList, emptyCart } = useCartContext()
    
    if(cartList.length > 0){

            return (
                <Row>
                    <Col>
                        <Brief />
                    </Col>

                    <button className="btn" onClick={()=> emptyCart()}>EMPTY CART</button>

                    <Link to="/checkout">
                        <button className="btn" >GENERATE ORDER</button>
                    </Link>
                </Row>
            )
        } 
        else{
            return(
                
                <EmptyCart />
            )
        }
    }

export default Cart;