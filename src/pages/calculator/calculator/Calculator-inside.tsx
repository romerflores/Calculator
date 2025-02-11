import Button from "../../../components/button"
import BoxMessage from "../../../components/boxMessage/BoxMessage"

import Input from "../../../components/input/Input"

import { useState } from "react"

import "../gcd/GCD.css"
import Title from "../../../components/title/Title"

/**
 * TODO
 * falta realizar la logica, para la validacion de no oermitir
 * numeros negatios en el exponente
 */



const st = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]);
let contAdmiration = 0;



function generateAdmiration(): string {
    let ans = ""
    if (contAdmiration >= 5) {
        contAdmiration = 1;
        return "."
    }
    else {
        contAdmiration++;
        for (let i = 0; i < contAdmiration; i++) {
            ans += "."
        }
    }
    return ans
}

function validateStringIsBigInteger(cad: string): boolean {
    let ini=0;
    if(cad.length>0)
    {
        if(cad[0]=='-' || cad[0]=="+")ini++;
    }
    for (let i = ini; i < cad.length; i++) {
        if (!st.has(cad[i])) {
            return false;
        }
    }
    return true;
}



function CalculatorInside() {
    const [numbers, setNumbers] = useState({
        numberA: "",
        numberB: ""
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>)  => {
        const { name, value } = event.target;
        setNumbers((prevValues) => ({
            ...prevValues,
            [name]: value,  // Actualiza solo la propiedad correspondiente
        }));
    };

    const [operationResult, setOperationResult] = useState("")

    const [messageResult, setMessageResult] = useState("")

    const [messageBoxType, setMessageBoxType] = useState("none")

    const handleCalculteOperation = () => {

        const a = numbers.numberA.toString();
        const b = numbers.numberB.toString();

        if (!(validateStringIsBigInteger(a) && validateStringIsBigInteger(b)) || a.length == 0 || b.length == 0) {
            setOperationResult("...");
            setMessageResult("Ingrese numeros validos" + generateAdmiration())
            setMessageBoxType("warning")
        }
        else {
            const aBigInt = BigInt(a);
            const bBigInt = BigInt(b);
            let ans=0n;
            try {
                switch (activeOperation) {
                case "suma":
                    ans=aBigInt+bBigInt;
                    break;
                case "resta":
                    ans=aBigInt-bBigInt;
                    break;
                case "multiplicacion":
                    ans=aBigInt*bBigInt;
                    break;
                case "division":
                    ans=aBigInt/bBigInt;
                    break;
                case "modulo":
                    ans=aBigInt%bBigInt;
                    break
                default:
                    break;
                }
                setOperationResult(ans.toString());

                setMessageResult("😎")
                setMessageBoxType("okay")
            }
            catch {
                console.error("El numero es mas grande que las moleculas en el universo")
                ans = 0n

                setOperationResult("INF");
                setMessageResult("El numero es tan grande que supera la contidad de moleculas en el universo :0"+generateAdmiration())
                setMessageBoxType("error")
            }
        }

    }



    /**
     * Limpiar
     */
    const handleClear = () => {
        setNumbers({ numberA: "", numberB: "" });
        setOperationResult("")
        setMessageResult("")
        setMessageBoxType("none")
    };



    const [activeOperation, changeActiveOperation]=useState("suma");

    return (
        <section className="gcd-content">
            <Title textTitle="Calculadora (Soporta numeros grandes)" textColor="black" textSize="25"></Title>
            <Input
                name="numberA"
                placeholderInput="Numero A"
                textInput="Numero A"
                value={numbers.numberA}
                onChange={handleInputChange}

                padding="10px"

                style_={{height:"100px",width:"300px"}}
            />
            <Input
                name="numberB"
                placeholderInput="Numero B"
                textInput="Numero B"
                value={numbers.numberB}
                onChange={handleInputChange}
                padding="10px"

                style_={{height:"100px",width:"300px"}}
            />

            <div>
                <Button textButton="Sumar +" type={`${activeOperation=="suma"?"selected":"toSelect"}`} onClick={()=>changeActiveOperation("suma")}></Button>
                <Button textButton="Restar -" type={`${activeOperation=="resta"?"selected":"toSelect"}` } onClick={()=>changeActiveOperation("resta")}></Button>
                <Button textButton="Multiplicar *" type={`${activeOperation=="multiplicacion"?"selected":"toSelect"}`}  onClick={()=>changeActiveOperation("multiplicacion")}></Button>
                <Button textButton="Dividir /" type={`${activeOperation=="division"?"selected":"toSelect"}`} onClick={()=>changeActiveOperation("division")}></Button>
                <Button textButton="Modulo %" type={`${activeOperation=="modulo"?"selected":"toSelect"}`} onClick={()=>changeActiveOperation("modulo")}></Button>

            </div>

            <div>
                <Button textButton="Calcular" type="okay" onClick={handleCalculteOperation}></Button>
                <Button textButton="Limpiar" type="submit" onClick={handleClear} />
            </div>
            <BoxMessage
                type={messageBoxType}
                textMessage={`El resultado es ${operationResult.toString()}\n${messageResult}`}>
            </BoxMessage>
        </section>

    )
}
export default CalculatorInside