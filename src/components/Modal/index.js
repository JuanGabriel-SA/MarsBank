import { motion } from 'framer-motion';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Field from '../Field';
import Title from '../Title';
import './Modal.css';
import { contentVariants, modalVariants } from './variants';
const Modal = ({ children, style, toggle, setToggle, onClose, mask, maskColor, title, ...props }) => {

    return (
        <motion.div
            className="modal-component"
            style={{
                backgroundColor: mask && (maskColor !== undefined ? maskColor : 'var(--primary-color1)')
            }}
            initial='hidden'
            variants={modalVariants}
            animate={toggle ? 'show' : 'hidden'}>
            <motion.div className="modal-content" style={{ boxShadow: mask && '10px 10px 5px 0px rgba(0,0,0,0.2)' }} variants={contentVariants}>
                <div className='modal-header'>
                    <span onClick={() => setToggle(false)}>
                        <AiOutlineCloseCircle className='close-modal-icon' size={20} />
                    </span>
                    {title !== undefined &&
                        <Field className='modal-title' bottom={0}>
                            <Title thickness={600} size={30}>Cadastrar-se</Title>
                        </Field>
                    }
                </div>
                {children}
            </motion.div>
        </motion.div>
    )
}

export default Modal;