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


    function onAdd(cant){
        console.log(cant);
    }


    console.log(item);
    return (
        <>
            
                <Link to={`/item/${item.id}`}>
                    <div className="item" onClick={mostrarModelo}>
                                <img className="imag" src={item.photoURL} width={item.ancho} alt="foto"/>
                        <div  key={item.id} className="card">
                            <div className="detail">
                                
                                <p className="marca">{item.marca} </p>
                                {string !== '' && <Label>{string}</Label> }
                                <p className="model">{item.model} </p>
                                {/* <p className="price">{item.price}</p> */}
                                {/* <ItemCount initial='1' stock={elem.stock} onAdd={onAdd}/> */}
                                
                                {/* <button className="btn" onClick={mostrarModelo}>Detalles</button> */}
                                
                            </div>
                        </div>
                    </div>
                </Link>
          
        </>
    )
}