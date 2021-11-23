
import './ItemListContainer.css';
import {useState ,useEffect} from 'react';
import {getFetch} from './../bd/getFetch';
import { Link, useParams } from 'react-router-dom';
import React from 'react'
import ItemList from './../components/ItemList.jsx';




const ItemListContainer = () => {

    
    const[products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

   
    const { idCategoria } = useParams();
    // const { idProducto } = useParams();


    useEffect(() => {

        if(idCategoria){

            getFetch                            //api Fetch()
            .then(data => {
                console.log('llamada Api')   
                setProducts(data.filter(prod => prod.categoria === idCategoria));
            })
            .catch(err => console.log(err))    
            .finally(()=> setLoading(false))
            
            return () => {
                console.log('clean')
            }

        }else{

            getFetch                            //api Fetch()
            .then(data => {
                console.log('llamada Api')   
                setProducts(data)     
            })
            .catch(err => console.log(err))    
            .finally(()=> setLoading(false))
            
            return () => {
                console.log('clean')
            }
        }
    },[idCategoria])

    
    return (
        <div className="contenedorPadre">
            <div className="contenedorHijo">
                {/* <h1>¡NUEVOS ARRIBOS!</h1> */}
                {loading ? <img className="loadGIF" src="https://i.ibb.co/3hpBN0Z/load.gif" alt="load" border="0"/> : <ItemList products = { products }/>}
                
            </div>
        </div>
    )
}

export default ItemListContainer;
