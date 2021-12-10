import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { itemPromise } from "./../bd/getFetch.js";
import { getFirestore } from '../service/getFirestore.js'
import {ItemDetail} from "./ItemDetail";




const ItemDetailContainer = () => {

  const [item, setItem] = useState({});
  
  const [loading, setLoading] = useState(true);

  const { idProd } = useParams();
//   console.log(id);

  useEffect(() => {
    const db = getFirestore()
    db.collection('productos').doc(idProd).get()
    .then( res => {        
      // setItem(prodEncontrado.find( product => product.id.toString() === idProd ));
        setItem( {idProd: res.id, ...res.data()} )
    })    
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))
    
    // eslint-disable-next-line       
  },[])  

  console.log(item);

  return (
    <div className="contenedorPadre">
            <div className="contenedorHijo">
                {loading 
                  ?
                <img className="loadGIF" src="https://i.ibb.co/3hpBN0Z/load.gif" alt="load" border="0"/> 
                  :
                <ItemDetail item = { item }/>}
                
            </div>
        </div>
  );
};

export default ItemDetailContainer;
