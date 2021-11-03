import './App.css';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer.js';
import NavBar from './components/NavBar/NavBar.js';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  const { itemId } = useParams();
  useEffect(() => {

  })
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>        
          <Route exact path="/">
            <ItemListContainer greeting="Tienda PadelManía, donde encontrás lo que buscás!" />
          </Route>
          <Route path="/category/:id">
            <ItemListContainer greeting="Usted está visualizando la categoría:" {itemId} />
          </Route>
          <Route path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route path="/cart">
            {/* <Cart /> */}
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;