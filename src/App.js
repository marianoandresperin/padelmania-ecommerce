import './App.css';
import ItemListContainer from './components/containers/ItemListContainer/ItemListContainer.js';
import NavBar from './components/NavBar/NavBar.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="ACA IRIA EL CATALOGO DE ARTICULOS" />
    </div>
  );
}

export default App;
