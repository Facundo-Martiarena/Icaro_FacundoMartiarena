import React, { useState } from "react";
import './../container/Item.css';
import ItemCount from './../components/Count/ItemCount.jsx';
import { useCartContext } from './../context/CartContext';
import { Card } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";


export const ItemDetail = ( {item} ) => {

  
    const [stock, setStock] = useState(0);

    const [count, setCount] = useState(1);
    const { cartList, agregarProducto } = useCartContext()

    

    function onAdd(cant) {
       
      setCount(cant)
      if (item.stock === stock) {
          alert("No hay stock suficiente")
      }else{
          setStock(stock + 1)
          agregarProducto({ producto: item, quantity: cant })
      
      }
  

  }




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
  )
}

