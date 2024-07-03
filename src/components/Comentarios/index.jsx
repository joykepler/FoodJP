import './style.css'
import CardComents from '../CardComents'
import Perfil1 from '../../assets/perfil1.svg'
import Perfil2 from '../../assets/perfil2.svg'

const Comentarios = () => {
    return (
        <div className="comentarios">
            <h1>Comentários</h1>
            <div className="comentarios__cards">
                <CardComents imagem={Perfil1} texto="Daniele Almeida" texto2="Ótimo serviço! Encantada com a qualidade dos pratos."/>
                <CardComents imagem={Perfil2} texto="Ricardo França" texto2="Não é apenas a comida excelente, o serviço torna a experiência especial."/>
            </div>
        </div>
    )
}

export default Comentarios;