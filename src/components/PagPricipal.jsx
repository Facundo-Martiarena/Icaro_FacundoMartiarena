import React from 'react'
import logo from './logo.png';
import './PagPrincipal.css'

const PagPricipal = () => {
    return (
        <div className="PagPrincipal">
            <header className="PPal-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Bienvenidos a ÍCARO, la mejor página de compra de calzados deportivos.
                </p>
                
            </header>
            
        </div>
    )
}

export default PagPricipal
