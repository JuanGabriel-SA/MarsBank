import './Button.css';
const Button = ({ children, style, ...props }) => {
    return (
        <button className="button-component" style={{...style}} {...props}>{children}</button>
    )
}

export default Button;