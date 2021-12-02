import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import "./Cart.css"
import { collection, getFirestore, addDoc, Timestamp } from 'firebase/firestore';
import Loader from "../Loader/Loader";

const Cart = () => {
    const { cart, removeItem, clearCart } = useCart();
    const [emptyCart, setEmptyCart] = useState(true)
    const [totalPrice, setTotalPrice] = useState(0)
    const [modal, setModal] = useState(false)
    const [buyer, setBuyer] = useState(null)
    const [orderId, setOrderId] = useState(null)
    const [loading, setLoading] = useState(false)
    const [purchased, setPurchased] = useState (false)
    const db = getFirestore();
    
    useEffect(() => {
        if (cart.length >= 1) {
            setPurchased(false)
            setEmptyCart(false)
            setTotalPrice(getTotalCost)
        } else {
            setEmptyCart(true)
        } return null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cart]);

    const cartRemove = ((buttonId) => {
        let getItemById = cart.find(({ id }) => id == buttonId.target.id);
        removeItem(getItemById);
    });

    const cartClear = () => {
        clearCart();
    };

    const getTotalCost = () => {
        let total = cart.map((item) => (item.cantidad * item.price))
        return total.reduce((a, b) => a + b, 0)
    };
    
    const handleModal = () => {
        modal === false ? setModal(true) : setModal(false)
    }

    const showHideClassName = modal ? "modal display-block" : "modal display-none";
    
    const generateOrder = (e) => {
        setLoading(true)
        e.preventDefault()
        setBuyer({ name: e.target.form[0].value, telephone: e.target.form[1].value, email: e.target.form[2].value })
        let newOrder = { buyer: buyer, items: cart, date: Timestamp.fromDate(new Date()), totalPrice }
        addDoc(collection(db, 'orders'), newOrder).then(({ id }) => {
            setOrderId(id)
        }).catch(err => {
            console.log('Ha ocurrido un error ' + err)
        }).finally(() => {
            setLoading(false)
            clearCart()
            setPurchased(true)
        })
    }

    return (
        <>
            {purchased === true ? <>
                <h1 className="cartGreeting"> Gracias por elegirnos!</h1>
                <h3 className="cartPurchaseId">El id de su compra es: <span>{orderId}</span>.</h3>
                <Link to={'/'}><button className="cartBuy">Seguir comprando</button></Link> </> :
                <>
                    {(emptyCart === false) ?
                        <div className="cartList">
                            <h1 className="cartGreeting">Carrito de compras</h1>
                            {cart.map(n =>
                                <div className="cartItem" >
                                    <div className="cartPictureContainer">
                                        <img src={n.pictureUrl} alt="Foto de Paleta" className="cartPicture" />
                                    </div>
                                    <div className="cartData">
                                        <h3 className="cartTitle">{n.title}</h3>
                                        <h4 className="cartPrice">Precio: $ {n.price}</h4>
                                        <p className="cartQuantity">Cantidad: x{n.cantidad}</p>
                                        <button id={n.id} onClick={cartRemove} className="cartRemove">Eliminar</button>
                                    </div>
                                </div>
                            )}
                            <div className="cartTotal">
                                <h4 className="cartPrice">Total: $ {totalPrice}</h4>
                            </div>
                            <div className="cartBtnContainer">
                                <button onClick={cartClear} className="cartClear">Vaciar el carrito</button>
                                <button onClick={handleModal} className="cartBuy">Terminar mi compra</button>
                            </div>
                            <form id="form" className={showHideClassName}>
                                <div className="modal-main">
                                    <h3 className="modalTitle">Ingrese sus datos personales para finalizar la compra</h3>
                                    <input className="modalInputs" placeholder="Nombre" name="inputName" type="text" required></input>
                                    <input className="modalInputs" placeholder="Telefono" name="inputTel" type="tel" required></input>
                                    <input className="modalInputs" placeholder="E-Mail" name="inputMail" type="email" required></input>
                                    <div className="modalBtnContainer">
                                        { !loading ? <>
                                        <button type="button" className="modalClose" onClick={handleModal}>Cerrar</button>
                                        <button type="submit" className="modalConfirm" onClick={generateOrder}>Confirmar datos</button> </>
                                            : <Loader /> }
                                    </div>
                                </div>
                            </form>
                        </div>
                        : <>
                        <h1 className="cartGreeting">El carrito está vacío!</h1>
                        <Link to={'/'}><button className="cartBuy">Ir a los productos</button></Link>
                        </>
                    }
                </>
            }
        </>
    )
}

export default Cart;