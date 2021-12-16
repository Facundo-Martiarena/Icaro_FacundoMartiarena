import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from '../service/getFirestore.js'
import {ItemDetail} from "./ItemDetail";




const ItemDetailContainer = () => {

  const [item, setItem] = useState({});
  
  const [loading, setLoading] = useState(true);

  const { idProd } = useParams();
  useEffect(() => {
    const db = getFirestore()
    db.collection('productos').doc(idProd).get()
    .then( res => {        
        setItem( {idProd: res.id, ...res.data()} )
    })    
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))
    
    // eslint-disable-next-line       
  },[])  


  return (
    <div className="containerFather">
            <div className="containerChild">
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
