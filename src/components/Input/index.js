import './Input.css';
const Input = ({ display, icon, iconStyle, ...props }) => {
    const Icon = icon;
    function getType() {
        if (display == 'line')
            return 'line-type-input';
        else
            return null;
    }
    return (
        <div className='input-component'>
            <span className='input-component-icon' style={{...iconStyle}}>
                {Icon !== undefined && <Icon size={15} />}
            </span>
            <input className={`input-content ${getType()}`} {...props} />
            <div className='line-input' />
        </div>
    )
}

export default Input;