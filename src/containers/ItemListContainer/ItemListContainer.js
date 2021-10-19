import ItemCount from '../components/ItemCount/ItemCount.js';
import './ItemListContainer.css';


const ItemListContainer = (props) => {
    return (
        <>
            <h1>Buenas, qué tal?</h1>
            <h2>{props.greeting}</h2>
            <ItemCount initial={2} stock={10} />
        </>
    );
}

export default ItemListContainer;