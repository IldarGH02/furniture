export const Modal = ({children, className, handleClick}) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}