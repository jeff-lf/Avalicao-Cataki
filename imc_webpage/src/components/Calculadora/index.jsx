import './styles.css'

export const Calculadora = () => {
    return (
        <section className='calculadoraBox' id='calculadora'>
            <div className='calculadoraContainer'>
                <h2>Descubra seu peso ideal!</h2>
                <p>Coloque os seus dados na calculadora a seguir e saiba se seu peso idel ou sua meta estão saúdaveis.</p>
            </div>
            <div className='formBox'>
                <form>
                    <div>
                        <h3>Calculadora</h3>
                    </div>
                    <div className='inputBox'>
                        <label for='peso'>Qual o seu peso?</label>
                        <input type="text" id='peso' placeholder='Digite seu peso (Kg)'/>
                        <label for='altura'>Qual a sua altura?</label>
                        <input type="text" id='altura' placeholder='Digite sua Altura (cm)'/>
                        <button className='formButton'>Calcular</button>
                    </div>
                </form>
            </div>
        </section>
    )
}