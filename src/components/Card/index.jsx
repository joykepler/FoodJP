import './style.css'

const Card = ({imagem, texto}) => {
    return (
        <div className='card'>
            <img src={imagem} alt="" />
            <h1>{texto}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <span>R$ 30</span>
        </div>
    )
}

export default Card;