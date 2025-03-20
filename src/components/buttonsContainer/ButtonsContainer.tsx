


interface buttonContainerProps
{
    children:React.ReactNode,
    padding:string
}


function ButtonsContainer(props: buttonContainerProps)
{
    return <div style={{padding:props.padding}}>
        {
            props.children
        }
    </div>
}

export default ButtonsContainer