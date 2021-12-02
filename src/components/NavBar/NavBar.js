import CartWidget from '../CartWidget/CartWidget.js';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { useState } from 'react';

const NavBar = () => {
    const [hamburger, setHamburger] = useState('hamburger')
    const [navUl, setNavUl] = useState('navUl')
    
    const handleHamburger = () => {
        hamburger === 'hamburger active' ? setHamburger('hamburger') : setHamburger('hamburger active');
        navUl === 'navUl active' ? setNavUl('navUl') : setNavUl('navUl active');
    }

    const hideOnClick = () => {
        setHamburger('hamburger')
        setNavUl('navUl')
    }

    return (
        <nav className="nav">
            <div className="logoContainer">
                <Link to={'/'} className="links">
                    <img src={logo} alt="Padelmania Logo" className="logo"></img>
                </Link>
            </div>
            <ul className={navUl}>
                <li className="navLi" onClick={hideOnClick}><Link to={'/'} className="links">HOME</Link></li>
                <li className="navLi" onClick={hideOnClick}><NavLink to={'/category/Novato'} className="links">NOVATO</NavLink></li>
                <li className="navLi" onClick={hideOnClick}><NavLink to={'/category/Intermedio'} className="links">INTERMEDIO</NavLink></li>
                <li className="navLi" onClick={hideOnClick}><NavLink to={'/category/Avanzado'} className="links">AVANZADO</NavLink></li>
            </ul>
            < CartWidget />
            <div className={hamburger} onClick={handleHamburger}>
                <span className='bar' onClick={handleHamburger}></span>
                <span className='bar' onClick={handleHamburger}></span>
                <span className='bar' onClick={handleHamburger}></span>
            </div>
        </nav>
    )
}

export default NavBar;
