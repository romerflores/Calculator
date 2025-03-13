import Button from "../../../components/button"
import BoxMessage from "../../../components/boxMessage/BoxMessage"

import Input from "../../../components/input/Input"

import { useState } from "react"

import "../gcd/GCD.css"
import Title from "../../../components/title/Title"


const st = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]);
let contAdmiration = 0;


function binpow(b: bigint, e: bigint): bigint {
    if (e <= 0n) return 1n;

    let pot = binpow(b, e / 2n);
    pot *= pot;

    if (e & 1n) pot *= b;

    return pot;
}

function binpowMod(b: bigint, e: bigint,m:bigint): bigint {
    if (e <= 0n) return 1n;

    let pot = binpow(b, e / 2n)%m;
    pot *= pot;
    pot%=m;
    if (e & 1n) pot *= b;
    pot%=m;
    return pot;
}


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
    for (let i = 0; i < cad.length; i++) {
        if (!st.has(cad[i])) {
            return false;
        }
    }
    return true;
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
                setExpoResult(binpowMod(aBigInt,bBigInt,mBigInt).toString());
                setMessageResult("😎")
                setMessageBoxType("okay")
            }
            else {
                let ans;
                try {
                    ans = binpow(aBigInt, bBigInt)
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
            <Title textTitle="Exponenciacion binaria" textColor="black" textSize="25"></Title>
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