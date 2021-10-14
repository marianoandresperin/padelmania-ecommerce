import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="ACA IRIA EL CATALOGO DE ARTICULOS"/>
    </div>
  );
}

export default App;
