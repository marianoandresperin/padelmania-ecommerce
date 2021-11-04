import './App.css';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer.js';
import NavBar from './components/NavBar/NavBar.js';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer.js';
import { BrowserRouter, Switch, Route, } from 'react-router-dom';
import { useEffect } from 'react';


function App() {

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
          <Route exact path="/category/:categoryId">
            <ItemListContainer greeting="Estás visualizando la categoría: " categoryId=""/>
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;