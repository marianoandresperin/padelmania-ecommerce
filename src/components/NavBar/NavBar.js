import CartWidget from '../CartWidget/CartWidget.js';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'

const NavBar = () => {
    return (
        <nav className="nav">
            <div className="logoContainer">
                <Link to={'/'} className="links">
                    <img src={logo} alt="Padelmania Logo" className="logo"></img>
                </Link>
            </div>
            <ul className="navUl">
                <li className="navLi"><Link to={'/'} className="links">HOME</Link></li>
                <li className="navLi"><NavLink to={'/category/Novato'} className="links">NOVATO</NavLink></li>
                <li className="navLi"><NavLink to={'/category/Intermedio'} className="links">INTERMEDIO</NavLink></li>
                <li className="navLi"><NavLink to={'/category/Avanzado'} className="links">AVANZADO</NavLink></li>
            </ul>
            < CartWidget /> 
        </nav>
    )
}

export default NavBar;
