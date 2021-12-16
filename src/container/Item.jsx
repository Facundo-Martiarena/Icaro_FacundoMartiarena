import React from 'react';
import './Item.css'
import { useState } from 'react';
import { Label } from 'reactstrap';
import { Link } from 'react-router-dom';


export default function Item ({item}) {

    const [string, setString] = useState('');
    function showModel(){
        setString(item.model);
        
    }

    return (
        <>        
                <Link to={`/item/${item.id}`} style={{ textDecoration: 'none' }}>
                    <div className="item" onClick={showModel}>
                                <img className="imag" src={item.photoURL} width={item.ancho} alt="foto"/>
                        <div  key={item.id} className="card">
                            
                                <h5 className="brand">{item.brand} </h5>
                                {string !== '' && <Label>{string}</Label> }
                                <p className="model">{item.model} </p>                                
                            
                        </div>
                    </div>
                </Link>
          
        </>
    )
}