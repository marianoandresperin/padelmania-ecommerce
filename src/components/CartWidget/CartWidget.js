import './CartWidget.css'
import cartIcon from './cartIcon.png'
import { NavLink } from 'react-router-dom';

const CartWidget = () => {
    return (
        <div className="cartContainer">
            <NavLink to={`/cart`} >
                <img src={cartIcon} alt="Cart Icon" className="cartIcon"></img>
            </NavLink>
        </div>
    )
}

export default CartWidget;