import "./Item.css"
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Item = ({ pictureUrl, title, price, id, stock }) => {
    const [counter, setCounter] = useState(0);
    const subir = () => {
        stock === counter ? alert("No hay más stock disponible!") : setCounter(counter + 1);
    };
    const bajar = () => {
        counter >= 1 ? setCounter(counter - 1) : alert("La cantidad mínima válida es 0!");
    };
    
    return (
        <>
            <div className="item">
                <NavLink to={`/item/${id}`} className="itemLinks">
                    <img src={pictureUrl} alt="Foto de Paleta" className="itemPicture"/>
                    <h3 className="itemTitle">{title}</h3>
                    <h4 className="itemPrice">{price}</h4>
                </NavLink>
                <ItemCount onAdd={subir} onRemove={bajar} cantidad={counter} />
                <p className="stock">Quedan {stock} en stock!</p>
            </div>
        </>
    )
}

export default Item;