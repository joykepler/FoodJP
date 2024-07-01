const Button = ({texto, largura, altura}) => { 
    const buttonStyle = {
        width: largura,
        height: altura,
        padding: '12px 40px',
        borderRadius: '60px',
        border: 'none',
        backgroundColor: '#FF0000',
        color: '#FFFFFF',
        fontWeight: '500',
        fontSize: '20px',
        fontFamily: '"Poppins", sans-serif'
    }
    return (
        <button style={buttonStyle}>{texto}</button>
    )
}

export default Button;