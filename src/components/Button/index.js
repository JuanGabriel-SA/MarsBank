import './Button.css';
const Button = ({ children, style, block, type, icon, ...props }) => {
    const Icon = icon;
    return (
        <button
            className={`button-component ${type == undefined ? 'light-primary': type}`}
            style={{
                width: block && '100%',
                ...style
            }}
            {...props}>
                <span>
                    {Icon !== undefined && <Icon className='button-component-icon' size={15} />}
                </span>
                {children}
                </button>
    )
}

export default Button;