import { useState, createContext, useContext } from 'react';

const CartContext= createContext([]);


 
export const  useCartContext =()=> useContext(CartContext)



const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])

    const agregarProducto = (item, id) => {
        if(isInCart(item.producto.id)){

            setCartList([...cartList]);
        } else {
            setCartList([...cartList, item])
        }

    }
    const isInCart = (id) => {
        return cartList.some(obj => obj.producto.id === id)
    }

    const varciarCarrtio=()=>{
        setCartList([])
    }

    const precioTotal =()=>{
        return cartList.reduce((acum, valor)=>(acum + (valor.cantidad * valor.price)), 0) 
    }

    
    return(
        <CartContext.Provider value={{
            cartList, 
            agregarProducto,
            varciarCarrtio,
            precioTotal
        }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider