import React from 'react'
import {useState ,useEffect} from 'react';
import { useParams } from 'react-router'
import { getFetch } from '../bd/getFetch';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    
    const { idProducto } = useParams
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)


    useEffect(() => {

        // if(idProducto){

            const getIdProducto = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(idProducto)
                }, 2000)
            })

            getIdProducto.then(id => {
                setProduct(getFetch(id))
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

            return () => {
                console.log('cleanup')

            }

        //     getFetch                            //api Fetch()
        //     .then(data => {   
        //         setProduct(data.filter(prod => prod.id === idProducto));
        //     })
        //     .catch(err => console.log(err))    
        //     .finally(()=> setLoading(false))
            
        //     return () => {
        //         console.log('clean')
        //     }

        // }else{

        //     getFetch                           //api Fetch()
        //     .then(data => {
                     
        //     })
        //     .catch(err => console.log(err))    
        //     .finally(()=> setLoading(false))
            
        //     return () => {
        //         console.log('clean')
        //     }
        // }
    },[idProducto])

    console.log(product)
    
    
    return (
        <>
            <div>
                {loading ? 'Cargando...' : <ItemDetail product = {product}/>}
            </div>
        </>
    )
}

export default ItemDetailContainer
