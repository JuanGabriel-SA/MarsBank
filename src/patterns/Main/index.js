import './Main.css';
const Main = ({children, style,  ...props}) => {
    return (
        <main className='main-component' {...props}>
            {children}
        </main>
    )
}

export default Main;