import { motion } from 'framer-motion';
import { AiFillCheckCircle, AiFillCloseCircle, AiFillInfoCircle, AiOutlineClose } from 'react-icons/ai';
import './Alert.css';
const Alert = ({ children, type, style, visible, trigger, ...props }) => {
    const variants = {
        show: {
            display: 'flex',
            opacity: 1,
            height: 'initial',
            transition: {
                duration: 0.2,
                ease: 'circOut'
            }
        },
        hidden: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.2,
                ease: 'circIn',
            },
            transitionEnd: {
                display: 'none'
            }
        }
    }
    function getType() {
        switch (type) {
            case 'info':
                return 'alert-message-info';
            case 'error':
                return 'alert-message-error';
            case 'sucess':
                return 'alert-message-sucess';
            default:
                return null;
        }
    }

    function getIcon() {
        switch (type) {
            case 'info':
                return <AiFillInfoCircle />;
            case 'error':
                return <AiFillCloseCircle />;
            case 'sucess':
                return <AiFillCheckCircle />;
            default:
                return null;
        }
    }
    return (
        <motion.div
            className="alert-component"
            whileInView={{
                scale: [1, 1.04, 1],
                transition: {
                    duration: 2,
                    ease: 'circOut',
                    repeat: Infinity
                }
            }}
            variants={variants}
            animate={visible ? 'show': 'hidden'}
            layout
            {...props}>
            <span className='close-icon' onClick={() => trigger(false)}>
                <AiOutlineClose />
            </span>
            <div className={getType()}>
                <span className='alert-icon'>
                    {getIcon()}
                </span>
                <label>
                    {children}
                </label>
            </div>
        </motion.div>
    )
}

export default Alert;