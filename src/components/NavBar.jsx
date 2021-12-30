import React from 'react'
import CartWidget from './CartWidget';
import { useCartContext } from './../context/CartContext';
import logo_sn from './logo.png';
import { Link } from 'react-router-dom';
import './NavBar.css'


const NavBar = () => {

    const { totalItems } = useCartContext();
  
    return (
        
        
        <div>
           <ul>
                <Link to='/'>
                    <img src={logo_sn} className="Header-logo" alt="logo" />
                </Link>
                
                <Link to="/cart">
                    <>
                        <li><a className="cart" title="Qty Cart">
                            <span id="cart_menu_num" data-action="cart-can" class="badge rounded-circle">{ totalItems() !== 0 && totalItems() }</span>
                        </a></li>
                        <CartWidget/>
                    </>
                </Link> 
                <Link to="/categoria/kids">
                    <li><a>Kids</a></li>
                </Link>
                <Link to="/categoria/women">
                    <li><a>Women</a></li>
                </Link>
                <Link to="/categoria/men">
                    <li><a>Men</a></li>
                </Link>
                <Link to='/products'>
                    <li><a>Products</a></li>
                </Link>
                <Link to='/'>
                    <li><a>Home</a></li>
                </Link>
                
                

                
                
            </ul>
        </div>
    )

}

export default NavBar;