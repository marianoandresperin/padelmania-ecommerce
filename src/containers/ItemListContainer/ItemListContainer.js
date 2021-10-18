import './ItemListContainer.css'

const ItemListContainer = (props) => {
    return (
        <div>
            <h1>Buenas, qué tal?</h1>
            <h2>{props.greeting}</h2>
        </div>
    );
}

export default ItemListContainer;