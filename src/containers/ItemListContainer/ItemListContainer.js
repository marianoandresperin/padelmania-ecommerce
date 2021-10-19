import './ItemListContainer.css';
import ItemCount from '../../components/ItemCount/ItemCount.js';
import { useState } from "react";

const ItemListContainer = (props) => {
    const disponible = 10;
    const [counter, setCounter] = useState(1);
    const subir = () => {
        disponible === counter ? alert("No hay más stock disponible!") : setCounter(counter + 1);
    };
    const bajar = () => {
        counter >= 1 ? setCounter(counter - 1) : alert("La cantidad mínima válida es 0!");
    };
    return (
        <>
            <h1>Buenas, qué tal?</h1>
            <h2>{props.greeting}</h2>
            <ItemCount cantidad={counter} stock={disponible} onAdd={subir} onRemove={bajar} />
        </>
    );
}

export default ItemListContainer;