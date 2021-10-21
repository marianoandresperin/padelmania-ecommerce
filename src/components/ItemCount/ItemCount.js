import "./ItemCount.css"

const ItemCount = ({cantidad, onAdd, onRemove}) => {
      
    return (
        <>
            <div className="counter">
                <button className="counterBtn minusBtn" onClick={onRemove}>-</button>
                <p className="cantidad">{cantidad}</p>
                <button className="counterBtn plusBtn" onClick={onAdd}>+</button>
            </div>
            <button className="carritoBtn">Agregar al carrito</button>
        </>
    )
}

export default ItemCount;