import './styles.css'
import foto from '../../assets/images/foto.jpg'
export const Card = ({data}) => {

    const {name, classification, img} = data

    return (
        <li className='liCard'>
            <img src={img} alt=""  className='cardImg'/>
            <h3 className='tituloCard'>{name}</h3>
            <p className='textoCard'>{classification}</p>
        </li>
    )
}