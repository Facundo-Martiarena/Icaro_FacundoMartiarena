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
                    <li><a className="cart" title="Qty Cart">
                        <span id="cart_menu_num" data-action="cart-can" class="badge rounded-circle">{ totalItems() !== 0 && totalItems() }</span>
                    </a></li>
                </Link>
                <Link to="/cart">
                    <CartWidget/>
                </Link>
                    
                <Link to="/categoria/niño">
                    <li><a href="niño">Niño</a></li>
                </Link>
                <Link to="/categoria/mujer">
                    <li><a href="mujer">Mujer</a></li>
                </Link>
                <Link to="/categoria/hombre">
                    <li><a href="hombre">Hombre</a></li>
                </Link>
                <Link to='/products'>
                    <li><a href="productos">Productos</a></li>
                </Link>
                <Link to='/'>
                    <li><a href="home">Home</a></li>
                </Link>
                

                
                
            </ul>
        </div>
    )

}

export default NavBar;