import { Route, Routes } from 'react-router-dom';
import { Contato } from '../pages/Contato';
import { Home } from '../pages/Home';



export const Navigation = () => {
    return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contato" element={<Contato/>} />
    </Routes>
    )
}