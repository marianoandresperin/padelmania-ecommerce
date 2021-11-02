import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";

const ItemDetail = ({ pictureUrl, title, price, id, stock, detail }) => {
    const [counter, setCounter] = useState(0);
    const subir = () => {
        stock === counter ? alert("No hay más stock disponible!") : setCounter(counter + 1);
    };
    const bajar = () => {
        counter >= 1 ? setCounter(counter - 1) : alert("La cantidad mínima válida es 0!");
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
                    <ItemCount onAdd={subir} onRemove={bajar} cantidad={counter} />
                    <p className="detailStock">Quedan {stock} en stock!</p>
                </div>
            </section>
        </>
    )
}

export default ItemDetail;