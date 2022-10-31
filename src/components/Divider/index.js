const Divider = ({ color, style, space }) => {
    return (
        <hr style={{
            margin: 0,
            marginLeft: space !== undefined ? space : 0,
            marginRight: space !== undefined ? space : 0,
            color: color,
            opacity: 0.1,
            ...style
        }} />
    )
}

export default Divider;