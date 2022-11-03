import './Input.css';
const Input = ({ display, icon, iconStyle, status, ...props }) => {
    const Icon = icon;
    function getType() {
        if (display == 'line')
            return 'line-type-input';
        else
            return null;
    }
    function getStatusStyle() {
        if(status == 'error') {
            return {
                color: 'red',
                fontWeight: 600
            }
        }
    }
    return (
        <div className='input-component' style={{...getStatusStyle()}}>
            <span
             className='input-component-icon'
             style={{
                color: status == 'error' ? 'red': 'rgba(0, 0, 0, 0.4)',
                ...iconStyle
                }}>
                {Icon !== undefined && <Icon size={15} />}
            </span>
            <input className={`input-content ${getType()}`} style={{...getStatusStyle()}} {...props} />
            <div className='line-input' />
        </div>
    )
}

export default Input;