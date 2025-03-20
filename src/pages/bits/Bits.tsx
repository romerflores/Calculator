import { useState } from "react"
import Button from "../../components/button"
import Title from "../../components/title/Title"
import "./bits.css"
import NotFound from "../../templates/notFound/NotFound"
import BitsToInteger from "./bitsToInteger/BitsToInteger"
import WineContent from "../../components/themesContent/WineContent"
import IntegerToBinary from "./integerToBinary/IntegerToBinary"
import BitsOperations from "./bitOperations/BitsOperations"

function Bits() {


    const optionsBits = ["De binario a entero", "De entero a binario", "Operaciones bit a bit"]
    const [activeComponent, setActiveComponent] = useState(optionsBits[0])


    const renderComponent = () => {
        switch (activeComponent) {
        case "De binario a entero":
            return <BitsToInteger></BitsToInteger>
        case "De entero a binario":
            return <IntegerToBinary></IntegerToBinary>
        case "Operaciones bit a bit":
            return <BitsOperations></BitsOperations>
        default:
            return <NotFound></NotFound>;
        }
    };

    return <WineContent>
        <Title
            textTitle="Operaciones con bits"
            textColor="white"
            textBorder="green"
            textSize="30"
        />
        <section className="bits-content">
            <ul>
                {optionsBits.map(elemento =>
                    <Button key={elemento} type={(activeComponent == elemento) ? "selectedV2" : "toSelectV2"} textButton={elemento} onClick={() => setActiveComponent(elemento)} />
                )}
            </ul>
            <section className="primes-container-content">
                {
                    renderComponent()
                }
            </section>
        </section>
    </WineContent>

}
export default Bits