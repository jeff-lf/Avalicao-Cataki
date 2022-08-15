import { calculateImc } from "./actions"

export const calculateImcThunk = (peso, altura) => (dispatch) => {
    
    const res = (peso/((altura*altura)/10000)).toFixed(2)

    let message = ''
    let color = ''

    if(res < 18.5){
        message = 'Voce está abaixo do peso, consulte um médico para maiores informações'
        color = 'red';
    }
    if(res >= 18.5 && res < 25){
        message = 'Parabens voce está com o peso saudável'
        color = 'green'
    }
    if(res >= 25 && res < 30){
        message = 'Voce está na classificação sobrepeso'
        color = 'orange'
    }
    if(res >= 30 && res < 35){
        message = 'Voce está na classificação obesidade leve'
        color = 'red'
    }
    if(res >= 35 && res < 40){
        message = 'Voce está na classificação obesidade moderada'
        color = 'red'
    }
    if(res > 40){
        message = 'Voce está na classificação obesidade morbida'
        color = 'red'
    }


    dispatch(calculateImc(res, message, color))
}