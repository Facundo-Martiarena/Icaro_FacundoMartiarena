import React from 'react';
import './Item.css'

function Item(elem) {


    console.log(elem);
    return (
        <>
            <div className="item">
                <div  key={elem.id} className="card">
                    <div className="detail">
                        <img className="imag" src={elem.photoURL} width={elem.ancho}/>
                        <p className="marca">{elem.marca} </p>
                        <p className="model">{elem.model} </p>
                        <p className="price">{elem.price}</p>
                        <button className="btn">{elem.btn}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item
