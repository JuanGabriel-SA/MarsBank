import { Grid } from 'antd';
import './Title.css';
const { useBreakpoint } = Grid;

const Title = ({ children, size, style, thickness, color, responsive, ...props }) => {
  const screens = useBreakpoint();

  function responsiveFont() {
    if (screens.xxl || screens.xl || screens.lg)
      return 80;
    if (screens.md)
      return 80;
    else
      return 60;
  }

  return <h1
    className='title-component'
    style={{
      fontSize: responsive ? responsiveFont() : size,
      fontWeight: thickness !== undefined && thickness,
      color: color !== undefined && color,
      ...style
    }}>{children}</h1>;
};

export default Title;
