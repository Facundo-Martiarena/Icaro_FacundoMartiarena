
import React from 'react';
import Item from './Item';
import './ItemList.css'


const ItemList = (props) => {

    

    return (

        props.products.map(prod => {
            return (

                    <Item detalle={prod} />

            )
        })
    )
        
    
}

export default ItemList
