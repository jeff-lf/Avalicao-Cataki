import './styles.css'
import { useDispatch, useSelector } from "react-redux"
import { useState } from 'react'
import { calculateImcThunk } from '../../store/modules/imc/thunks'

export const Calculadora = () => {

    const [peso, setPeso] = useState('')

    const [altura, setAltura] = useState('')


    const dispatch = useDispatch()

    const handleSubmit = (e) => {
            e.preventDefault()
            dispatch(calculateImcThunk(peso, altura))
    }

    const imc = useSelector(({imc}) => imc)
    

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
                        <input type="text" id='peso' placeholder='Digite seu peso (Kg)' onChange={(e) =>  setPeso(e.target.value)}/>
                        <label for='altura'>Qual a sua altura?</label>
                        <input type="text" id='altura' placeholder='Digite sua Altura (cm)' onChange={(event) => setAltura(event.target.value)}/>
                        <button className='formButton' 
                            onClick={(e) => handleSubmit(e)}>Calcular</button>
                    </div>
                    <div className='resultBox'>
                    {!!imc? <p style={{color: imc.color}}><span>{imc.res}</span> <br></br>{imc.message}</p> : <p>Digite o peso em (Kg) e a altura em (cm)</p>}
                    </div>
                </form>
            </div>
        </section>
    )
}