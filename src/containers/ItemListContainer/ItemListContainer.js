import './ItemListContainer.css';
import ItemList from '../../components/ItemList/ItemList.js';
import { useState, useEffect } from 'react';
import productList from '../../components/Productos/Productos.js';
import Loader from '../../components/Loader/Loader';
import { useParams} from 'react-router-dom';

const ItemListContainer = ({ greeting, category }) => {
    const [products, setProducts] = useState(null);
    const [flag, setFlag] = useState(false);
    const { categoryId } = useParams();
    category = categoryId
    const task = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productList);
        }, 2000);
    });
    useEffect(() => {
        setFlag(false);
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
                }setFlag(true)
            },
            (err) => {
                console.log("Ocurrió un error al cargar los productos: " + err)
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categoryId]);
   
    return (
        <section className="container">
            {flag === true ? (
                <>
                    <h1 className="greeting">{greeting}{category}</h1>
                    <ItemList products={products} />
                </>
            ) : (<Loader />)}
        </section>
    );
}

export default ItemListContainer;