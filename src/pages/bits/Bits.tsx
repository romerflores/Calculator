import { useState } from "react"
import Button from "../../components/button"
import Title from "../../components/title/Title"
import "./bits.css"

function Bits() {


    const optionsBits = ["De binario a entero", "De entero a binario", "Operaciones bit a bit"]
    const [activeComponent, setActiveComponent] = useState(optionsBits[0])


    return <div className="bits-container">
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
        </section>
    </div>

}
export default Bits