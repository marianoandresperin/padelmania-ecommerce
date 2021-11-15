import CartWidget from '../CartWidget/CartWidget.js';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext.js';

const NavBar = () => {
    const { cart } = useCart();
    return (
        <nav className="nav">
            <div className="logoContainer">
                <h1>
                <Link to={'/'} className="links">PadelManía</Link>
                </h1>
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
