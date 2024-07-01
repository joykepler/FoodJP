import './style.css'
import Logo from '../../assets/Logo.svg'
import Button from '../Button'

const Header = () => { 
    return (
    <header>
        <img src={Logo} alt="Logo" />
        <nav>
            <a href="#">Início</a>
            <a href="#">Sobre nós</a>
            <a href="#">Populares</a>
        </nav>
        <Button texto="Baixar o App" />
    </header>
    )
}

export default Header;