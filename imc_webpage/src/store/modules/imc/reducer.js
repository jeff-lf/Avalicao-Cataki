import { CALCULATE_IMC } from "./actionTypes"

export const imcReducer = (state = '', action) =>{
    
    
    switch (action.type){
        case CALCULATE_IMC:
            const { res, message, color } = action
    
            return {res, message, color}

        default:
            return state
    }
    
}