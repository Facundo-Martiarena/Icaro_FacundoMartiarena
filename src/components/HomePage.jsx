import React from 'react'
import ItemListContainer from '../container/ItemListContainer'
import './HomePage.css'




const HomePage = () => {

    
    
    return (

        
        <div className="HomePage">
            <header className="PPal-header">
                <img className='imagHP' src="https://i.ibb.co/C5KRKCH/homepage.jpg" alt="homepage" border="0"/>                
            </header>
            <body className="PPal-body">
                <ItemListContainer/>
            </body>
            
        </div>
    )
}

export default HomePage
