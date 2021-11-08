import "./Item.css"
import { NavLink } from "react-router-dom";

const Item = ({ pictureUrl, title, price, id, stock }) => {
        
    return (
        <>
            <div className="item">
                <NavLink to={`/item/${id}`} className="itemLinks">
                    <img src={pictureUrl} alt="Foto de Paleta" className="itemPicture" />
                    <h3 className="itemTitle">{title}</h3>
                    <h4 className="itemPrice">{price}</h4>
                    <button className="btnVerMas">Ver más!</button>
                    <p className="stock">Quedan {stock} en stock!</p>
                </NavLink>
            </div>
        </>
    )
}

export default Item;