import "./ItemCount.css"
const ItemCount = ({ cantidad, onAdd, onRemove, cartAdd, disableMinus, disablePlus }) => {

    return (
        <>
            <div className="counter">
                <button className='counterBtn minusBtn' onClick={onRemove} disabled={disableMinus}>-</button>
                <p className="cantidad">{cantidad}</p>
                <button className='counterBtn plusBtn' onClick={onAdd} disabled={disablePlus}>+</button>
            </div>
            <button className="carritoBtn" onClick={cartAdd}>Agregar al carrito</button>
        </>
    )
}

export default ItemCount;