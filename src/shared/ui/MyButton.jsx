export const MyButton = ({handleClick, className, text}) => {   

    return (
        <button 
            className={className} 
            onClick={handleClick}
        >
            {text}
        </button>
    )
}