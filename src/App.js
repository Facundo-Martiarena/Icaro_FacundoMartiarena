import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PagPricipal from './components/PagPricipal';
import ItemListContainer from './container/ItemListContainer';
import Cart from './Cart/Cart';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';

function App() {
  
  return (
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
  );

}

export default App;
