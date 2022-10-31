import Input from "../Input";
import './InputField.css';
const InputField = ({ children, block, ...props }) => {
    return (
        <div className="input-field-component" style={{width: block && '100%'}}>
            <label style={{marginLeft: 10, fontWeight: 400}}>{children}</label>
            <Input {...props} />
        </div>
    )
}

export default InputField;