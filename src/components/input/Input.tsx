import { CSSProperties } from "react";
import "./Input.css"


interface inputProps
{
    textInput:string;
    placeholderInput?:string;
                         //un text area no tiene un typeinput
    name:string;
    value:string;
    onChange:(event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    padding?:string
    
    style_?:CSSProperties  ///ojo se debe mandar como objeto

}

function Input(props:inputProps)
{



    const {textInput,placeholderInput="",name,value="",onChange,padding="0px",style_={}}=props



    return (
        <div className="inputRow" style={{padding:padding}}>
            <label>{textInput}</label>
            <textarea  placeholder={placeholderInput} value={value} onChange={onChange} name={name} style={style_}/>
        </div>
    )
}

export default Input