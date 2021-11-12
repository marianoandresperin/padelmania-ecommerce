import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { useParams } from "react-router";
import productList from "../Productos/Productos";
import { NavLink } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import CartProvider from "../../contexts/CartContext";

const ItemDetail = ({ pictureUrl, title, price, id, stock, detail }) => {
    const { itemId } = useParams();
    const cart = useCart();
    const [addedToCart, setAddedToCart] = useState(false);
    const [counter, setCounter] = useState(0);
    const subir = () => {
        stock === counter ? alert("No hay más stock disponible!") : setCounter(counter + 1);
    };
    const bajar = () => {
        counter >= 1 ? setCounter(counter - 1) : alert("La cantidad mínima válida es 0!");
    };
    
    const cartAdd = (() => {
        let getItemById = productList.find(({ id }) => id === itemId);
        getItemById.cantidad=counter
        cart.addItem(getItemById);
        setAddedToCart(true)
    });
    const cartRemove = (() => {
        let getItemById = productList.find(({ id }) => id === itemId);
        cart.removeItem(getItemById)
        setAddedToCart(false)
        setCounter(0)
    })
    
    // Para checkear que se setee el producto agregado al carrito, con su correspondiente cantidad
    if (addedToCart === true) {
        console.log(cart.cart)
    };
    
    return (
        <>
            <section className="detail">
                <CartProvider>
                    <>
                        <div className="detailImgContainer"> 
                            <img src={pictureUrl} alt="Foto de Paleta" className="detailImg"/>
                        </div>
                        <div className="detailItem"> 
                            <h1 className="detailTitle">{title}</h1>
                            <p className="detailText">{detail}</p>
                            <h2 className="detailPrice">{price}</h2>
                                { (addedToCart  === false) ? 
                                    <ItemCount onAdd={subir} onRemove={bajar} cantidad={counter} cartAdd={cartAdd} /> :
                                    <>
                                        <NavLink to={`/cart`} className="itemLinks">
                                            <button className="carritoBtn">Ver carrito</button>
                                        </NavLink>
                                        <button onClick={cartRemove} className="removeBtn">Quitar del carrito</button>
                                    </>
                                }
                                <p className="detailStock">Quedan {stock} en stock!</p>
                        </div>
                    </>
                </CartProvider>
            </section>
        </>
    )
}

export default ItemDetail;