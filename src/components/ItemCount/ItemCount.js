import "./ItemCount.css"

const ItemCount = ({cantidad, onAdd, onRemove, cartAdd}) => {

    return (
        <>
            <div className="counter">
                <button className="counterBtn minusBtn" onClick={onRemove}>-</button>
                <p className="cantidad">{cantidad}</p>
                <button className="counterBtn plusBtn" onClick={onAdd}>+</button>
            </div>
            <button className="carritoBtn" onClick={cartAdd}>Agregar al carrito</button>
        </>
    )
}

export default ItemCount;