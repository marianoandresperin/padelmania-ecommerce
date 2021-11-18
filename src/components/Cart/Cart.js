import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import "./Cart.css"

const Cart = () => {
    const { cart, removeItem, clearCart } = useCart();
    const [emptyCart, setEmptyCart] = useState(true)
    const [totalPrice, setTotalPrice] = useState(0)
    
    useEffect(() => {
        if (cart.length >= 1) {
            setEmptyCart(false)
            setTotalPrice(getTotalCost)
        } else {
            setEmptyCart(true)
        } return null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cart]);

    const cartRemove = ((buttonId) => {
        let getItemById = cart.find(({ id }) => id === buttonId.target.id);
        removeItem(getItemById);
    });

    const cartClear = () => {
        clearCart();
    };

    const getTotalCost = () => {
        let total = cart.map((item) => (item.cantidad * item.price))
        return total.reduce((a, b) => a + b, 0)
    };

    const generateOrder = () => {
        let order  = { buyer: { name: "Nombre", tel: 11331133, mail: "email" }, items: cart, totalPrice }
        console.log(order)
    }

    return (
        <>
            {(emptyCart === false) ?
                <div className="cartList">
                    <h1 className="cartGreeting">Carrito de compras</h1>
                    {cart.map(n =>
                        <div className="cartItem" >
                            <img src={n.pictureUrl} alt="Foto de Paleta" className="cartPicture" />
                            <h3 className="cartTitle">{n.title}</h3>
                            <h4 className="cartPrice">Precio: $ {n.price}</h4>
                            <p className="cartQuantity">Cantidad: x{n.cantidad}</p>
                            <button id={n.id} onClick={cartRemove} className="cartRemove">Eliminar</button>
                        </div>
                    )}
                    <div className="cartTotal">
                        <h4 className="cartPrice">Total: $ {totalPrice}</h4>
                    </div>
                    <div className="cartBtnContainer">
                        <button onClick={cartClear} className="cartClear">Vaciar el carrito</button>
                        <button onClick={generateOrder} className="cartBuy">Terminar mi compra</button>
                    </div>
                </div> : <>
                <h1 className="cartGreeting">El carrito está vacío!</h1>
                <Link to={'/'}><button className="cartBuy">Ir a los productos</button></Link>
            </>
                    }
        </>
    )
}

export default Cart;