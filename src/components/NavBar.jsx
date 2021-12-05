import React from 'react'
import CartWidget from './CartWidget';

import logo_sn from './logo.png';
import { Link } from 'react-router-dom';
import './NavBar.css'


export const NavBar = () => {

  
    return (

        
    
        // <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        //     <div class="container">
        //         <a class="navbar-brand" href="#">ÍCARO</a>
        //         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //             <span class="navbar-toggler-icon"></span>
        //         </button>
        //         <div class="collapse navbar-collapse" id="navbarSupportedContent">
        //             <ul class="navbar-nav ms-auto">
        //                 <Link to="/">
        //                     <li class="nav-item">
        //                         <a class="nav-link active" aria-current="page" href="#">Home</a>
        //                     </li>
        //                 </Link>
                        
        //                 <li class="nav-item">
        //                     <a class="nav-link" href="#">Link</a>
        //                 </li>
        //                 <li class="nav-item dropdown">
        //                     <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        //                         Categorías
        //                     </a>
        //                     <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                
        //                     <Link to="/categoria/niño">
        //                         <li><a href="contact.asp">Niño</a></li>
        //                     </Link>
        //                     <Link to="/categoria/mujer">
        //                         <li><a href="contact.asp">Mujer</a></li>
        //                     </Link>
        //                     <Link to="/categoria/hombre">
        //                         <li><a href="contact.asp">Hombre</a></li>
        //                     </Link>
        //                     </ul>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
        <div>
           <ul>
                <Link to='/'>
                    <img src={logo_sn} className="Header-logo" alt="logo" />
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