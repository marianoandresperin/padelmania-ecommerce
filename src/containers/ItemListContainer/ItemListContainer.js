import './ItemListContainer.css';
import ItemList from '../../containers/ItemList/ItemList.js';

const ItemListContainer = ({greeting}) => {
    return (
        <section className="container">
            <h1>{greeting}</h1>
            <ItemList />
        </section>
    );
}

export default ItemListContainer;