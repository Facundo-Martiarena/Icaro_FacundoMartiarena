import React from 'react';
import { useCartContext } from '../../context/CartContext';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemCount = ({stock, onAdd}) => {

    const [count, setCount] = useState(1);
    const [state, setState] = useState(true);
    
    function Sumar(){
        if(count < stock){
            setCount(count + 1);
        }
    }
        
    function Restar(){
        if(count > 0){
            setCount(count - 1);
            
        }else if(count < 1){
            alert('No tiene más stock')
        }
    }
    
    function Agregar(){
        onAdd(count);
        stock = stock - count;
        setCount(1);  
        setState(false);    
    }

    
    return (
        <>
            <section className="itemCount">
                <button className="btn" onClick={Sumar}>+</button>
                    {count}
                <button className="btn" onClick={Restar}>-</button>
                {state ?
                    <button className="btn" onClick={Agregar}>AGREGAR AL CARRITO</button>
                                            :
                    <>
                        <Link to="/cart">
                            <button className="btn">TERMINAR COMPRA</button>
                        </Link> 
                        <Link to="/products">
                            <button className="btn">CONTINUAR COMPRANDO</button>
                        </Link>
                    </>
                }   
            </section>  
        </>
    )
}

export default ItemCount
