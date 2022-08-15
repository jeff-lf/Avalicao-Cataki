import { Footer } from "../../components/Footer";
import linkedin from '../../assets/images/linkedin.png'
import github from '../../assets/images/github.png'
import './styles.css'
import { Link } from "react-router-dom";

export const Contato = () => {
    return (
        <section className="sectionContato">
            <div className="contentBoxContato">
                <h2>Contatos</h2>
                <div className="cardContato">
                    <div>
                    <h4>Redes Socias</h4>
                    </div>
                    <div className="cardIcons">
                        <a href="https://www.linkedin.com/in/ferreira-jefferson/"><img src={linkedin}></img></a>
                        <a href="https://github.com/jeff-lf"><img src={github}></img></a>
                    </div>
                </div>
                <div className="cardContato">
                    <div>
                    <h4>Telefone</h4>
                    </div>
                    <div>
                        <p>(11)96430-8748</p>
                    </div>
                </div>
                <div className="cardContato">
                    <div>
                    <h4>Email</h4>
                    </div>
                    <div>
                        <a href="mailto:jefferson_lf@live.com">jefferson_lf@live.com</a>
                    </div>
                </div>
                <Link to='/' className="buttonVoltar">Voltar</Link>
                <div >

                </div>
                <div className="bolinhas um"></div>
                <div className="bolinhas dois"></div>
                <div className="bolinhas tres"></div>
            </div>
            <Footer />
        </section>
    )
}