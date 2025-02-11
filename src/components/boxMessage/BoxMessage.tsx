
import "./BoxMessage.css"



interface boxMessageProps
{
    textMessage:string;
    type:string //warning, error, okay
}




function BoxMessage(props:boxMessageProps)
{
    const {textMessage,type}=props //type :


    return <div className={`boxMessage ${type}`}>
        <p>{textMessage}</p>
    </div>
}
export default BoxMessage