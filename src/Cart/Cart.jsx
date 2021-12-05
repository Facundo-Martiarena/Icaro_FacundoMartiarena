import { Row, Col} from "react-bootstrap";
import { useCartContext } from "./../context/CartContext"


function Cart(item) {

    const {cartList, varciarCarrtio, precioTotal} = useCartContext()

    console.log(cartList);

    

    return (
        <Row>
            <Col>
                <div>
            
                { cartList.map(prod => 
                    <h5 key={prod.producto.id}>
                        {"Cantidad: "}{prod.quantity} {" - Producto: "} {prod.producto.marca} {" - Precio: U$S"} {(parseInt(prod.producto.price) * parseInt(prod.quantity))}
                    </h5>)}
                
                </div>
            </Col>

            
            {/* <Col> */}
            <button className="btn" onClick={()=> varciarCarrtio()}>VACIAR CARRITO</button>
            {/* </Col> */}
            
        
        </Row>
    )
}

export default Cart;