import { useState, createContext, useContext } from 'react';
import React from 'react';

const CartContext= createContext([]);


 
export const  useCartContext =()=> useContext(CartContext)



const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])

    const addProduct = (item) => {

        
        if (isInCart(item.product.idProd)) {
            const index = cartList.findIndex(i => i.product.idProd === item.product.idProd)
            const qtyOld = cartList[index].quantity
  
            cartList.splice(index, 1)
            setCartList([...cartList, { ...item, quantity: item.quantity + qtyOld}])
          } else {
            setCartList([...cartList, {...item, quantity: item.quantity}])
          }
      }

    const isInCart = (id) => {
        return cartList.some(obj => obj.product.idProd === id)
    }

    const emptyCart=()=>{
        setCartList([])
    }

    const deleteItem=(id)=>{
        setCartList(cartList.filter(item=>item.product.idProd!==id))
    }

    const totalPrice =()=>{
        return cartList.reduce((acum, valor)=>(acum + (valor.quantity * valor.product.price)), 0) 
    }

    const totalItems =()=>{
        return cartList.reduce((acum, valor)=> acum = acum + valor.quantity, 0) 
    }
    
    return(
        <CartContext.Provider value={{
            cartList, 
            addProduct,
            emptyCart,
            totalItems,
            totalPrice,
            deleteItem
        }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider