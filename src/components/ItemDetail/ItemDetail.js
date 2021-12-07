import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { collection, getFirestore, getDocs } from 'firebase/firestore';

const ItemDetail = ({ pictureUrl, title, price, id, stock, detail, cantidad }) => {
    const { itemId } = useParams();
    const { cart, addItem, removeItem, } = useCart();
    const [addedToCart, setAddedToCart] = useState(false)
    const [productList, setProductList] = useState(null)
    const [counter, setCounter] = useState(1);
    const [disablePlus, setDisablePlus] = useState(false)
    const [disableMinus, setDisableMinus] = useState(false)

    const db = getFirestore();
    
    useEffect(() => {
        getDocs(collection(db, 'products'))
            .then((snapshot) => {
                setProductList(snapshot.docs.map((doc) => doc.data()));
        })
        .catch((err) => {
            console.log('Ocurrió un error al obtener los productos: ' + err);
        })
        if (cart.some((product) => product.id === itemId)) {
            setAddedToCart(true);
        } else {
            setAddedToCart(false);
        }
        counter === 1 ? setDisableMinus(true) : setDisableMinus(false);
        counter === stock ? setDisablePlus(true) : setDisablePlus(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [cart, counter]);

    const subir = () => {
        //Dejo el alert en caso de que quiten el disabled mediante el inspector de elementos
        stock === counter ? alert("No hay más stock disponible!") : setCounter(counter + 1);
    };
    
    const bajar = () => {
        //Dejo como cantidad mínima válida al 1, y el alert en caso de que quiten el disabled mediante el inspector de elementos
        counter > 1 ? setCounter(counter - 1) : alert("La cantidad mínima válida es 1!");
    };
    
    const cartAdd = (() => {
        let getItemById = productList.find(({id}) => id === itemId);
        getItemById.cantidad = counter;
        addItem(getItemById);
    });

    const cartRemove = (() => {
        let getItemById = productList.find(({id}) => id === itemId);
        removeItem(getItemById);
        setCounter(1);
    });
    
    return (
        <>
            <section className="detail">
                <div className="detailImgContainer">
                    <img src={pictureUrl} alt="Foto de Paleta" className="detailImg" />
                </div>
                <div className="detailItem">
                    <h1 className="detailTitle">{title}</h1>
                    <p className="detailText">{detail}</p>
                    <h2 className="detailPrice">$ {price}</h2>
                    {(addedToCart === false) ?
                        <ItemCount onAdd={subir} onRemove={bajar} cantidad={counter} cartAdd={cartAdd} disableMinus={disableMinus} disablePlus={disablePlus} /> :
                        <>
                            <p className="detailStock">Tenés {counter} {counter > 1 ? 'unidades' : 'unidad'} en el carrito.</p>
                            <div className="btnContainer">
                                <NavLink to={`/cart`} className="itemLinks">
                                    <button className="carritoBtn">Ir al carrito</button>
                                </NavLink>
                                <button onClick={cartRemove} className="removeBtn">Quitar del carrito</button>
                            </div>
                        </>
                    }
                    <p className="detailStock"> {stock > 1 ? 'Quedan' : 'Queda'} {stock} en stock!</p>
                </div>
            </section>
        </>
    )
};

export default ItemDetail;