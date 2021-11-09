import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { useParams } from "react-router";
import productList from "../Productos/Productos";
import { NavLink } from "react-router-dom";

const ItemDetail = ({ pictureUrl, title, price, id, stock, detail }) => {
    const { itemId } = useParams();
    const [cart, setCart] = useState(productList);
    const [flag, setFlag] = useState(false);
    const [counter, setCounter] = useState(0);
    const subir = () => {
        stock === counter ? alert("No hay más stock disponible!") : setCounter(counter + 1);
    };
    const bajar = () => {
        counter >= 1 ? setCounter(counter - 1) : alert("La cantidad mínima válida es 0!");
    };
    
    const cartAdd = (() => {
        let getItemById = productList.find(({ id }) => id === itemId);
        setCart(getItemById.cantidad = counter);
        setFlag(true)
        return setCart(getItemById)
    }
    );
    
    // Para checkear que se setee el producto agregado al carrito, con su correspondiente cantidad
    if (flag === true) {
        console.log(cart)
    };
    
    return (
        <>
            <section className="detail">
                <div className="detailImgContainer"> 
                    <img src={pictureUrl} alt="Foto de Paleta" className="detailImg"/>
                </div>
                <div className="detailItem"> 
                    <h1 className="detailTitle">{title}</h1>
                    <p className="detailText">{detail}</p>
                    <h2 className="detailPrice">{price}</h2>
                    { (flag  === false) ? 
                        <ItemCount onAdd={subir} onRemove={bajar} cantidad={counter} cartAdd={cartAdd} /> :
                        <NavLink to={`/cart`} className="itemLinks">
                            <button className="carritoBtn">Ver carrito</button>
                        </NavLink>
                        }
                        <p className="detailStock">Quedan {stock} en stock!</p>
                </div>
            </section>
        </>
    )
}

export default ItemDetail;