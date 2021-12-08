import React, { useState } from "react";
import './../container/Item.css';
import ItemCount from './../components/Count/ItemCount.jsx';

import { useCartContext } from './../context/CartContext';
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "@restart/ui/esm/Button";


export const ItemDetail = ( {item} ) => {


    const [count, setCount] = useState(1);
    const { cartList, agregarProducto } = useCartContext()

    

    function onAdd(cant) {
        setCount(cant)
        console.log(cant)
        agregarProducto({ producto: item, quantity: cant} )
        
    }
    console.log(cartList)




  return (


        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={item.photoURL} />
          <Card.Body>
            <Card.Title>{item.marca}</Card.Title>
            <Card.Text>
                {item.model}               
            </Card.Text>
            <Card.Text>
                U$S{" "}{item.price}
            </Card.Text>
            <Button variant="primary">
              <ItemCount initial='1' stock={item.stock} onAdd={onAdd}/>
            </Button>
          </Card.Body>
        </Card>

        
        // <Row>
        //   <Col>
        //     <div className="item" > 
        //             <div  key={item.id} className="card">
        //                     <img className="imag" src={item.photoURL} alt="foto"/>
                        
        //             </div>
        //         </div>
        //   </Col>

        //   <Col>
        //     <div className="item" style={{height: 200, background:(168, 169, 177, 0.2)}}>
        //       
        //       {/* {string !== '' && <Label>{string}</Label> } */}
        //       <h5 className="model">{item.model} </h5>
        //       <h5 className="price">U$S{" "}{item.price}</h5>
                   
        //       <Col>
        //         <ItemCount initial='1' stock={item.stock} onAdd={onAdd}/>
        //       </Col>
        //     </div>
        //   </Col>
          
                
         

        // </Row>
  )
};

