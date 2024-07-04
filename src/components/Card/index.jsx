import './style.css'

const Card = ({imagem, texto, texto2}) => {
    return (
        <div className='card'>
            <img src={imagem} alt="Prato" />
            <h1>{texto}</h1>
            <p>{texto2}</p>
            <span>R$ 30</span>
        </div>
    )
}

export default Card;