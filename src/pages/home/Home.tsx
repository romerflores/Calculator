
import Title from "../../components/title/Title";

import "./home-style.css"


function Home() {

    return (
        <>
            <section className="homepage-container">    

                <div className="card-home">
                    <Title textAlign_="end" textTitle="Bienvenido, a la Pagina de Romer" textColor="var(--withe)" textSize="50"></Title>    
                </div>
                <div className="card-home">
                    <Title textAlign_="end" textTitle="Multiples herramientas de calculos matematicos y criptografia" textColor="var(--red)" textSize="25"></Title>
                </div>
                

            </section>
        </>
    );
};
export default Home;