import { motion } from 'framer-motion';
import './Field.css';
const Field = ({ children, style, right, top, left, bottom, block, justify, ...props }) => {
  return (
    <motion.div
      className="field-component"
      style={{
        marginLeft: left !== undefined ? left : 20,
        marginRight: right !== undefined ? right : 20,
        marginTop: top !== undefined ? top : 20,
        marginBottom: bottom !== undefined ? bottom : 20,
        width: block && '100%',
        justifyContent: justify !== undefined && justify,
        ...style
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
export default Field;
