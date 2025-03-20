import { CSSProperties } from "react";
import "./Input.css"


interface inputProps
{
    textInput:string;
    placeholderInput?:string;
    name:string;
    value:string;
    onChange:(event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    padding?:string
    
    style_?:CSSProperties  ///ojo se debe mandar como objeto
    isActive?:boolean ///Para descaticar el tex area

}

function Input(props:inputProps)
{



    const {textInput,placeholderInput="",name,value="",onChange,padding="0px",style_={},isActive=true}=props


    return (
        <div className="inputRow" style={{padding:padding,display:(isActive)?"flex":"none"}}>
            <label>{textInput}</label>
            <textarea 
                placeholder={placeholderInput}
                value={value}
                onChange={onChange}
                name={name}
                style={style_}
            />
        </div>
    )
}

export default Input