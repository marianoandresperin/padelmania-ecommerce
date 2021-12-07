import './ItemListContainer.css';
import ItemList from '../../components/ItemList/ItemList.js';
import { useState, useEffect } from 'react';
import Loader from '../../components/Loader/Loader';
import { useParams} from 'react-router-dom';
import { collection, getFirestore, getDocs } from 'firebase/firestore';

const ItemListContainer = ({ greeting, category }) => {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(false);
    const { categoryId } = useParams();
    category = categoryId;

    useEffect(() => {
        const db = getFirestore();
        getDocs(collection(db, 'products'))
            .then((snapshot) => {
                setLoading(true);
                let unfiltered = snapshot.docs.map((doc) => doc.data());
                switch (categoryId) {
                    case "Novato":
                        setProducts(unfiltered.filter(prod => prod.categoryId === "Novato"));
                        break;
                    case "Intermedio":
                        setProducts(unfiltered.filter(prod => prod.categoryId === "Intermedio"));
                        break;
                    case "Avanzado":
                        setProducts(unfiltered.filter(prod => prod.categoryId === "Avanzado"));
                        break;
                    default:
                        setProducts(unfiltered);
                        break;
                }
            })
            .catch((err) => {
                console.log('Ocurrió un error al obtener los productos: ' + err);
            })
            .then(() => {
                setLoading(false);
            })
    }, [categoryId]);
   
    return (
        <section className="container">
            { !loading && products ? (
                <>
                    <h1 className="greeting">{greeting}{category}</h1>
                    <ItemList products={products} />
                </>
            ) : (<Loader />)}
        </section>
    );
}

export default ItemListContainer;