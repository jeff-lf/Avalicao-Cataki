import './styles.css'
import {classificacaoData} from '../../assets/classificacaoData/classificacaoData'
import {Card} from '../Card'

export const Classificacao = () => {
    return (
        <section className="classificacaoBox" id='classificacao'>
            <div className='classificacaoDiv'>
                <h2 >Classificação</h2>
                <p>A classificação do índice de massa corporal (IMC), 
                    pode ajudar a identificar obesidade ou desnutrição em crianças, adolescentes, adultos e idosos.</p>

                <ul className='listBox'>
                    {classificacaoData.map((data) => <Card data={data}/>)}
                </ul>
            </div>
        </section>
    )
}