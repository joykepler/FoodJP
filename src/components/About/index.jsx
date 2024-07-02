import './style.css'
import AboutImagem from '../../assets/about-prato.png'

const About = () => {
    return (
        <div className='about'>
            <div className='about__imagem'>
                <img src={AboutImagem} alt="Prato" />
            </div>
            <div className='about__texto'>
                <span>Sobre nós</span>
                <h1>Feita de forma tradicional</h1>
                <p>Cada prato "feita de forma tradicional" é uma ode à excelência. Desde o meticuloso corte do sashimi até a preparação delicada do sushi, cada etapa é uma reverência à herança culinária do Japão.</p>
            </div>
        </div>
    )
}

export default About;