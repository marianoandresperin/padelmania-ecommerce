import { useCart } from "../../contexts/CartContext";
import CartProvider from "../../contexts/CartContext";
import "./Cart.css"

const Cart = () => {
    const cart = useCart();

    const cartRemove = (id) => {
        console.log("Render del cartRemove en Cart.js");
        cart.removeItem(id);
    };

    const cartClear = () => {
        console.log("Render del cartClear en Cart.js");
        cart.clearCart();
    };

    return (
        <>
            <div className="cartList">
                <CartProvider>
                {cart.cart.map(n =>
                    <>
                        <div className="cartItem">
                            <img src={n.pictureUrl} alt="Foto de Paleta" className="cartPicture" />
                            <h3 className="cartTitle">{n.title}</h3>
                            <h4 className="cartPrice">Precio: {n.price}</h4>
                            <button onClick={cartRemove(`${n}`)} className="cartRemove">Eliminar del carrito</button>
                            <p className="cartQuantity">Cantidad: {n.cantidad}</p>
                        </div>
                </>
                )}
                </CartProvider>
                <button onClick={cartClear} className="cartClear">Vaciar el carrito</button>
            </div>
        </>
    )
}

export default Cart;