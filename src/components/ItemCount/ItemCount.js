import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [counter, setCounter] = useState(initial);
    const subir = () => {
        (stock === counter) ? alert("No hay más stock disponible!") : setCounter(counter + 1);
    };
    const bajar = () => {
        counter >= 1 ? setCounter(counter - 1) : alert("No podés bajar más de 0!");
    };
    
    return (
        <>
            <h3>Stock: {stock}</h3>
            <button onClick={subir}>+</button>
            <button onClick={bajar}>-</button>
            <h5>Cantidad: {counter}</h5>
            <button>Agregar al carrito</button>
        </>
    )
}

export default ItemCount;