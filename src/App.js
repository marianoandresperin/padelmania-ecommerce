import './App.css';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer.js';
import NavBar from './components/NavBar/NavBar.js';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer.js';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Tienda PadelManía" />
      <ItemDetailContainer />
    </div>
            
  );
}

export default App;