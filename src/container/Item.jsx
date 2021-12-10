import React from 'react';
import './Item.css'
import { useState } from 'react';
import { Label } from 'reactstrap';
import ItemCount from '../components/Count/ItemCount';
import { Link } from 'react-router-dom';


export default function Item ({item}) {

    const [string, setString] = useState('');
    function mostrarModelo(){
        setString(item.model);
        
    }

    return (
        <>        
                <Link to={`/item/${item.id}`} style={{ textDecoration: 'none' }}>
                    <div className="item" onClick={mostrarModelo}>
                                <img className="imag" src={item.photoURL} width={item.ancho} alt="foto"/>
                        <div  key={item.id} className="card">
                            
                                <h5 className="marca">{item.marca} </h5>
                                {string !== '' && <Label>{string}</Label> }
                                <p className="model">{item.model} </p>                                
                            
                        </div>
                    </div>
                </Link>
          
        </>
    )
}