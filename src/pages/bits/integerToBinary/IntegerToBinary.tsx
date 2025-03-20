import { useState } from "react";
import BoxMessage from "../../../components/boxMessage/BoxMessage";
import Button from "../../../components/button";
import Input from "../../../components/input/Input";
import Title from "../../../components/title/Title";
import { validateStringIsBigInteger } from "../../../utils/validates";
import { stringIntegerToBinary } from "../../../utils/maths";



function IntegerToBinary() {

    const [inputContent, setInputContent] = useState("")
    const [result, setResult] = useState("");
    const [messageType, setMessageType] = useState("none")

    const handleChangeInputNumber = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const currtInput = event.target.value
        if (validateStringIsBigInteger(currtInput)) setInputContent(currtInput);

    }


    const handleClear = () => {
        setInputContent("")
        setResult("")
        setMessageType("none")
    }

    const handleCalculate = () => {
        if (validateStringIsBigInteger(inputContent)) {
            setResult(stringIntegerToBinary(inputContent));
            setMessageType("okay")

        }
        else {
            setResult("Ingrese numeros validos");
            setMessageType("warning")
        }
    }

    return <>

        <Title
            textTitle="De Entero a Binario"
            textSize="30"
            textColor="var(--wine)"
        />

        <Input
            name="bitsInput"
            onChange={handleChangeInputNumber}
            textInput="Ingresa un numero Entero"
            value={inputContent}
            placeholderInput="141016"
            padding="10px"
        />
        <div>
            <Button textButton="Calcular" type="okay" onClick={handleCalculate} />
            <Button textButton="Limpiar" type="danger" onClick={handleClear} />
        </div>
        <BoxMessage
            textMessage={`${result}`}
            type={messageType}
        />

    </>
}



export default IntegerToBinary