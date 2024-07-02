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
                <Card imagem={Img1Card} texto="Ramen de frango"/>
                <Card imagem={Img2Card} texto="Ramen apimentado"/>
                <Card imagem={Img3Card} texto="Ramen tradicional"/>
            </div>
        </div>
    )
}

export default Populares;