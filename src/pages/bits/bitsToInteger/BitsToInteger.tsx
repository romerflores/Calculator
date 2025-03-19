import {  useState } from "react"
import Button from "../../../components/button"
import Input from "../../../components/input/Input"
import Title from "../../../components/title/Title"

import { validateStringIsBinary } from "../../../utils/validates"
import { binaryToBigInteger } from "../../../utils/maths"

import BoxMessage from "../../../components/boxMessage/BoxMessage"


function BitsToInteger()
{

    const [inputContent,setInputContent]=useState("")
    const [result,setResult]=useState("");
    const [messageType,setMessageType]=useState("none")

    const handleChangeInputbits=(event: React.ChangeEvent<HTMLTextAreaElement>)=>
    {
        const currtInput=event.target.value
        if(validateStringIsBinary(currtInput))setInputContent(currtInput);

    }


    const handleClear=()=>
    {
        setInputContent("")
        setResult("")
        setMessageType("none")
    }

    const handleCalculate=()=>
    {
        if(validateStringIsBinary(inputContent))
        {
            setResult(binaryToBigInteger(inputContent).toString());
            setMessageType("okay")

        }
        else
        {
            setResult("Ingrese numeros validos");
            setMessageType("warning")
        }
    }

    return<>
        <Title
            textTitle="De binario a entero"
            textSize="30"
            textColor="var(--wine)"
        />

        <Input
            name="bitsInput"
            onChange={handleChangeInputbits}
            textInput="Ingresa un numero binario"
            value={inputContent}
            placeholderInput="1010101001"
            padding="10px"
        />
        <div>
            <Button textButton="Calcular" type="okay" onClick={handleCalculate}/>
            <Button textButton="Limpiar" type="danger" onClick={handleClear}/>
        </div>
        <BoxMessage
            textMessage={`${result}`}
            type={messageType}
        />
        
    </>
}

export default BitsToInteger