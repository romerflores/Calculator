import "./calculator.css"
import Title from "../../components/title/Title"
import Button from "../../components/button"
import GCD from "./gcd/GCD"
import LCM from "./lcm/LCM"
import Exponentiation from "./exponentiation/Exponentation"
import { useState } from "react"

function Calculator()
{
    const optionsCalculator=["GCD","LCM","Exponenciacion","Calculadora"]

    const [activeComponent,changeActiveComponent]=useState<string | null>("GCD");


    /**
     * Se renderiza a traves de un switch case, con use estate
     */

    const renderComponent = () => {
        switch (activeComponent) {
        case "GCD":
            return <GCD/>
        case "LCM":
            return <LCM/>
        case "Exponenciacion":
            return <Exponentiation/>
        default:
            return <div>Vaya... parece que aun no hay nada aqui...\n por que no vuelves despues?</div>;
        }
    };


    return (
        <>
            <Title textTitle={"Calculadora de numero Grandes"} textColor="black" textSize="30"></Title>
            <section className="calculator-content">
                <ul onClick={()=> console.log("hizo click")}>
                    {optionsCalculator.map(elemento =>
                        <Button key={elemento} type={(activeComponent==elemento)? "selected":"toSelect"} textButton={elemento} onClick={()=> changeActiveComponent(elemento)} />
                    )}
                </ul>
                <>{renderComponent()}</>
                
            </section>
        </>
    )
}
export default Calculator