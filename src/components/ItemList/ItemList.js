import Item from "../Item/Item";
import "./ItemList.css"


const ItemList = ({ products }) => {
    return (
        <>
            <div className="itemList">
                {products.map(n => <Item key={n.id} title={n.title} pictureUrl={n.pictureUrl} price={n.price} stock={n.stock} />)}
            </div>
        </>
    )
}

export default ItemList;