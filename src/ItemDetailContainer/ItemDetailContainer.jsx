import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { itemPromise } from "./../bd/getFetch.js";
import {ItemDetail} from "./ItemDetail";




const ItemDetailContainer = () => {

  const [item, setItem] = useState({});
  
  const [loading, setLoading] = useState(true);

  const { idProd } = useParams();
//   console.log(id);

  useEffect(() => {

    
    itemPromise.then((prodEncontrado) => {
      console.log("OK");
      setItem(prodEncontrado.find( product => product.id.toString() === idProd ));
    })
    .catch((error)=>{
        console.log('ERROR');
    })
    .finally(()=>{
        setLoading(false)
    }
    )
  }, [idProd]);

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
