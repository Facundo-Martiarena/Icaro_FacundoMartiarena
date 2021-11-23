import React from 'react';
import Item from './Item';
import './ItemList.css'


function ItemList ({products}) {

    

    return (
        <>
            <div className="row">
            
                {products.map(prod => <div className="rowMap" 
                            key={ prod.id } >
                        
                        <Item 
                                id={ prod.id }
                                photoURL={ prod.photoURL } 
                                marca={ prod.marca } 
                                model={ prod.model } 
                                price={ prod.price }
                                ancho = { prod.ancho } 
                                stock = { prod.stock }
                                categoria = { prod.categoria }
                                btn = { prod.btn }
                                
                            
                        
                        />
                        
                                    
                </div>)}
                                                    
            </div>
        </>
         
    )
        
    
}

export default ItemList
