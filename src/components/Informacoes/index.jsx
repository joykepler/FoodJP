import './style.css'

const Informacoes = () => {
    return (
        <div className='informacoes'>
            <div className='informacoes__container'>
                <h1>Produtos</h1>
                <h2>Todos</h2>
                <h2>Sushi</h2>
                <h2>Premium</h2>
            </div>
            <div className='informacoes__container'>
                <h1>Informações</h1>
                <h2>FAQ</h2>
                <h2>Blog</h2>
                <h2>Suporte</h2>
            </div>
            <div className='informacoes__container'>
                <h1>Empresa</h1>
                <h2>Sobre nós</h2>
                <h2>Local</h2>
                <h2>Contato</h2>
            </div>
            <div className='informacoes__container'>
                <h1>Social</h1>
                <h2>Facebook</h2>
                <h2>Instagram</h2>
                <h2>Twitter</h2>
            </div>
        </div>
    )
}

export default Informacoes;