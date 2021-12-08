import { useState, createContext, useContext } from 'react';

const CartContext= createContext([]);


 
export const  useCartContext =()=> useContext(CartContext)



const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])

    const agregarProducto = (item, id) => {
        if(isInCart(item.producto.id)){

            setCartList([...cartList])

        } else {
            setCartList([...cartList, item])
        }

    }
    const isInCart = (id) => {
        return cartList.some(obj => obj.producto.id === id)
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
