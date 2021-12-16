
import React from 'react';
import Item from './Item';


const ItemList = (props) => {

    

    return (
        <>
            {props.products.map((item, index) => {
                return (

                        <Item key={index} item={item} />

                )
            })}
        </>
    )
        
    
}

export default ItemList
