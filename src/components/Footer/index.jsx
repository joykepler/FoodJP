import './style.css'
import Logo2 from '../../assets/Logo.svg'
import Facebook from '../../assets/facebook.svg'
import Instagram from '../../assets/instagram.svg'
import Twitter from '../../assets/twitter.svg'

const Footer = () => {
    return (
        <div className='rodape'>
            <img src={Logo2} alt='Logo' className='rodape__logo'></img>
            <div className='rodape__redes'>
                <img src={Facebook} alt="Facebook" className='redes__item'/>
                <img src={Instagram} alt="Instagram" className='redes__item'/>
                <img src={Twitter} alt="Twitter" className='redes__item'/>
            </div>
        </div>
    )
}

export default Footer;