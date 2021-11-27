import React, { useState } from "react";
import './../container/Item.css'
// import Item from './../container/Item.jsx';


export const ItemDetail = ( {item} ) => {


  // const [irCart, setIrCart] = useState(false);
  
  // const onAdd = (contador) => {
  //   console.log("Udselecciono ", contador);
  //   setIrCart(true);
  // };

  // const [string, setString] = useState('');
  //   function mostrarModelo(){
  //       setString(item.model);
        
  //   }



  return (


        
        <>
                <div className="item" /*onClick={mostrarModelo}*/>
                    <div  key={item.id} className="card">
                        <div className="detail">
                            
                            <img className="imag" src={item.photoURL} width={item.ancho} alt="foto"/>
                            <p className="marca">{item.marca} </p>
                            {/* {string !== '' && <Label>{string}</Label> } */}
                            {/* <p className="model">{item.model} </p> */}
                            <p className="price">{item.price}</p>
                            {/* <ItemCount initial='1' stock={item.stock} onAdd={onAdd}/> */}
                            
                            {/* <button className="btn" onClick={mostrarModelo}>Detalles</button> */}
                            
                        </div>
                    </div>
                </div>

        </>
  );
};

