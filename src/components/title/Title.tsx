import "./Title.css"

interface titleProps
{
    textTitle:string,
    textColor?:string,
    textSize?:string,
}



function Title(props:titleProps)
{
    const {textTitle,textColor="Black",textSize="10"}=props
    return (
        <h2 className="title" style={{fontSize:`${textSize}px`,color:textColor}}>
            {textTitle}
        </h2>
    )
}
export default Title