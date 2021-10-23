import './ItemListContainer.css';
import ItemList from '../../components/ItemList/ItemList.js';
import { useState, useEffect } from 'react';
import productList from '../../components/Productos/Productos';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    // PARA CHECKEAR EN CONSOLA QUE EL MONTAJE DE LOS PRODUCTOS SEA A TRAVES DE LA PROMISE
    console.log(products);
    const task = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productList)
        }, 2000);
    });
    useEffect(() => {
        task.then(
            (result) => {
                setProducts(result)
            },
            (err) => {
                console.log("Ocurrió un error al cargar los productos: " + err)
            }
        )
    });
    
    return (
        <section className="container">
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </section>
    );
}


export default ItemListContainer;