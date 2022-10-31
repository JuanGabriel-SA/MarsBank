import { Grid } from 'antd';
import './Container.css';
const { useBreakpoint } = Grid;
const Container = ({ children, style }) => {
    const screens = useBreakpoint();
    return (
        <section
            className="container-component"
            style={{
                width: !screens.md ? '100vw' : '80vw',
                ...style
            }}>
            {children}
        </section>
    )
}

export default Container;