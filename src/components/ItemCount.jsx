import React from 'react'
import { useState } from 'react';

const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(1);

    function Sumar(){
        if(count < stock){
            setCount(count + 1);
        }
    }
        
    function Restar(){
        if(count > 0){
            setCount(count - 1);
            
        }else if(count === 0){
            alert('No tiene más stock')
        }
    }
    
    function Agregar(){
        onAdd(count);
        stock = stock - count;
        setCount(1);        
    }


    return (
        <>
            <section className="itemCount">
                <button onClick={Sumar}>+</button>
                    {count}
                <button onClick={Restar}>-</button>
                <button onClick={Agregar}>Agregar al Carrito</button>
            </section>  
        </>
    )
}

export default ItemCount
