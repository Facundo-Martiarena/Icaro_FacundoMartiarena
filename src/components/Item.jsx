import React from 'react';
import './Item.css'
import { useState } from 'react';
import { Label } from 'reactstrap';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';


function Item(elem) {

    const [string, setString] = useState('');
    function mostrarModelo(){
        setString(elem.model);
        
    }


    function onAdd(cant){
        console.log(cant);
    }


    console.log(elem);
    return (
        <>
            <Link to={`/detalle/${elem.id}`}>
                <div className="item" onClick={mostrarModelo}>
                    <div  key={elem.id} className="card">
                        <div className="detail">
                            
                            <img className="imag" src={elem.photoURL} width={elem.ancho}/>
                            <p className="marca">{elem.marca} </p>
                            {string !== '' && <Label>{string}</Label> }
                            {/* <p className="model">{elem.model} </p> */}
                            <p className="price">{elem.price}</p>
                            {/* <ItemCount initial='1' stock={elem.stock} onAdd={onAdd}/> */}
                            
                            {/* <button className="btn" onClick={mostrarModelo}>Detalles</button> */}
                            
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Item
