import Input from "../Input";
import './InputField.css';
const InputField = ({ children, block, status, ...props }) => {
    return (
        <div className="input-field-component" style={{ width: block && '100%' }}>
            <label style={{
                color: status == 'error' && 'red',
                marginLeft: 10,
                fontWeight: 400
            }}>{children}</label>
            <Input status={status}  {...props} />
        </div>
    )
}

export default InputField;