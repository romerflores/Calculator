import "./wineContent.css"

interface wineContentProps{
    children: React.ReactNode,
    color?:string
}

function WineContent(props:wineContentProps)
{
    const {children,color}=props
    return <div className="wine-container" style={{backgroundColor:color}}>
        {children}
    </div>
}

export default WineContent