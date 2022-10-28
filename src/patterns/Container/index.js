import { Grid } from 'antd';
import { useEffect } from 'react';
import './Container.css';
const { useBreakpoint } = Grid;
const Container = ({ children, style }) => {
    const screens = useBreakpoint();
    useEffect(() => {
        console.log(screens)
    }, [screens])
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