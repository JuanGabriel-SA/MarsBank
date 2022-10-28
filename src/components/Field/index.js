import { motion } from 'framer-motion';

const Field = ({ children, style, right, top, left, bottom, ...props }) => {
  return (
    <motion.div
      className="field-component"
      style={{
        padding: 5,
        marginLeft: left !== undefined ? left : 20,
        marginRight: right !== undefined ? right : 20,
        marginTop: top !== undefined ? top : 20,
        marginBottom: bottom !== undefined ? bottom : 20,
        ...style
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
export default Field;
