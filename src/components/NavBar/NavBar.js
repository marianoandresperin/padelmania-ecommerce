import CartWidget from '../CartWidget/CartWidget.js';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext.js';
import logoImg from "../../assets/padelmania logo.png"

const NavBar = () => {
    const { cart } = useCart();
    return (
        <nav className="nav">
            <div className="logoContainer">
                <Link to={'/'} className="links">
                    <img src={logoImg} alt="Padelmania Logo" className="logoImg"></img>
                </Link>
            </div>
            <ul className="navUl">
                <li className="navLi"><Link to={'/'} className="links">Home</Link></li>
                <li className="navLi"><NavLink to={'/category/Novato'} className="links">Novato</NavLink></li>
                <li className="navLi"><NavLink to={'/category/Intermedio'} className="links">Intermedio</NavLink></li>
                <li className="navLi"><NavLink to={'/category/Avanzado'} className="links">Avanzado</NavLink></li>
            </ul>
            {cart.length >= 1 ?
                < CartWidget /> :
                null
            }
        </nav>
    )
}

export default NavBar;
