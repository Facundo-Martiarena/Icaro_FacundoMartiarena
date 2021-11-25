import React from 'react'
import CartWidget from './CartWidget';
import logo_sn from './logo.png';
import { Link } from 'react-router-dom';
import './NavBar.css'


export const NavBar = () => {

  
    return (
        <div>
           <ul>
                <Link to='/'>
                    <img src={logo_sn} className="Header-logo" alt="logo" />
                </Link>
                
                <Link to="/cart">
                    <CartWidget/>
                </Link>
                <Link to="/products/niño">
                    <li><a href="contact.asp">Niño</a></li>
                </Link>
                <Link to="/products/mujer">
                    <li><a href="contact.asp">Mujer</a></li>
                </Link>
                <Link to="/products/hombre">
                    <li><a href="contact.asp">Hombre</a></li>
                </Link>
                <Link to='/products'>
                    <li><a>Productos</a></li>
                </Link>
                <Link to='/'>
                    <li><a>Home</a></li>
                </Link>
                

                
                
            </ul>
        </div>
    )
}

export default NavBar;