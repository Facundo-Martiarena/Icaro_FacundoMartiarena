import React from 'react'
import CartWidget from './CartWidget';
import { useCartContext } from './../context/CartContext';
import logo_sn from './logo.png';
import { Link } from 'react-router-dom';
import './NavBar.css'


export const NavBar = () => {

    const { totalItems } = useCartContext();
  
    return (
        
        
        <div>
           <ul>
                <Link to='/'>
                    <img src={logo_sn} className="Header-logo" alt="logo" />
                </Link>
                
                <Link to="/cart">

                    {totalItems() > 0 ?

                            <>
                                <li><a className="cart" title="Qty Cart">
                                    <span id="cart_menu_num" data-action="cart-can" class="badge rounded-circle">{ totalItems() }</span>
                                </a></li>
                                <CartWidget/>
                            </>
                        :

                        <>
                            <li><a className="cart" title="Qty Cart"></a></li>
                            <li><a className="addToCart" alt="GO TO CART"/></li>
                        </>
                    }
                </Link>
                <Link to="/cart">
                </Link>
                    
                <Link to="/categoria/niño">
                    <li><a href="kids">Kids</a></li>
                </Link>
                <Link to="/categoria/mujer">
                    <li><a href="women">Women</a></li>
                </Link>
                <Link to="/categoria/hombre">
                    <li><a href="men">Men</a></li>
                </Link>
                <Link to='/products'>
                    <li><a href="products">Products</a></li>
                </Link>
                <Link to='/'>
                    <li><a href="home">Home</a></li>
                </Link>
                

                
                
            </ul>
        </div>
    )

}

export default NavBar;