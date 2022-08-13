import { Route, Routes } from 'react-router-dom';

import { Calculadora } from '../pages/Calculadora';
import { Classificacao } from '../pages/Classificacao'

export const Navigation = () => {
    return (
    <Routes>
        <Route path="/" element={<Calculadora />} />
        <Route path="classificacao" element={<Classificacao />} />
    </Routes>
    )
}