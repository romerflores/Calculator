import "./Input.css"


interface inputProps
{
    textInput:string;
    placeholderInput?:string;
    typeInput:string;
    name:string;
    value:string;
    onChange:(event: React.ChangeEvent<HTMLInputElement>) => void;

}

function Input(props:inputProps)
{



    const {textInput,placeholderInput="",typeInput="number",name,value="",onChange}=props



    return (
        <div className="inputRow">
            <label>{textInput}</label>
            <input type={typeInput} placeholder={placeholderInput} value={value} onChange={onChange} name={name}/>
        </div>


    )
}

export default Input