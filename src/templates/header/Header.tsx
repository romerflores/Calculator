import { useState, useEffect } from "react";
import el_bicho from "../../../public/images/el-bicho.webp";
import menuImage from "../../../public/icons/menu.svg";
import "./header.css";



import { Link } from "react-router";

const textBanner = [
    "Cristiano ronaldo gano 35 copas en toda su carrera",
    "Messi fracaso en el 2014 pero conquisto la compa y el mundo en el 2022",
    "El perrito kesi kesi de los memes te desea un feliz aprendizaje",
    "La vida es bella, devemos disfrutar cada momento de esta, incluso si es lunes",
    "Cuando Chuck Norris se quedo profundamente dormido no asistio a clases durante 2 dias, estos ahora se conocen como Sabado y Domingo"
][Math.floor(Math.random() * 10) % 5];

function Header() {

    // Estado para controlar si el menú está abierto o cerrado
    const [isMenuOpen, setIsMenuOpen] = useState(false);




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
                    <Link to="/home" className="navbar__logo">
                        <img src={el_bicho} alt="Logo el bicho siuuuu" />
                        <span>Romer's Page</span>
                    </Link>
                    <div className="navbar__nav">
                        <ul className="nav__list">
                            <li className="nav__link">
                                <Link to="/primos"> Primos </Link>
                            </li>
                            <li className="nav__link">
                                <Link to="/criptografia">Criptografía</Link>
                            </li>
                            <li className="nav__link">
                                <Link to="/calculadora">Calculadora</Link>
                            </li>
                            <li className="nav__link">
                                <Link to="/aprende">Aprende</Link>
                            </li>
                            <li className="nav__link">
                                <Link to="/bits">Bits</Link>
                            </li>
                        </ul>
                        <button className="navbar__toggle-btn" onClick={toggleMenu}>
                            <img src={menuImage} alt="Menú desplegar" />
                        </button>
                        <div className={`navbar__mobile-menu ${isMenuOpen ? "open" : ""}`}>

                            <Link className="nav__list-mobile-link" to="/criptografia" onClick={toggleMenu} >Criptografia</Link>

                            <hr className="link-separate" />

                            <Link className="nav__list-mobile-link" to="/primos" onClick={toggleMenu} >Primos</Link>
                            <hr className="link-separate" />

                            <Link className="nav__list-mobile-link" to="/calculadora" onClick={toggleMenu}>Calculadora</Link>
                            <hr className="link-separate" />
                            <Link className="nav__list-mobile-link" to="/aprende" onClick={toggleMenu}>Aprende</Link>
                            <hr className="link-separate" />
                            <Link className="nav__list-mobile-link" to="/bits" onClick={toggleMenu}>Bits</Link>


                        </div>
                    </div>
                </nav>
            </section>
        </header>
    );
}

export default Header;
