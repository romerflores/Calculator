import { useState } from "react";
import BoxMessage from "../../../components/boxMessage/BoxMessage";
import Button from "../../../components/button";
import Input from "../../../components/input/Input";
import Title from "../../../components/title/Title";

import { BigIntCalculator } from "../../../utils/maths";
import { validateStringIsInfix } from "../../../utils/validates";

/*TODO

    Se debe realizar las validaciones para el input
*/



function Infix() {
    // let calc=new BigIntCalculator();

    const [infixInput,setInfixInput]=useState("");
    const [messageBoxType,setMessageBoxType]=useState("none");
    const [messageResult,setMessageResult]=useState("");
    // const [finalAnswer,setFinalAnswer]=useState("");
    
    const handleClearInfixInput=()=>{
        setInfixInput("");
        setMessageResult("");
        setMessageBoxType("none")
    }



    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>)  => {

        if(validateStringIsInfix(event.target.value))setInfixInput(event.target.value);

    };
    
    const handleCalculteInfix=()=>
    {
        let currtInfixInput=infixInput
        currtInfixInput=currtInfixInput.trimEnd()
        setInfixInput(currtInfixInput)

        // setFinalAnswer(BigIntCalculator.evaluate(infixInput.toString()).toString());
            


        console.log(infixInput)
        setMessageResult(BigIntCalculator.evaluate(infixInput.toString()).toString());
        setMessageBoxType("okay")
    }



    return <section className="gcd-content">
        <Title textTitle="Calculadora de expresiones (Beta)" textColor="black" textSize="25"></Title>
        <Input
            name="numberA"
            placeholderInput="(3+3)*2"
            textInput="Ingrese una expresion"
            value={infixInput}
            onChange={handleInputChange}
            padding="10px"
        />
        <div>
            <Button textButton="Calcular" type="okay" onClick={handleCalculteInfix}></Button>
            <Button textButton="Limpiar" type="submit" onClick={handleClearInfixInput} />
        </div>
        {/* <p>Numero ingresado A es: {numbers.numberA}</p>
    <p>Numero ingresado B es: {numbers.numberB}</p> */}
        {/* <p>El resultado es <span>{gcdResult.toString()}</span></p> */}
        <BoxMessage
            type={messageBoxType}
            textMessage={`El resultado es \n${messageResult}`}>

        </BoxMessage>
    </section>
}
export default Infix