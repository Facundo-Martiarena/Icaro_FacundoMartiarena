import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemCount = ({stock, onAdd}) => {

    const [count, setCount] = useState(1);
    const [state, setState] = useState(true);
    
    function add(){
        if(count < stock){
            setCount(count + 1);
        }else{
            alert('Not enough stock');
        }
    }
        
    function subtract(){
        if(count > 0){
            setCount(count - 1);
            
        }else{
            alert('No more stock')
        }
    }
    
    function addToCart(){
        onAdd(count);
        stock = stock - count;
        setCount(1);  
        setState(false);    
    }

    
    return (
        <>
            <section className="itemCount">
                <button className="btn" onClick={add}>+</button>
                    {count}
                <button className="btn" onClick={subtract}>-</button>
                {state ?
                    <button className="btn" onClick={addToCart}>   ADD TO CART   </button>
                                            :
                    <>
                        <Link to="/cart">
                            <button className="btn">COMPLETE PURCHASE</button>
                        </Link> 
                        <Link to="/products">
                            <button className="btn">CONTINUE SHOPPING</button>
                        </Link>
                    </>
                }   
            </section>  
        </>
    )
}

export default ItemCount
