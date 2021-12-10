import { useState, createContext, useContext } from 'react';
import React, { Component }  from 'react';

const CartContext= createContext([]);


 
export const  useCartContext =()=> useContext(CartContext)



const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])

    const agregarProducto = (item) => {

        
        if (isInCart(item.producto.idProd)) {
            const index = cartList.findIndex(i => i.producto.idProd === item.producto.idProd)
            const qtyOld = cartList[index].quantity
  
            cartList.splice(index, 1)
            setCartList([...cartList, { ...item, quantity: item.quantity + qtyOld}])
          } else {
            setCartList([...cartList, {...item, quantity: item.quantity}])
          }
      }

    const isInCart = (id) => {
        return cartList.some(obj => obj.producto.idProd === id)
    }

    const vaciarCarrtio=()=>{
        setCartList([])
    }

    const borrarItem=(id)=>{
        setCartList(cartList.filter(item=>item.producto.id!==id))
    }

    const precioTotal =()=>{
        return cartList.reduce((acum, valor)=>(acum + (valor.quantity * valor.producto.price)), 0) 
    }

    const totalItems =()=>{
        return cartList.reduce((acum, valor)=> acum = acum + valor.quantity, 0) 
    }
    
    return(
        <CartContext.Provider value={{
            cartList, 
            agregarProducto,
            vaciarCarrtio,
            totalItems,
            precioTotal,
            borrarItem
        }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider