import Button from "../../../components/button"
import BoxMessage from "../../../components/boxMessage/BoxMessage"

import Input from "../../../components/input/Input"

import { useState } from "react"

import "../gcd/GCD.css"
import Title from "../../../components/title/Title"



const st = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]);
let contAdmiration = 0;


function calculateGcd(a: bigint, b: bigint): bigint {
    if (b == 0n) return a;
    return calculateGcd(b, a % b)
}

function calculateLcm(a: bigint, b: bigint): bigint
{
    const mcd=calculateGcd(a,b);
    return (a*b)/mcd;
}

function generateAdmiration(): string {
    let ans = ""
    if (contAdmiration >= 5) {
        contAdmiration = 1;
        return "!"
    }
    else {
        contAdmiration++;
        for (let i = 0; i < contAdmiration; i++) {
            ans += "!"
        }
    }
    return ans
}

function validateStringIsBigInteger(cad: string): boolean {
    for (let i = 0; i < cad.length; i++) {
        if (!st.has(cad[i])) {
            return false;
        }
    }
    return true;
}



function LCM() {
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


    const [gcdResult, setLcmResult] = useState("")

    const [messageResult, setMessageResult] = useState("")

    const [messageBoxType,setMessageBoxType]=useState("none")

    const handleCalculteGcd = () => {

        const a = numbers.numberA.toString();
        const b = numbers.numberB.toString();

        if (!(validateStringIsBigInteger(a) && validateStringIsBigInteger(b)) || a.length==0 || b.length==0) {
            setLcmResult(" ... ");
            setMessageResult("Ingrese numeros validos" + generateAdmiration())
            setMessageBoxType("warning")
        }
        else {
            const aBigInt = BigInt(a);
            const bBigInt = BigInt(b);
            const ans = calculateLcm(aBigInt, bBigInt)
            setLcmResult(ans.toString());

            setMessageResult("😎")
            setMessageBoxType("okay")
        }

    }



    /**
     * Limpiar
     */
    const handleClear = () => {
        setNumbers({ numberA: "", numberB: "" });
        setLcmResult("")
        setMessageResult("")
    };

    return (
        <section className="gcd-content">
            <Title textTitle="Minimo comun multiplo" textColor="black" textSize="25"></Title>
            <Input
                name="numberA"
                placeholderInput="Numero A"
                textInput="Numero A"
                value={numbers.numberA}
                onChange={handleInputChange}
            />
            <Input
                name="numberB"
                placeholderInput="Numero B"
                textInput="Numero B"
                value={numbers.numberB}
                onChange={handleInputChange}
            />
            <div>
                <Button textButton="Calcular" type="okay" onClick={handleCalculteGcd}></Button>
                <Button textButton="Limpiar" type="submit" onClick={handleClear} />
            </div>
            <BoxMessage
                type={messageBoxType}
                textMessage={`El resultado es ${gcdResult.toString()}\n${messageResult}`}>
            </BoxMessage>
        </section>

    )
}
export default LCM