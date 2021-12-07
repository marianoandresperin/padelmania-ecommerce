import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import "./Cart.css";
import { collection, getFirestore, addDoc, Timestamp, doc, updateDoc } from 'firebase/firestore';
import Loader from "../Loader/Loader";

const Cart = () => {
    const { cart, removeItem, clearCart } = useCart();
    const [emptyCart, setEmptyCart] = useState(true);
    const [totalPrice, setTotalPrice] = useState(0);
    const [modal, setModal] = useState(false);
    const [validName, setValidName] = useState(false);
    const [validLastname, setValidLastname] = useState(false);
    const [validMail, setValidMail] = useState(false);
    const [validPhone, setValidPhone] = useState(false);
    const [buyer, setBuyer] = useState(null);
    const [orderId, setOrderId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [purchased, setPurchased] = useState(false);
    const db = getFirestore();
    
    useEffect(() => {
        if (cart.length >= 1) {
            setPurchased(false);
            setEmptyCart(false);
            setTotalPrice(getTotalCost);
        } else {
            setEmptyCart(true);
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
        let total = cart.map((item) => (item.cantidad * item.price));
        return total.reduce((a, b) => a + b, 0);
    };
    
    // On/off del modal con el formulario de compra
    const handleModal = () => {
        modal === false ? setModal(true) : setModal(false);
    };
    
    const showHideClassName = modal ? "modal display-block" : "modal display-none";
    

    // Funcion que se actualiza mientras cambie el valor de cada input, para ser validados al confirmarse la compra
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        switch (name) {
            case 'nombre':
                if (value.match(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/)) {
                    setValidName(true);
                    setBuyer({ ...buyer, [name]: value });
                } else setValidName(false);
            break;
            case 'apellido':
                if (value.match(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/)) {
                    setValidLastname(true);
                    setBuyer({ ...buyer, [name]: value });
                } else setValidLastname(false);
            break;
            case 'email':
                if (value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                    setValidMail(true);
                    setBuyer({ ...buyer, [name]: value });
                } else setValidMail(false);
                break;
            
            case 'telefono':
                if (value.match(/^[0-9]{7,}$/)) {
                    setValidPhone(true);
                    setBuyer({ ...buyer, [name]: value });
                } else setValidPhone(false);
            break;
            default:
            break;
        }
    }
    
    // El evento dispara esta funcion que genera la orden, despues de validar el formulario
    const generateOrder = (e) => {
        e.preventDefault();
        if (validName === false) {
            alert('Nombre inválido.');
        } else if (validLastname === false) {
            alert('Apellido inválido.');
        } else if (validMail === false) {
            alert('Email inválido.');
        } else if (e.target[2].value !== e.target[3].value) {
            alert('La confirmación debe coincidir con el email.');
        } else if (validPhone === false) {
            alert('Teléfono inválido.');
        } else {
            setLoading(true);
            let newOrder = { buyer: buyer, items: cart, date: Timestamp.fromDate(new Date()), totalPrice };
            addDoc(collection(db, 'orders'), newOrder)
                .then(({ id }) => {
                    setOrderId(id);
                })
                .catch((err) => {
                    console.log('Ha ocurrido un error ' + err);
                })
                .finally(() => {
                    cart.forEach(item => {
                        const docRef = doc(db, 'products', item.id);
                        updateDoc(docRef, { stock: item.stock - item.cantidad });
                    });
                    setLoading(false);
                    clearCart();
                    setPurchased(true);
                })
        }
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
                            <form id="form" onSubmit={generateOrder} className={showHideClassName}>
                                <div className="modal-main">
                                    <h3 className="modalTitle">Ingrese sus datos personales para finalizar la compra</h3>
                                    <input className="modalInputs" placeholder="Nombre" name="nombre" type="text" onChange={handleInput}></input>
                                    <input className="modalInputs" placeholder="Apellido" name="apellido" type="text" onChange={handleInput}></input>
                                    <input className="modalInputs" placeholder="E-Mail" name="email" type="email" onChange={handleInput}></input>
                                    <input className="modalInputs" placeholder="Confirmar E-Mail" name="confirmEmail" type="email" ></input>
                                    <input className="modalInputs" placeholder="Telefono" name="telefono" type="tel" onChange={handleInput}></input>
                                    <div className="modalBtnContainer">
                                        { !loading ? <>
                                        <button type="button" className="modalClose" onClick={handleModal}>Cerrar</button>
                                        <button type="submit" className="modalConfirm"  >Confirmar datos</button> </>
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