import './styles/NavBar.css'


const NavBar = () => {
    return (
        <nav className="nav">
            <div className="logoContainer">
                <h1>
                <a href="#" className="links">PadelManía</a>
                </h1>
            </div>
            <ul className="navUl">
                <li className="navLi"><a href="#" className="links">Home</a></li>
                <li className="navLi"><a href="#" className="links">Productos</a></li>
                <li className="navLi"><a href="#" className="links">Medios de Pago</a></li>
                <li className="navLi"><a href="#" className="links">¿Por qué nosotros?</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;
