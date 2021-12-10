
import './ItemListContainer.css';
import {useState ,useEffect} from 'react';
import {fetch} from './../bd/getFetch';
import { Link, useParams } from 'react-router-dom';
import { getFirestore } from '../service/getFirestore'
import React from 'react'
import ItemList from './ItemList.jsx';




const ItemListContainer = () => {

    
    const[products, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

   
    const { idCategoria } = useParams();
    // const { idProducto } = useParams();


    useEffect(() => {
        
        const dbQuery = getFirestore()
        

        if(idCategoria){

            dbQuery.collection('productos').where('categoria', '==', idCategoria).get() // traer todo
                .then(data => setProduct(   data.docs.map(pro => ( { id: pro.id, ...pro.data() } ))   ))
                .catch(err=> console.log(err))
                .finally(()=> setLoading(false)) 

        }else{

            dbQuery.collection('productos').get() // traer todo
                .then(data => setProduct(   data.docs.map(pro => ( { id: pro.id, ...pro.data() } ))   ))
                .catch(err=> console.log(err))
                .finally(()=> setLoading(false))
        }
    },[idCategoria])

    
    return (
        <div className="contenedorPadre">
            <div className="contenedorHijo">
                {/* <h1>¡NUEVOS ARRIBOS!</h1> */}
                {loading 
                    ?
                <img className="loadGIF" src="https://i.ibb.co/3hpBN0Z/load.gif" alt="load" border="0"/> 
                    :
                <ItemList products = { products }/>}
                
            </div>
        </div>
    )
}

export default ItemListContainer;
