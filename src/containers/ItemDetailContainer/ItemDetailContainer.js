import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail.js';
import Loader from '../../components/Loader/Loader';
import { useParams } from 'react-router';
import { doc, getDoc, getFirestore } from '@firebase/firestore';


const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [itemDetail, setItemDetail] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const itemRef = doc(db, 'products', itemId);
        getDoc(itemRef)
            .then((snapshot) => {
                    if (snapshot.exists()) {
                        setItemDetail(snapshot.data())
                    }
            })
            .catch((err) => {
                console.log('Ocurrió un error al obtener los productos: ' + err);
            })
            .then(setLoading(false))
        }, [itemId]);

    return (
        <>
            <div className="itemDetailContainer">
                { !loading && itemDetail ? (
                    <ItemDetail
                    key={itemDetail.id}
                    title={itemDetail.title}
                    pictureUrl={itemDetail.pictureUrl}
                    price={itemDetail.price}
                    stock={itemDetail.stock}
                    detail={itemDetail.detail}
                    cartAdd={itemDetail.cartAdd}
                    id={itemDetail.id}
                    />)
                    : (<Loader />)
                }
            </div>
        </>
    );
}

export default ItemDetailContainer;