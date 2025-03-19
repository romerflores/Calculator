import "./calculator.css"
import Title from "../../components/title/Title"
import Button from "../../components/button"
import GCD from "./gcd/GCD"
import LCM from "./lcm/LCM"
import Exponentiation from "./exponentiation/Exponentation"
import { useState } from "react"
import NotFound from "../../templates/notFound/NotFound"
import CalculatorInside from "./calculator/Calculator-inside"
import Infix from "./infijaCalculator/Infix"
import WineContent from "../../components/themesContent/WineContent"

function Calculator()
{
    const optionsCalculator=["GCD","LCM","Exponenciacion","Calculadora","Calculadora Infix"]

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
        case "Calculadora":
            return <CalculatorInside></CalculatorInside>
        case "Calculadora Infix":
            return <Infix></Infix>
        default:
            return <NotFound></NotFound>;
        }
    };


    return (
        <WineContent color="var(--gray)">
            <Title textTitle={"Calculadora de numero Grandes"} textColor="black" textSize="30"></Title>
            <section className="calculator-content">
                <ul>
                    {optionsCalculator.map(elemento =>
                        <Button key={elemento} type={(activeComponent==elemento)? "selected":"toSelect"} textButton={elemento} onClick={()=> changeActiveComponent(elemento)} />
                    )}
                </ul>
                <>{renderComponent()}</>
                
            </section>
        </WineContent>
    )
}
export default Calculator