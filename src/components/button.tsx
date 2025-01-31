import "./button.css"

interface buttonProps
{
    textButton:string,
    type?:string,
    onClick?:()=>void
}

function Button(data:buttonProps)
{   
    const {textButton,type,onClick}=data
    return(
        <>
            <button className={`button ${type}`} onClick={onClick}>  
                {textButton}
            </button>
        </>
    )

}
export default Button