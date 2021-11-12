import { useCart } from "../../contexts/CartContext";
import "./Cart.css"
import Item from "../Item/Item";

const Cart = () => {
    const { cart, removeItem, clearCart } = useCart();

    // const cartRemove = (id) => {
    //     console.log("Render del cartRemove en Cart.js");
    //     cart.removeItem(id);
    // };
    const cartRemove = (() => {
        let getItemById = [cart].find(({ id }) => id === Item.id);
        removeItem(getItemById)
    })

    const cartClear = () => {
        console.log("Render del cartClear en Cart.js");
        clearCart();
    };

    return (
        <>
            <div className="cartList">
                {cart.map(n =>
                    <div className="cartItem">
                        <img src={n.pictureUrl} alt="Foto de Paleta" className="cartPicture" />
                        <h3 className="cartTitle">{n.title}</h3>
                        <h4 className="cartPrice">Precio: {n.price}</h4>
                        <button onClick={cartRemove} className="cartRemove">Eliminar del carrito</button>
                        <p className="cartQuantity">Cantidad: {n.cantidad}</p>
                    </div>
                )}
                <button onClick={cartClear} className="cartClear">Vaciar el carrito</button>
            </div>
        </>
    )
}

export default Cart;