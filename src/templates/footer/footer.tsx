import "./footer.css"

import github from "../../../public/icons/github.svg"
import facebook from "../../../public/icons/fb.svg"
import twitter from "../../../public/icons/x.svg"
import youtube from "../../../public/icons/youtube.svg"
import donate from "../../../public/icons/donate.svg"


function Footer()
{
    return <>
        <footer className="footer">
            <div className="container__footer">
                <div className="lista__item">
                    <h3>CALCULADORA</h3>
                    <ul>
                        <li><a className="lista__item__link" href="#">Numeros Grandes</a></li>
                        <li><a className="lista__item__link" href="#">Inversos Modulares</a></li>
                        <li><a className="lista__item__link" href="#">Exponenciacion</a></li>
                        <li><a className="lista__item__link" href="#">MCD</a></li>
                    </ul>
                </div>
                <div className="lista__item">
                    <h3>CRIPTOGRAFÍA</h3>
                    <ul>
                        <li><a className="lista__item__link" href="#">Sistema de Hill</a></li>
                        <li><a className="lista__item__link" href="#">Cifrado de Cesar</a></li>
                        <li><a className="lista__item__link" href="#">RSA</a></li>
                        <li><a className="lista__item__link" href="#">Vigener</a></li>
                    </ul>
                </div>
                <div className="lista__item">
                    <h3>NÚMEROS PRIMOS</h3>
                    <ul>
                        <li><a className="lista__item__link" href="#">N-ésimo primo</a></li>
                        <li><a className="lista__item__link" href="#">¿Es primo?</a></li>
                        <li><a className="lista__item__link" href="#">Miller Rabin</a></li>
                        <li><a className="lista__item__link" href="#">Criba de Eratóstenes</a></li>
                        <li><a className="lista__item__link" href="#">Factorización de Romer</a></li>
                    </ul>
                </div>
                <div className="lista__item">
                    <h3>TODO</h3>
                    <ul>
                        <li><a className="lista__item__link" href="#">Lista item</a></li>
                        <li><a className="lista__item__link" href="#">Lista item</a></li>
                        <li><a className="lista__item__link" href="#">Lista item</a></li>
                        <li><a className="lista__item__link" href="#">Lista item</a></li>
                        <li><a className="lista__item__link" href="#">Lista item</a></li>
                    </ul>
                </div>
            </div>
            <hr className="linea" />
            <div className="container__footer">
                <div className="redes__item">
                    <a href="#"><img className="red__image" src={github} alt="GH Romer" /></a>
                    <a href="#"><img className="red__image" src={facebook} alt="Fb Romer" /></a>
                    <a href="#"><img className="red__image" src={youtube} alt="YTB Romer" /></a>
                    <a href="#"><img className="red__image" src={twitter} alt="X Romer" /></a>
                </div>
                <div className="redes__item">
                    <a href="#">
                        <img src={donate} className="red__image" alt="Donar" />
                        <p>Comprame un café</p>
                    </a>
                </div>
            </div>
            <div className="container__footer">
                <div className="redes__item">
                    <p style={{ textAlign: "center", fontSize: "10px" }}>Todos los derechos reservados Romer Flores</p>
                </div>
            </div>
        </footer>

    
    </>
    
};

export default Footer;




        