import { Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "./../context/CartContext"


function Cart(item) {

    const {cartList, vaciarCarrtio, precioTotal, borrarItem} = useCartContext()
    
    if(cartList.length === 0){
        return(
            <div className="text-center">
                <h3>No hay productos en el carrito</h3>
                <Link to="/products">
                    <button className="btn">Seguir comprando</button>
                </Link>
            </div>
        )
    }else{

            return (
                <Row>
                    <Col>
                        <div>
                        
                        { cartList.map(prod => 
                            <h5 key={prod.producto.id}>
                                {"Cantidad: "}{prod.quantity} {" - Producto: "} {prod.producto.marca} {" - Precio: U$S"} {(prod.producto.price * prod.quantity)} {<button className="btn" onClick={()=> borrarItem(prod.producto.id)}>BORRAR ARTÍCULO</button>}
                            </h5>)
                        }
                        

                        <h5>
                            {`Precio total: U$S ${precioTotal()}`} 
                                
                        </h5>    
                        
                        </div>
                    </Col>

                    
                    
                    <button className="btn" onClick={()=> vaciarCarrtio()}>VACIAR CARRITO</button>

                    
                
                </Row>
            )
        } 
    }

export default Cart;