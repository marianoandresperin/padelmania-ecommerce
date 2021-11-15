import './CartWidget.css'
import cartIcon from './cartIcon.png'
import { NavLink } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';

const CartWidget = () => {
    const { cart } = useCart();

    return (
        <div className="cartContainer">
            <NavLink to={`/cart`} >
                <h1 className="cartWidgetQuantity">{cart.length}</h1>
                <img src={cartIcon} alt="Cart Icon" className="cartIcon"></img>
            </NavLink>
        </div>
    )
}

export default CartWidget;