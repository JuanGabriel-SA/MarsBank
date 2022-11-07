import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import Field from '../Field';
import Title from '../Title';
import './Modal.css';
import { contentVariants, modalVariants } from './variants';
const Modal = ({ children, style, toggle, setToggle, onClose, mask, maskColor, title, transparent, z, ...props }) => {
    useEffect(() => {
        //Fecha o modal ao apertar esc...
        const close = (e) => {
            if (e.keyCode === 27) {
                setToggle(false)
            }
        }
        window.addEventListener('keydown', close);
        return () => window.removeEventListener('keydown', close);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <motion.div
            className="modal-component"
            style={{
                backgroundColor: mask && (maskColor !== undefined ? maskColor : 'var(--primary-color1)'),
                zIndex: z !== undefined && z
            }}
            onClick={() => setToggle(false)}
            initial='hidden'
            variants={modalVariants}
            animate={toggle ? 'show' : 'hidden'}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className="modal-content"
                style={{
                    boxShadow: mask && '10px 10px 5px 0px rgba(0,0,0,0.2)',
                    backgroundColor: transparent && 'transparent',
                    ...style
                }}
                variants={transparent === undefined && contentVariants}>
                <div
                    className='modal-header'
                    style={{
                        backgroundColor: title === undefined && 'transparent'
                    }}>
                    {transparent === undefined &&
                        <span onClick={() => setToggle(false)}>
                            <AiFillCloseCircle
                                className='close-modal-icon'
                                size={20}
                                color='var(--primary-color3)' />
                        </span>
                    }
                    {title !== undefined &&
                        <Field className='modal-title' bottom={0}>
                            <Title thickness={600} size={30}>{title}</Title>
                        </Field>
                    }
                </div>
                {children}
            </motion.div>
        </motion.div>
    )
}

export default Modal;