import "./wineContent.css"

interface wineContentProps{
    children: React.ReactNode,
    color?:string // var(--white) #333 #e43r35
}

function WineContent(props:wineContentProps)
{
    const {children,color}=props
    return <div className="wine-container" style={{backgroundColor:color}}>
        {children}
    </div>
}

export default WineContent