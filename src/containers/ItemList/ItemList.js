import Item from "../../components/Item/Item";
import "./ItemList.css"
import productList from "../../components/Productos/Productos";
import { useState } from "react";

const ItemList = () => {
    const [products, setProducts] = useState(productList)
    const task = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([products])
        }, 2000);
    });

    task.then(
        (result) => {
            console.log(result);
        },
        (err) => {
            console.log("Ocurrió un error al cargar los productos: " + err)
        }
    )

    return (
        <>
            <div className="itemList">
                {products.map(n => <Item key={n.id} title={n.title} pictureUrl={n.pictureUrl} price={n.price} stock={n.stock} />)}
            </div>
        </>
    )
}

export default ItemList;