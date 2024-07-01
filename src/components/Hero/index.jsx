import './style.css'
import Button from '../Button'
import InicioSushi from '../../assets/inicio-sushi.png'

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__texto">
                <h1>Comida Oriental</h1>
                <p>A culinária Japonesa é bastante equilibrada, sendo muito rica em peixes (ômega 3),
                    vegetais, massas e ingredientes frescos.</p>
                <Button texto="Ver o cardápio" largura="230px" altura="54px" />
            </div>
            <div className="hero__imagem">
                <img src={InicioSushi} alt="Sushi" />
            </div>
        </div>
    )
}

export default Hero;