
import Title from "../../components/title/Title";

import "./home-style.css"


function Home() {

    return (
        <>
            <section className="homepage-container">

                <div className="card-home">
                    <Title textAlign_="end" textTitle="Bienvenido, a la Pagina de Romer" textColor="var(--white)" textSize="50" textBorder="var(--wine) 0.5px"></Title>
                </div>
                <div className="card-home">
                    <Title textAlign_="end" textTitle="Multiples herramientas de calculos matematicos y criptografia" textColor="var(--red)" textSize="25" textBorder="var(--white) 0.5px"></Title>
                </div>
                <div className="card-home">
                    <Title
                        textTitle='"Creare mi propia calculadora con juegos de azar y mujerzuelas" -Bender "Doblador" Rodriguez'
                        textColor="black"
                        textSize="10"
                        textAlign_="end"
                    />
                </div>

            </section>
        </>
    );
};
export default Home;