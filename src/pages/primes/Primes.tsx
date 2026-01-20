import { useState } from "react"
import Button from "../../components/button"
import Title from "../../components/title/Title"
import "./primes.css"
import NotFound from "../../templates/notFound/NotFound";
import IsPrime from "./isprime/IsPrime";
import Factoring from "./factoring/Factoring";
import MillerRabin from "./millerRabin/MillerRabin";
import WineContent from "../../components/themesContent/WineContent";

function Primes() {



    const optionsPrimes = ["N-simo Primo", "¿Es primo?", "Test de Miller", "Criba de Eratostenes", "Factorizacion"]
    const [activePrimeContent, setActivePrimeContent] = useState(optionsPrimes[0]);


    const renderPrimerContent = () => {
        switch (activePrimeContent) {
        case optionsPrimes[0]:
            return "Esta funcion estara disponible dentro de un par de semanas"
        case optionsPrimes[1]:
            return <IsPrime></IsPrime>
        case optionsPrimes[2]:
            return <MillerRabin></MillerRabin>
        case optionsPrimes[3]:
            return "Eratostenes"
        case optionsPrimes[4]:
            return <Factoring />
        default:
            return <NotFound></NotFound>
        }
    }


    return (<>
        <WineContent>
            <Title textTitle="Numeros Primos" textColor="var(--white)" textSize="30" />

            <section className="bits-content">
                <ul>
                    {
                        optionsPrimes.map(elemento =>
                            <Button key={elemento} type={(activePrimeContent == elemento) ? "selectedV2" : "toSelectV2"} textButton={elemento} onClick={() => setActivePrimeContent(elemento)} />
                        )}
                </ul>
                <section className="primes-container-content">
                    {
                        renderPrimerContent()
                    }
                </section>
            </section>
        </WineContent>
    </>)
}

export default Primes