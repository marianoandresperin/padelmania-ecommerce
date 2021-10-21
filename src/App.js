import './App.css';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer.js';
import NavBar from './components/NavBar/NavBar.js';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Tienda PadelManía" />
    </div>
            
  );
}

export default App;