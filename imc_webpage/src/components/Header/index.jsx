import "./styles.css"


export const Header = () => {
    return (
        <header className="navBox">
            <nav className="navBar">
                <a className="title" href="#top">
                 <h2>Health</h2>
                </a>
                <div id="navButtons">
                    <button>Classificação</button>
                    <button>Conhecimentos</button>
                    <button>Calculadora</button>
                    <button>Contato</button>
                </div>
            </nav>
            <div className="contentBox">
                <div className="contentLeft">
                    <h1>Indicador que pode previnir doenças</h1>
                    <p>     A obesidade pode aumentar o risco de diversos problemas de saúde, 
                        como hipertensão arterial sistêmica, diabetes e questões cardíacas. Além disso, 
                        estar abaixo do peso também pode indicar diversos problemas na saúde.
                        Para conferir se o seu peso está adequado, existe um método de cálculo. Você sabe o que é IMC? 
                    </p>
                    <button>Veja mais</button>
                </div>
                <div className="contentRight">
                    <div className="decoration"></div>
                    <img src="https://i.pinimg.com/564x/73/37/06/733706aea11fb0e94bfe87ff45b46e99.jpg"></img>
                </div>
            </div>
        </header>
    )
}