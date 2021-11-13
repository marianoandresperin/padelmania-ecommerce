import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import "./Cart.css"

const Cart = () => {
    const { cart, removeItem, clearCart } = useCart();
    const [emptyCart, setEmptyCart] = useState(true)
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        if (cart.length >= 1) {
            setEmptyCart(false)
        } else {
            setEmptyCart(true)
        }
    });

    const cartRemove = ((buttonId) => {
        let getItemById = cart.find(({ id }) => id === buttonId.target.id);
        removeItem(getItemById);
    });

    const cartClear = () => {
        clearCart();
    };

    return (
        <>{(emptyCart === false) ?
            <div className="cartList">
                {cart.map(n =>
                    <div className="cartItem" >
                            <img src={n.pictureUrl} alt="Foto de Paleta" className="cartPicture" />
                            <h3 className="cartTitle">{n.title}</h3>
                            <h4 className="cartPrice">Precio: {n.price}</h4>
                            <button id={n.id} onClick={cartRemove} className="cartRemove">Eliminar del carrito</button>
                            <p className="cartQuantity">Cantidad: {n.cantidad}</p>
                        </div>)}
                <button onClick={cartClear} className="cartClear">Vaciar el carrito</button>
            </div> : <>
                <h1>El carrito está vacío!</h1>
                <Link to={'/'}><button>Ir a los productos</button></Link>
            </>
                    }
        </>
    )
}

export default Cart;