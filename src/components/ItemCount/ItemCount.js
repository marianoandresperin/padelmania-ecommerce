const ItemCount = ({stock, cantidad, onAdd, onRemove}) => {
      
    return (
        <>
            <h3>Stock: {stock}</h3>
            <button onClick={onRemove}>-</button>
            <button onClick={onAdd}>+</button>
            <h5>Cantidad: {cantidad}</h5>
            <button>Agregar al carrito</button>
        </>
    )
}

export default ItemCount;