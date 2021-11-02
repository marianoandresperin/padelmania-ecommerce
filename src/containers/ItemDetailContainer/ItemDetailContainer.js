import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import productList from '../../components/Productos/Productos';
import ItemDetail from '../../components/ItemDetail/ItemDetail.js';
import Loader from '../../components/Loader/Loader';

const ItemDetailContainer = () => {
    const [itemDetail, setItemDetail] = useState(undefined);
    const detail = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productList)
        }, 2000);
    });
    useEffect(() => {
        detail.then((result) => {
                setItemDetail(result[3])
            }, (err) => {
                console.log("Ocurrió un error al cargar el detalle del producto: " + err)
            }
        )
    });
   
    return (
        <>
            <div className="itemDetailContainer">
                {itemDetail ? (
                    <ItemDetail
                    key={itemDetail.id}
                    title={itemDetail.title}
                    pictureUrl={itemDetail.pictureUrl}
                    price={itemDetail.price}
                    stock={itemDetail.stock}
                    detail={itemDetail.detail}
                    />
                ) : (<Loader />)
                }
            </div>
        </>
    );
}

export default ItemDetailContainer;