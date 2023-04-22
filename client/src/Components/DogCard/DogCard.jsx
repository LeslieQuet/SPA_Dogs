import style from './DogCard.module.css'
import { Link } from 'react-router-dom';

export default function DogCard({id, image, name, wheigt, temperments, onClose}){
    // console.log(name);
    return(
        <div className='DogCard'>
            <div>
                <button className={style.xButton} onClick={onClose}>X</button>
            </div>
            <h2 className={style.cardText}>Raza: {name}</h2>
            <img className={style.dogImage} src={image} alt={name}/>
            {/* <h2 className={style.cardText}>Peso: {wheigt}</h2>*/}
            <h2 className={style.cardText}>Temperamento: {temperments}</h2> 
            <Link to={`/detail/${id}`} className={style.cardTitle}>
                <h5>Más detalles de la raza</h5>
            </Link>
        </div>
    )
}