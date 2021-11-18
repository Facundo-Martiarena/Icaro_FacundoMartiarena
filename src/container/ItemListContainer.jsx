import './ItemListContainer.css';
import {useState ,useEffect} from 'react';
import {getFetch} from './../bd/getFetch';
import React from 'react'
import ItemList from './../components/ItemList.jsx';




const ItemListContainer = () => {

    
    const[products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true) 

    

    useEffect(() => {
        getFetch//api Fetch()
        .then(data => {
            console.log('llamada Api')   
            setProducts(data)     
        })
        //.then(resp => console.log(resp))
        .catch(err => console.log(err))    
        .finally(()=> setLoading(false))
        
        return () => {
            console.log('clean')
        }
    },[])

    return (
        <div className="contenedorPadre">
            <div className="contenedorHijo">
                {loading ? <img className="loadGIF" src="https://i.ibb.co/3hpBN0Z/load.gif" alt="load" border="0"/> : <ItemList products={ products }/>}
            </div>
        </div>
    )
}

export default ItemListContainer;
