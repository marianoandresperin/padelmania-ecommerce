import CartWidget from '../CartWidget/CartWidget.js';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="nav">
            <div className="logoContainer">
                <h1>
                <Link to={'/'} className="links">PadelManía</Link>
                </h1>
            </div>
            <ul className="navUl">
                <li className="navLi"><Link to={'/'} className="links">Home</Link></li>
                <li className="navLi"><a href="#" className="links">Novato</a></li>
                <li className="navLi"><a href="#" className="links">Intermedio</a></li>
                <li className="navLi"><a href="#" className="links">Avanzado</a></li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar;
