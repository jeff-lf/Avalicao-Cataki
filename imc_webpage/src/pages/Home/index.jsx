import { Calculadora } from "../../components/Calculadora";
import { Conhecimentos } from "../../components/Conhecimentos";
import { Classificacao } from "../../components/Classificacao";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export const Home = () => {
    return (
        <div>
            <Header/>
            <Classificacao/>
            <Conhecimentos />
            <Calculadora />
            <Footer/>
        </div>
    )
}