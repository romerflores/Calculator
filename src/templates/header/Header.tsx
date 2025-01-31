import { useState, useEffect } from "react";
import el_bicho from "../../../public/images/el-bicho.webp";
import menuImage from "../../../public/icons/menu.svg";
import "./header.css";



import { Link} from "react-router";

function Header() {
    // Estado para controlar si el menú está abierto o cerrado
    const [isMenuOpen, setIsMenuOpen] = useState(false);



    const textBanner = [
        "Cristiano ronaldo gano 34 copas en toda su carrera",
        "Messi fracaso en el 2014 pero conquisto el mundo en el 2016",
        "El perrito kesi kesi de los memes te desea un feliz aprendizaje"
    ][Math.floor(Math.random() * 10) % 3];

    // Función que alterna el estado del menú
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 895) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <header className="header">
            <section className="header__info">
                <p id="textoBanner">
                    {textBanner}
                </p>
            </section>
            <section className="container-navbar">
                <nav className="navbar container">
                    <a href="#" className="navbar__logo">
                        <img src={el_bicho} alt="Logo el bicho siuuuu" />
                        <span>Romer's Page</span>
                    </a>
                    <div className="navbar__nav">
                        <ul className="nav__list">
                            <li className="nav__link">
                                <Link to="/primos"> Primos </Link>
                            </li>
                            <li className="nav__link">
                                <Link to="/criptografia">Criptografía</Link>
                            </li>
                            <li className="nav__link">
                                <Link to="/calculadora">Caluladora</Link>
                            </li>
                            <li className="nav__link">
                                <Link to="/aprende">Aprende</Link>
                            </li>
                        </ul>
                        <button className="navbar__toggle-btn" onClick={toggleMenu}>
                            <img src={menuImage} alt="Menú desplegar" />
                        </button>
                        <div className={`navbar__mobile-menu ${isMenuOpen ? "open" : ""}`}>
                            <ul className="nav__list-mobile">
                                <li className="nav__link-mobile">
                                    <Link to="/criptografia">Criptografía</Link>
                                </li>
                                <li className="nav__link-mobile">
                                    <Link to="/primos">Primos</Link>
                                </li>
                                <li className="nav__link-mobile">
                                    <Link to="/calculadora">Calculadora</Link>
                                </li>
                                <li className="nav__link-mobile">
                                    <Link to="/aprende">Aprende</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </header>
    );
}

export default Header;
