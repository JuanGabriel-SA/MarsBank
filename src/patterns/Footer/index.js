import { motion } from 'framer-motion';
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';
import './Footer.css';
const Footer = ({ children, style, ...props }) => {
    return (
        <div className="footer-component">
            <div className='footer-top'></div>
            <div className='footer-bottom'>
                {/* Icones */}
                <motion.ul>
                    <motion.li>
                        <span>
                            <BsInstagram />
                        </span>
                    </motion.li>
                    <motion.li>
                        <span>
                            <BsFacebook />
                        </span>
                    </motion.li>
                    <motion.li>
                        <span >
                            <BsLinkedin />
                        </span>
                    </motion.li>
                </motion.ul>
                {/* Texto */}
                <motion.ul>
                    <motion.li>
                        <label className='footer-text'>
                            Home
                        </label>
                    </motion.li>
                    <motion.li>
                        <label className='footer-text'>
                            About
                        </label>
                    </motion.li>
                    <motion.li>
                        <label className='footer-text'>
                            Services
                        </label>
                    </motion.li>
                </motion.ul>

            </div>
        </div>
    )
}

export default Footer;