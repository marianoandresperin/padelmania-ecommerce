import './CartWidget.css'
import cartIcon from './cartIcon.png'

const CartWidget = () => {
    return (
        <div className="cartContainer">
            <a href="#">
                <img src={cartIcon} alt="Cart Icon" className="cartIcon"></img>
            </a>
        </div>
    )
}

export default CartWidget;