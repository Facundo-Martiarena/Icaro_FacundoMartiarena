import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PagPricipal from './components/PagPricipal';
import ItemListContainer from './container/ItemListContainer';
import Cart from './Cart/Cart';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import CartContextProvider from './context/CartContext';

function App() {
  
  return (
    <>
      <center>
              <CartContextProvider>
                <BrowserRouter>
                  <div className="App">
                      <NavBar />
                      <Routes> 
                        <Route exact path="/" element={<PagPricipal />} />
                        <Route exact path="/products/" element={<ItemListContainer />} />
                        <Route exact path="/categoria/:idCategoria" element={<ItemListContainer />} />
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
