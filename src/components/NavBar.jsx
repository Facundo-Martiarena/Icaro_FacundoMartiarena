import React from 'react'
import CartWidget from './CartWidget';
import logo_sn from './logo.png';
import './NavBar.css'


export const NavBar = () => {

  
    return (
        <div>
           <ul>
               
                <img src={logo_sn} className="Header-logo" alt="logo" />
                <CartWidget/>
                <li><a href="default.asp">Home</a></li>
                <li><a href="news.asp">Noticias</a></li>
                <li><a href="contact.asp">Contacto</a></li>
                <li><a href="about.asp">Nosotros</a></li>
                
                
            </ul>
        </div>
    )
}

export default NavBar;