import './CartWidget.css'
import cartIcon from '../../assets/cartIcon.png'
import { NavLink } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { useEffect, useState } from 'react';

const CartWidget = () => {
    const { cart } = useCart();
    const [totalQuantity, setTotalQuantity] = useState(0);

    useEffect(() => {
        setTotalQuantity(getTotalQuantity)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cart, totalQuantity])

    const getTotalQuantity = () => {
        let total = cart.map((item) => (item.cantidad))
        return total.reduce((a, b) => a + b, 0)
    }

    return (
        <div className="cartContainer">
            <div className='cartLinkContainer'>
                <NavLink className='cartLink' to={`/cart`} >
                    <h1 className="cartWidgetQuantity">{totalQuantity}</h1>
                    <img src={cartIcon} alt="Cart Icon" className="cartIcon"></img>
                </NavLink>
            </div>
        </div>
    )
}

export default CartWidget;