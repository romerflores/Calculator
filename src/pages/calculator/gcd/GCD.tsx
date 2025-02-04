import Button from "../../../components/button"

import Input from "../../../components/input/Input"
import BoxMessage from "../../../components/boxMessage/BoxMessage"

import { useState } from "react"

import "./GCD.css"


const st = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]);
let contAdmiration = 0;


function calculateGcd(a: bigint, b: bigint): bigint {
    if (b == 0n) return a;
    return calculateGcd(b, a % b)
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



function GCD() {
    const [numbers, setNumbers] = useState({
        numberA: "",
        numberB: ""
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setNumbers((prevValues) => ({
            ...prevValues,
            [name]: value,  // Actualiza solo la propiedad correspondiente
        }));
    };

    const [gcdResult, setGcdResult] = useState("")

    const [messageResult, setMessageResult] = useState("")

    const [messageBoxType,setMessageBoxType]=useState("none")

    const handleCalculteGcd = () => {

        const a = numbers.numberA.toString();
        const b = numbers.numberB.toString();

        if (!(validateStringIsBigInteger(a) && validateStringIsBigInteger(b)) || a.length==0 || b.length==0) {
            setGcdResult(" ... ");
            setMessageResult("Ingrese numeros validos" + generateAdmiration())
            setMessageBoxType("warning")
        }
        else {
            const aBigInt = BigInt(a);
            const bBigInt = BigInt(b);
            const ans = calculateGcd(aBigInt, bBigInt)
            setGcdResult(ans.toString());

            if (ans == 1n) {
                setMessageResult("Los numeros son coprimos 🤓👆")
            }
            else { setMessageResult("😎") }

            setMessageBoxType("okay")
        }

    }



    /**
     * Limpiar
     */
    const handleClear = () => {
        setNumbers({ numberA: "", numberB: "" });
        setGcdResult("")
        setMessageResult("")
        setMessageBoxType("none")
    };

    return (

        <section className="gcd-content">
            <h2>Maximo Comun Divisior</h2>
            <Input
                name="numberA"
                typeInput="string"
                placeholderInput="Numero A"
                textInput="Numero A"
                value={numbers.numberA}
                onChange={handleInputChange}
            />
            <Input
                name="numberB"
                typeInput="string"
                placeholderInput="Numero B"
                textInput="Numero B"
                value={numbers.numberB}
                onChange={handleInputChange}
            />
            <div>
                <Button textButton="Calcular" type="okay" onClick={handleCalculteGcd}></Button>
                <Button textButton="Limpiar" type="submit" onClick={handleClear} />
            </div>
            {/* <p>Numero ingresado A es: {numbers.numberA}</p>
            <p>Numero ingresado B es: {numbers.numberB}</p> */}
            {/* <p>El resultado es <span>{gcdResult.toString()}</span></p> */}
            <BoxMessage
                type={messageBoxType}
                textMessage={`El resultado es ${gcdResult.toString()}\n${messageResult}`}>

            </BoxMessage>
        </section>

    )
}
export default GCD