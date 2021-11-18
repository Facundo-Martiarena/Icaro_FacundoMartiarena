import React from 'react'
import Item from './Item';
import './ItemList.css'


function ItemList ({products}) {

    console.log(products);


    return (
        <>
            <div className="row">
            
                {products.map(prod => <div className="rowMap" 
                            key={ prod.id } >
                        
                        <Item 
                                photoURL={ prod.photoURL } 
                                marca={ prod.marca } 
                                model={ prod.model } 
                                ancho = { prod.ancho } 
                                btn = { prod.btn }
                            
                        
                        />
                        
                                    
                </div>)}
                                                    
            </div>
        </>
         
    )
        
    
}

export default ItemList
