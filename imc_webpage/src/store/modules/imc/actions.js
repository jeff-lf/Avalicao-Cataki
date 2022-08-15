import { CALCULATE_IMC } from "./actionTypes";

export const calculateImc = (res, message, color) => ({type: CALCULATE_IMC, res, message, color})