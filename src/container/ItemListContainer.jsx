
import './ItemListContainer.css';
import {useState ,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../service/getFirestore'
import React from 'react'
import ItemList from './ItemList.jsx';




const ItemListContainer = () => {

    
    const[products, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

   
    const { idCategory } = useParams();


    useEffect(() => {
        
        const db = getFirestore();

        const dbCollection = db.collection('productos');
        
        const dbQueryCollection = idCategory ? dbCollection.where('categoria', '==', idCategory) : dbCollection;


        dbQueryCollection.get()
        .then(data => setProduct(   data.docs.map(pro => ( { id: pro.id, ...pro.data() } ))   ))
        .catch(err=> console.log(err))
        .finally(()=> setLoading(false)) 

        
    },[idCategory])

    
    return (
        <div className="containerFather">
            <div className="containerChild">
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
