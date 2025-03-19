
interface propsSquare {
    key?: React.Key,
    children?: React.ReactNode,
    updateBoard?: (index: number) => void,
    index?: number,
    isSelected?: boolean
}


const Square = (element: propsSquare) => {

    const { children, updateBoard = () => { return 0 }, index = 1, isSelected } = element;
    const className = "square" + (isSelected ? " is-selected" : "");
    const handleClick = () => {
        updateBoard(index);
    }
    return (
        <div onClick={handleClick} className={className}>
            {children}
        </div>
    )
}

export default Square