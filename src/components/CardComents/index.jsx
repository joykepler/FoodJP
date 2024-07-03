import './style.css'
import Estrelas from '../../assets/estrelas.svg'

const CardComents = ({imagem, texto, texto2}) => {
    return (
        <div className='card-coments'>
            <img src={imagem} alt="Perfil" className='coments-perfil'/>
            <h1>{texto}</h1>
            <p>{texto2}</p>
            <img src={Estrelas} alt="Estrelas" className='coments-estrelas'/>
        </div>
    )
}

export default CardComents;