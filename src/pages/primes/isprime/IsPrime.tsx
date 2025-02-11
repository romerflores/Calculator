import { useState } from "react"
import Input from "../../../components/input/Input"
import Title from "../../../components/title/Title"
import "./isPrime.css"
import Button from "../../../components/button"
import BoxMessage from "../../../components/boxMessage/BoxMessage"


/**
 * Se debe optimizar con consulta a una base de datos,
 * ademas separar la logica, sugerencia usar el Patron de disenio MVC
 */

const st = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]);
let contAdmiration = 0;

function isPrime(x:bigint)
{
    for(let i=2n;i*i<=x;i++)
    {
        if(x%i==0n)return [false,i];
    }
    return [true,0];
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



function IsPrime() {



    const handleClear=()=>{
        setNumberToVerify("")
        setTextBoxMessage("")
        setTypeBoxMessage("none")
    }





    const handleCalculateIsPrime=()=>{
        
        const number=numberToVerify.toString().trim()
        if(validateStringIsBigInteger(number) && number.length>0)
        {
            const ans=isPrime(BigInt(number));
            if(ans[0])
            {
                setTypeBoxMessage("okay")
                setTextBoxMessage("El numero es primo")
            }
            else{
                setTypeBoxMessage("danger")
                setTextBoxMessage("El numero no es primo, al menos divisible por "+ans[1].toString())
            }

        }
        else{

            setTextBoxMessage("Numero Invalido"+generateAdmiration())
            setTypeBoxMessage("warning")
        }
    }

    const [numberToVerify, setNumberToVerify] = useState("")
    const [textBoxMessage,setTextBoxMessage]=useState("")
    const [typeBoxMessage,setTypeBoxMessage]=useState("none")

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNumberToVerify(event.target.value);
    };


    return (<>
        <Title textTitle="¿Es numero Primo?" textColor="black" textSize="20" />
        <Title textTitle="De momento no se adminten numeros de mas de 8 digitos :(" textColor="rgb(56, 55, 55)" textSize="10"></Title>

        <Input
            name="numero"
            textInput="Ingrese Numero"
            padding="10px"
            value={numberToVerify}
            onChange={handleInputChange}
            placeholderInput="Numero">
        </Input>

        <nav className="primes-button-content" style={{ alignItems: "center" }}>
            <Button textButton="Calcular" type="okay" onClick={handleCalculateIsPrime}></Button>
            <Button textButton="Limpiar" type="warning" onClick={handleClear}></Button>
        </nav>

        <BoxMessage textMessage={textBoxMessage} type={typeBoxMessage}>
            
        </BoxMessage>

    </>)
}

export default IsPrime