import React, { useState, useEffect } from "react";
import './../container/ItemListContainer.jsx';
import { useParams } from "react-router-dom";
import { itemPromise } from "./../bd/getFetch";
import ItemDetail from "./ItemDetail";




const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(true)
//   console.log(id);

  useEffect(() => {
    itemPromise.then((resp) => {
      setItem(resp.find(item => item.id.toString() === id));
      console.log(item);
    })
    .catch(err => console.log(err))
    .finally(() => setLoading(false))

  return () => {
    console.log('clean')
  }
  }, [id,item]);

  return (
    <div className="contenedorPadre">
            <div className="contenedorHijo">
                {loading ? <img className="loadGIF" src="https://i.ibb.co/3hpBN0Z/load.gif" alt="load" border="0"/> : <ItemDetail item = { item }/>}
                
            </div>
        </div>
  );
};

export default ItemDetailContainer;
