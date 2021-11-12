import './App.css';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer.js';
import NavBar from './components/NavBar/NavBar.js';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer.js';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Switch, Route, } from 'react-router-dom';
import { useEffect } from 'react';
import CartProvider from './contexts/CartContext';

function App() {

  useEffect(() => {

  })
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>        
            <Route exact path="/">
              <ItemListContainer greeting="Tienda PadelManía, donde encontrás lo que buscás!" />
            </Route>
            <Route exact path="/category/:categoryId">
              <ItemListContainer greeting="Estás visualizando la categoría: " categoryId=""/>
            </Route>
            <Route exact path="/item/:itemId">
              <ItemDetailContainer />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;