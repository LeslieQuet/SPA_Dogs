//Renders a DogCard, gets props from ListedDogs.jsx

import style from './DogCard.module.css'
import { Link } from 'react-router-dom';

export default function DogCard({id, image, name, weight, temperament}){
    return(
        <div className={style.cardContainer}>
            <h2 className={style.dogName}>Raza: {name}</h2>
            <img className={style.dogImage} src={image} alt={name}/>
            <h3 className={style.cardText}>Peso: {weight} Kg.</h3>
            <h3 className={style.cardText}>Temperamento: {temperament}</h3> 
            <Link to={`/dogs/${id}`} className={style.cardDitail}>
                <h5>Más detalles de la raza</h5>
            </Link>
        </div>
    )
}