import { Grid } from 'antd';
import { motion } from 'framer-motion';
import './Title.css';
const { useBreakpoint } = Grid;

const Title = ({ children, size, style, thickness, color, responsive, animated, ...props }) => {
  const screens = useBreakpoint();

  function responsiveFont() {
    if (screens.xxl || screens.xl || screens.lg)
      return 80;
    if (screens.md)
      return 80;
    else
      return 60;
  }

  return (
    <motion.h1
      animate={animated && { 
        scale: [1.4, 1],
        opacity: [0, 1],
        transition: {
          delay: 0.2,
          ease: 'circOut',
          duration: 1
        }
      }}
      className='title-component'
      style={{
        fontSize: responsive ? responsiveFont() : size,
        fontWeight: thickness !== undefined && thickness,
        color: color !== undefined && color,
        ...style
      }}>{children}</motion.h1>
  );
};

export default Title;
