import './App.css';
import NavBar from './components/NavBar';
import PagPricipal from './components/PagPricipal';
import ItemListContainer from './container/ItemListContainer';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <body className="App-body">
        <PagPricipal/>
        <h1>¡NUEVOS ARRIBOS!</h1>
        <ItemListContainer />
      </body>

    </div>
  );

}

export default App;
