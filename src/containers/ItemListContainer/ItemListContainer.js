import './ItemListContainer.css';
import ItemList from '../../components/ItemList/ItemList.js';
import { useState, useEffect } from 'react';
import productList from '../../components/Productos/Productos.js';
import Loader from '../../components/Loader/Loader';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState(null);
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

    // PARA CHECKEAR EN CONSOLA QUE EL MONTAJE DE LOS PRODUCTOS SEA A TRAVES DE LA PROMISE
    console.log(products);

    return (
        <section className="container">
            <h1 className="greeting">{greeting}</h1>
            {products ? (<ItemList products={products} />
            ) : (<Loader />)}
        </section>
    );
}


export default ItemListContainer;