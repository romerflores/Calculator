import { useState } from "react";
import BoxMessage from "../../../components/boxMessage/BoxMessage";
import Button from "../../../components/button";
import Input from "../../../components/input/Input";
import Title from "../../../components/title/Title";


/*TODO

    Se debe realizar las validaciones para el input
*/


class BigIntCalculator {
    private static precedence: Record<string, number> = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
        '%': 2,
    };

    private static isOperator(token: string): boolean {
        return ['+', '-', '*', '/', '%'].includes(token);
    }

    private static toPostfix(expression: string): string[] {
        const output: string[] = [];
        const operators: string[] = [];
        const tokens = expression.match(/\d+|[+\-*/%()]/g) || [];

        for (const token of tokens) {
            if (/\d+/.test(token)) {
                output.push(token);
            } else if (this.isOperator(token)) {
                while (
                    operators.length &&
                    operators[operators.length - 1] !== '(' &&
                    this.precedence[operators[operators.length - 1]] >= this.precedence[token]
                ) {
                    output.push(operators.pop()!);
                }
                operators.push(token);
            } else if (token === '(') {
                operators.push(token);
            } else if (token === ')') {
                while (operators.length && operators[operators.length - 1] !== '(') {
                    output.push(operators.pop()!);
                }
                operators.pop();
            }
        }

        while (operators.length) {
            output.push(operators.pop()!);
        }

        return output;
    }

    private static evaluatePostfix(postfix: string[]): bigint {
        const stack: bigint[] = [];

        for (const token of postfix) {
            if (/\d+/.test(token)) {
                stack.push(BigInt(token));
            } else {
                const b = stack.pop()!;
                const a = stack.pop()!;
                switch (token) {
                case '+': stack.push(a + b); break;
                case '-': stack.push(a - b); break;
                case '*': stack.push(a * b); break;
                case '/': stack.push(a / b); break;
                case '%': stack.push(a % b); break;
                }
            }
        }
        return stack.pop()!;
    }

    static evaluate(expression: string): bigint {
        const postfix = this.toPostfix(expression);
        return this.evaluatePostfix(postfix);
    }
}

// Ejemplo de uso:



function Infix() {
    // let calc=new BigIntCalculator();

    const [infixInput,setInfixInput]=useState("");
    const [messageBoxType,setMessageBoxType]=useState("none");
    const [messageResult,setMessageResult]=useState("");
    // const [finalAnswer,setFinalAnswer]=useState("");
    
    const handleClearInfixInput=()=>{
        setInfixInput("");
        setMessageResult("");
        setMessageBoxType("none")
    }



    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>)  => {
        setInfixInput(event.target.value)

    };
    
    const handleCalculteInfix=()=>
    {
        let currtInfixInput=infixInput
        currtInfixInput=currtInfixInput.trimEnd()
        setInfixInput(currtInfixInput)

        // setFinalAnswer(BigIntCalculator.evaluate(infixInput.toString()).toString());
            


        console.log(infixInput)
        setMessageResult(BigIntCalculator.evaluate(infixInput.toString()).toString());
        setMessageBoxType("okay")
    }



    return <section className="gcd-content">
        <Title textTitle="Calculadora de expresiones (fase beta)" textColor="black" textSize="25"></Title>
        <Input
            name="numberA"
            placeholderInput="(3+3)*2"
            textInput="Ingrese una expresion"
            value={infixInput}
            onChange={handleInputChange}
            padding="10px"
        />
        <div>
            <Button textButton="Calcular" type="okay" onClick={handleCalculteInfix}></Button>
            <Button textButton="Limpiar" type="submit" onClick={handleClearInfixInput} />
        </div>
        {/* <p>Numero ingresado A es: {numbers.numberA}</p>
    <p>Numero ingresado B es: {numbers.numberB}</p> */}
        {/* <p>El resultado es <span>{gcdResult.toString()}</span></p> */}
        <BoxMessage
            type={messageBoxType}
            textMessage={`El resultado es \n${messageResult}`}>

        </BoxMessage>
    </section>
}
export default Infix