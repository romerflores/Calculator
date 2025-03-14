import { useState } from "react"
import Input from "../../../components/input/Input"
import Title from "../../../components/title/Title";
import BoxMessage from "../../../components/boxMessage/BoxMessage";
import Button from "../../../components/button";
import {validateIsBigInteger} from "../../../utils/validates"
import { primesFactoringString } from "../../../utils/maths";

/*  TODO
    Se debe mejorar la factorizacion de numeros primos con la rueda de pollard
*/


function Factoring()
{
    //constantes para useState
    const [inputFactoring,setInputFactoring]=useState("");
    const [textBoxMessage,setTextBoxMessage]=useState("");
    const [typeBoxMessage,setTypeBoxMessage]=useState("none");


    const handleCalculateFactoring=()=>
    {
        if(Number(inputFactoring)>=9007199254740991)
        {
            setTextBoxMessage("El numero es muy grande y no puedo factorizarlo :(")
            setTypeBoxMessage("warning")
        }
        else if(validateIsBigInteger(inputFactoring) && inputFactoring.length>0 && BigInt(inputFactoring)>0n)
        {
            //factorizar
            // console.log()

            setTypeBoxMessage("okay")
            setTextBoxMessage("El resultado es "+primesFactoringString(Number(inputFactoring)))
        }
        else
        {
            setTypeBoxMessage("warning")
            setTextBoxMessage("Ingrese numeros validos")
        }
    }

    const handleInputChange=(event: React.ChangeEvent<HTMLTextAreaElement>)=>
    {
        if(validateIsBigInteger(event.target.value) && event.target.value.length<=17)setInputFactoring(event.target.value);
    }

    const handleClear=()=>
    {
        setInputFactoring("");
        setTextBoxMessage("");
        setTypeBoxMessage("none")
    }

    return<>
        <Title
            textTitle="Factorizacion en numeros primos"
            textSize="20"
        />
        <Title
            textTitle="De momento solo se acepta numeros menores de 17 digitos :("
            textSize="15"
            textColor="rgb(56, 55, 55)"
        />
        <Input
            name="numero"
            textInput="Ingrese numero a factorizar"
            value={inputFactoring}
            padding="10px"
            placeholderInput="123123"
            onChange={handleInputChange}
        />
        <div>
            <Button textButton="Calcular" type="okay" onClick={handleCalculateFactoring}/>
            <Button textButton="Limpiar" type="warning" onClick={handleClear}/>
        </div>

        <BoxMessage textMessage={textBoxMessage} type={typeBoxMessage} />
        
    </>
}
export default Factoring