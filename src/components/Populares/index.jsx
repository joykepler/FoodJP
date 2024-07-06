import './style.css'
import Card from '../Card'
import Img1Card from '../../assets/img-1.png' 
import Img2Card from '../../assets/img-2.png' 
import Img3Card from '../../assets/img-3.png' 

const Populares = () => {
    return (
        <div className="populares">
            <h1>Populares</h1>
            <div className="populares__cards">
                <Card imagem={Img1Card} texto="Ramen de frango" texto2="Um prato reconfortante com caldo saboroso e pedaços tenros de frango"/>
                <Card imagem={Img2Card} texto="Ramen apimentado" texto2="Ramen apimentado é ideal para quem gosta de uma explosão de sabor picante em cada garfada."/>
                <Card imagem={Img3Card} texto="Ramen tradicional"texto2="Traz a autenticidade da culinária japonesa com seu caldo rico e ingredientes clássicos."/>
            </div>
        </div>
    )
}

export default Populares;