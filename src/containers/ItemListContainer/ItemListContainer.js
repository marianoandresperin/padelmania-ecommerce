import './ItemListContainer.css';
import ItemList from '../../components/ItemList/ItemList.js';
import { useState, useEffect } from 'react';
import productList from '../../components/Productos/Productos.js';
import Loader from '../../components/Loader/Loader';
import { useParams, Link } from 'react-router-dom';

const ItemListContainer = ({ greeting, category }) => {
    const [products, setProducts] = useState(null);
    const { categoryId } = useParams();
    category = categoryId
    const task = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productList)
        }, 2000);
    });
    useEffect(() => {
        task.then(
            (result) => {
                let filtered = []
                    switch (categoryId) {
                    case "Novato":
                        filtered = result.filter(prod => prod.categoryId === "Novato")
                        setProducts(filtered)
                        break;
                    case "Intermedio":
                        filtered = result.filter(prod => prod.categoryId === "Intermedio")
                        setProducts(filtered)
                        break;
                    case "Avanzado":
                        filtered = result.filter(prod => prod.categoryId === "Avanzado")
                        setProducts(filtered)
                        break;
                    // Por las dudas, como el Home pasa como "undefined", lo resolvi asi
                    // case undefined:
                    //     setProducts(result)
                    //     break;
                    default:
                        setProducts(result)
                        break;
                }
            },
            (err) => {
                console.log("Ocurrió un error al cargar los productos: " + err)
            }
        )
    }, [categoryId]);

    // PARA CHECKEAR EN CONSOLA QUE EL MONTAJE DE LOS PRODUCTOS SEA A TRAVES DE LA PROMISE
    console.log(categoryId);

    return (
        <section className="container">
            <h1 className="greeting">{greeting}{category}</h1>
            {products ? (<>
                <ItemList products={products} />
                <Link key={products.categoryId} to={`/item/${products.id}`}></Link>
                </>
            ) : (<Loader />)}
        </section>
    );
}

export default ItemListContainer;