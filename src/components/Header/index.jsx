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
        <div className='menu-hamburguer'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
            </svg>
        </div>
    </header>
    )
}

export default Header;