import React from 'react'
import logo from './logo.png';
import './HomePage.css'

const HomePage = () => {
    return (
        <div className="HomePage">
            <header className="PPal-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Welcome to ÍCARO, the best place to buy sports shoes.
                </p>
                
            </header>
            
        </div>
    )
}

export default HomePage
