import Button from "../../../components/button"
import BoxMessage from "../../../components/boxMessage/BoxMessage"

import Input from "../../../components/input/Input"

import { useState } from "react"

import "../gcd/GCD.css"
import Title from "../../../components/title/Title"

import { binPow,binPowMod } from "../../../utils/maths"
import { validateStringIsBigInteger } from "../../../utils/validates"

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



function Exponentiation() {
    const [numbers, setNumbers] = useState({
        numberA: "",
        numberB: ""
    });

    const [moduloInput, setModuloInput] = useState("");
    const [enableMod, setEnableMod] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        if (validateStringIsBigInteger(name) || validateStringIsBigInteger(value)) {
            setNumbers((prevValues) => ({
                ...prevValues,
                [name]: value,  // Actualiza solo la propiedad correspondiente
            }));
        }
    };

    const [expoResult, setExpoResult] = useState("")

    const [messageResult, setMessageResult] = useState("")

    const [messageBoxType, setMessageBoxType] = useState("none")


    const handleInputModChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        if(validateStringIsBigInteger(event.target.value))setModuloInput(event.target.value);
    }
    const handleCalculteExpo = () => {

        const a = numbers.numberA.toString();
        const b = numbers.numberB.toString();
        const m = moduloInput.toString();

        if (!(validateStringIsBigInteger(a) && validateStringIsBigInteger(b) && (enableMod)?validateStringIsBigInteger(m):true) || a.length == 0 || b.length == 0 || (enableMod)?(m.length == 0):false) {
            setExpoResult("...");
            setMessageResult("Ingrese numeros validos" + generateAdmiration())
            setMessageBoxType("warning")
        }
        else {
            const aBigInt = BigInt(a);
            const bBigInt = BigInt(b);
            const mBigInt = BigInt(m);

            if (enableMod) {
                if(mBigInt!=0n)
                {
                    setExpoResult(binPowMod(aBigInt,bBigInt,mBigInt).toString());
                    setMessageResult("😎")
                    setMessageBoxType("okay")
                }
                else
                {
                    setMessageResult("Error, no se puede dividir entre 0")
                    setMessageBoxType("danger")
                }
                
            }
            else {
                let ans;
                try {
                    ans = binPow(aBigInt, bBigInt)
                    setExpoResult(ans.toString());

                    setMessageResult("😎")
                    setMessageBoxType("okay")
                }
                catch {
                    console.error("El numero es mas grande que las moleculas en el universo")
                    ans = 0n

                    setExpoResult("INF");
                    setMessageResult("El numero es tan grande que supera la contidad de moleculas en el universo :0" + generateAdmiration())
                    setMessageBoxType("error")
                }
            }
        }

    }



    /**
     * Limpiar
     */
    const handleClear = () => {
        setNumbers({ numberA: "", numberB: "" });
        setExpoResult("")
        setMessageResult("")
        setMessageBoxType("none")
        setEnableMod(false);
        setModuloInput("");
    };

    const handleChangeEnable = () => {
        setEnableMod(!enableMod);
    }

    return (
        <section className="gcd-content">
            <Title textTitle="Exponenciacion binaria" textColor="var(--wine)" textSize="30"></Title>
            <Input
                name="numberA"
                placeholderInput="Base"
                textInput="Base"
                value={numbers.numberA}
                onChange={handleInputChange}
                padding="10px"

                style_={{ width: "200px", maxHeight: "300px", maxWidth: "200px" }}
            />
            <Input
                name="numberB"
                placeholderInput="Exponente"
                textInput="Exponente"
                value={numbers.numberB}
                onChange={handleInputChange}
                padding="10px"

                style_={{ width: "200px", maxHeight: "300px", maxWidth: "200px" }}
            />
            <Title textTitle="¿Modulo?"></Title><input type="checkbox" onChange={handleChangeEnable} checked={enableMod} />
            <Input
                name="mod"
                textInput={enableMod ? "Ingrese Modulo" : ""}
                placeholderInput="MOD"
                value={moduloInput}
                onChange={handleInputModChange}
                style_={{ display: enableMod ? "block" : "none" }}
                padding="10px"
            >
            </Input>
            <div>
                <Button textButton="Calcular" type="okay" onClick={handleCalculteExpo}></Button>
                <Button textButton="Limpiar" type="submit" onClick={handleClear} />
            </div>
            <BoxMessage
                type={messageBoxType}
                textMessage={`El resultado es ${expoResult.toString()}\n${messageResult}`}>
            </BoxMessage>
        </section>

    )
}
export default Exponentiation