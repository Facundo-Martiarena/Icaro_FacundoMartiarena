import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './container/ItemListContainer';
import Cart from './Cart/Cart';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import CartContextProvider from './context/CartContext';
import HomePage from './components/HomePage';

function App() {
  
  return (
    <>
      <center>
              <CartContextProvider>
                <BrowserRouter>
                  <div className="App">
                      <NavBar />
                      <Routes> 
                        <Route exact path="/" element={<HomePage />} />
                        <Route exact path="/products/" element={<ItemListContainer />} />
                        <Route exact path="/categoria/:idCategory" element={<ItemListContainer />} />
                        <Route exact path="/item/:idProd" element={<ItemDetailContainer />} />
                        <Route exact path="/cart" element={<Cart />} />
                      </Routes>
                  </div>
                </BrowserRouter>
              </CartContextProvider>

      </center>

    </>
  );

}

export default App;
