import { useState } from "react";
import BoxMessage from "../../../components/boxMessage/BoxMessage"
import Button from "../../../components/button"
import Input from "../../../components/input/Input"
import Title from "../../../components/title/Title"

import { validateStringIsBigInteger } from "../../../utils/validates";
import { millerRabinTest } from "../../../utils/maths";


function MillerRabin() {


    //constantes para useState
    const [numberA, setNumberA] = useState("");
    const [numberB, setNumberB] = useState("");
    const [textBoxMessage, setTextBoxMessage] = useState("");
    const [typeBoxMessage, setTypeBoxMessage] = useState("none");


    const handleClear = () => {
        setNumberA("")
        setNumberB("")
        setTextBoxMessage("")
        setTypeBoxMessage("none")
    }

    const handleCalculateTest = () => {

        if(validateStringIsBigInteger(numberA) && validateStringIsBigInteger(numberB) && numberA.length>0 && numberB.length>0)
        {
            //realizar el test

            const a=BigInt(numberA)
            const b=Number(numberB)
            console.log(a,b);

            setTypeBoxMessage("okay")
            setTextBoxMessage("El resultado es "+millerRabinTest(a,b));

        }
        else
        {
            setTypeBoxMessage("warning")
            setTextBoxMessage("Ingrese numeros validos")
        }
    }


    const handleNumberAChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNumberA(event.target.value)
    }
    
    const handleNumberBChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNumberB(event.target.value)
    }


    return <>
        <Title
            textTitle="Test de Primalidad de Miller Rabin (Aun no funciona correctamente)"
            textSize="20"
        />
        <Title
            textTitle="Ingresa un numero a verificar y la cantidad de divisiones"
            textSize="15"
            textColor="rgb(56, 55, 55)"
        />
        <Input
            name="numero A"
            textInput="Ingrese numero"
            value={numberA}
            padding="10px"
            placeholderInput="123123"
            onChange={handleNumberAChange}
        />
        <Input
            name="numero B"
            textInput="Ingrese cantidad de divisiones"
            value={numberB}
            padding="10px"
            placeholderInput="123123"
            onChange={handleNumberBChange}
        />
        <div>
            <Button textButton="Calcular" type="okay" onClick={handleCalculateTest} />
            <Button textButton="Limpiar" type="warning" onClick={handleClear} />
        </div>

        <BoxMessage textMessage={textBoxMessage} type={typeBoxMessage} />
    </>
}

export default MillerRabin