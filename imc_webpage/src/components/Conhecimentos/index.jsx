import './styles.css'
import imc1 from '../../assets/images/imc1.jpg'
import imc2 from '../../assets/images/imc2.jpg'
import imc3 from '../../assets/images/imc3.jpg'
import imc4 from '../../assets/images/imc4.jpg'
import imc5 from '../../assets/images/imc5.jpg'

export const Conhecimentos = () => {
    return (
        <section className="conhecimentosBox" id="conhecimentos">
            <div className='conhecimentosContainer'>
                <h2>Conhecimentos</h2>
                <p>Veja a seguir, algumas informações sobre o IMC.</p>
            </div>
            <ul className='conhecimentosList'>
                <li>
                    <div className='textBox'>
                        <h4>Oque é IMC?</h4>
                        <p>IMC é uma sigla utilizada para Índice de Massa Corporal. 
                        Ele é uma medida de padrão internacional adotada pela Organização Mundial de Saúde (OMS), 
                        utilizada para avaliar o grau de obesidade do indivíduo!</p>
                    </div>
                    <img className='listImg' src={imc1}></img>
                </li>
                <li>
                    <img className='listImg Right' src={imc2}></img>
                    <div className='textBox Impar'>
                        <h4>Como é utilizado?</h4>
                        <p>IMC é uma sigla utilizada para Índice de Massa Corporal. 
                        Ele é uma medida de padrão internacional adotada pela Organização Mundial de Saúde (OMS), 
                        utilizada para avaliar o grau de obesidade do indivíduo!</p>
                    </div>
                </li>
                <li>
                    <div className='textBox'>
                        <h4>O cálculo do IMC difere crianças de adultos?</h4>
                        <p>Não, o que difere é a classificação do resultado.</p>
                    </div>
                    <img className='listImg' src={imc3}></img>
                </li><li>
                    <img className='listImg Right' src={imc4}></img>
                    <div className='textBox Impar'>
                        <h4>Curiosidades</h4>
                        <p> 1. Não é possível diferenciar os componentes gordo e magro da massa corporal; <br></br>
                            2. As pessoas brevilíneas e/ou musculosas podem ter um valor de Índice de Massa Corporal inadequado à sua realidade e serem consideradas obesas; <br></br>
                            3. Diferenças étnicas influenciam no IMC, como no caso dos asiáticos que são considerados obesos pelo IMC;</p>
                    </div>
                </li>
                <li>
                    <div className='textBox'>
                        
                    </div>
                    <img className='listImg lastImg' src={imc5}></img>
                </li>
            </ul>
        </section>
    )
}