import { useState } from "react"
import Input from "../../../components/input/Input"
import Title from "../../../components/title/Title"
import Button from "../../../components/button"
import { validateStringIsBigInteger } from "../../../utils/validates"
import BoxMessage from "../../../components/boxMessage/BoxMessage"
import ButtonsContainer from "../../../components/buttonsContainer/ButtonsContainer"


const OPERATIONS_TEXTS = [
    "AND &", "OR |", "XOR ^","NOT ~"
]


function BitsOperations() {

    const [numberA, setNumberA] = useState("")
    const [numberB, setNumberB] = useState("")
    const [operationType, setOperationType] = useState(OPERATIONS_TEXTS[0])
    const [typeMessage, setTypeMessage] = useState("none")
    const [result, setResult] = useState("")
    const [isActiveNumberB,setIsActiveNumberB]=useState(true)

    const handleChangeType = (elemento: string) => {
        setOperationType(elemento);
        if(elemento==OPERATIONS_TEXTS[3])
        {
            setIsActiveNumberB(false);
        }
        else
        {
            setIsActiveNumberB(true);
        }
    }


    const hadleChangeInputNumberA = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (validateStringIsBigInteger(event.target.value)) setNumberA(event.target.value)
    }

    const hadleChangeInputNumberB = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (validateStringIsBigInteger(event.target.value)) setNumberB(event.target.value)
    }


    const handleClear = () => {
        setNumberA("");
        setNumberB("");
        setTypeMessage("none")
    }


    const handleCalculateOperation = () => {
        //
        if (validateStringIsBigInteger(numberA) && validateStringIsBigInteger(numberB) && numberA.length) {
            const numberABigInteger = BigInt(numberA)
            const numberBBigInteger = BigInt(numberB)

            if (operationType == OPERATIONS_TEXTS[0]) {
                setResult((numberABigInteger & numberBBigInteger).toString())
            }
            else if (operationType == OPERATIONS_TEXTS[1]) {
                setResult((numberABigInteger | numberBBigInteger).toString())
            }
            else if(operationType == OPERATIONS_TEXTS[2]) {
                setResult((numberABigInteger ^ numberBBigInteger).toString())
            }
            else
            {
                setResult((~numberABigInteger).toString())
            }
            setTypeMessage("okay")
        }
        else {
            setTypeMessage("warning")
            setResult("Ingrese numeros validos")
        }
    }


    return <>
        <Title
            textTitle="Operaciones Bit a Bit"
            textSize="30"
            textColor="var(--wine)"
        />


        <Input
            name="numberA"
            textInput="1er numero"
            value={numberA}
            onChange={hadleChangeInputNumberA}
            padding="10px"
        />
        <Input
            name="numberB"
            textInput="2do numero"
            value={numberB}
            onChange={hadleChangeInputNumberB}
            padding="10px"
            isActive={isActiveNumberB}
        />

        <ButtonsContainer padding="10px"> 
            {
                OPERATIONS_TEXTS.map(elemento =>
                    <Button key={elemento + "Button"} type={(operationType == elemento) ? "selectedV2" : "toSelectV2"} textButton={elemento} onClick={() => handleChangeType(elemento)} />
                )}
        </ButtonsContainer>


        <div>
            <Button
                textButton="Calcular"
                type="okay"
                onClick={handleCalculateOperation}
            />
            <Button
                textButton="Limpiar"
                type="danger"
                onClick={handleClear}
            />
        </div>

        <BoxMessage
            textMessage={result}
            type={typeMessage}
        />


    </>
}

export default BitsOperations