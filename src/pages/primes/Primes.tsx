import { useState } from "react"
import Button from "../../components/button"
import Title from "../../components/title/Title"
import "./primes.css"
import NotFound from "../../templates/notFound/NotFound";
import IsPrime from "./isprime/IsPrime";
import Factoring from "./factoring/Factoring";

function Primes() {


    const [activePrimeContent, setActivePrimeContent] = useState("n-simo");


    const renderPrimerContent = () => {
        switch (activePrimeContent) {
        case "n-simo":
            return "Esta funcion estara disponible dentro de un par de semanas"
        case "isprime":
            return <IsPrime></IsPrime>
        case "test":
            return "teset"

        case "criba":
            return "Eratostenes"

        case "factoring":
            return <Factoring/>

        default:
            return <NotFound></NotFound>
        }
    }


    return (<>
        <section className="primes-container">
            <Title textTitle="Numeros Primos" textColor="black" textSize="30" />

            <nav className="primes-button-content">
                <Button textButton="N-simo Primo" type={("n-simo" == activePrimeContent ? "warning" : "danger")} onClick={() => setActivePrimeContent("n-simo")}></Button>
                <Button textButton="Es primo?" type={("isprime" == activePrimeContent ? "warning" : "danger")} onClick={() => setActivePrimeContent("isprime")}></Button>
                <Button textButton="Test de Miller" type={("test" == activePrimeContent ? "warning" : "danger")} onClick={() => setActivePrimeContent("test")}></Button>
                <Button textButton="Criba de Eratostenes" type={("criba" == activePrimeContent ? "warning" : "danger")} onClick={() => setActivePrimeContent("criba")}></Button>
                <Button textButton="Factorizacion" type={("factoring" == activePrimeContent ? "warning" : "danger")} onClick={() => setActivePrimeContent("factoring")}></Button>
            </nav>
            


            <section className="primes-container-content">
                {renderPrimerContent()}
            </section>
        </section>
    </>)
}

export default Primes