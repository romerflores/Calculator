import "./Title.css"

interface titleProps {
    textTitle: string,
    textColor?: string,
    textSize?: string,
    textAlign_?: "left" | "right" | "center" | "justify" | "start" | "end";
    textBorder?:string ///
}



function Title(props: titleProps) {
    const { textTitle, textColor = "Black", textSize = "10", textAlign_ = "center" ,textBorder="solid 0px white"} = props
    return (
        <h2 className="title" style={{ fontSize: `${textSize}px`, color: textColor, textAlign:textAlign_ as React.CSSProperties["textAlign"],WebkitTextStroke:textBorder}}>
            {textTitle}
        </h2>
    )
}
export default Title