const Button = ({ texto, largura, altura, fontSize }) => {
    const buttonStyle = {
        width: largura,
        height: altura,
        borderRadius: '60px',
        border: 'none',
        backgroundColor: '#FF0000',
        color: '#FFFFFF',
        fontWeight: '500',
        fontSize: fontSize || '20px',
        fontFamily: '"Poppins", sans-serif'
    };

    return (
        <button style={buttonStyle}>{texto}</button>
    );
};

export default Button;