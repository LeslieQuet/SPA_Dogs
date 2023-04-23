//Renders a DogCard, gets props from ListedDogs.jsx

import style from './DogCard.module.css'
import { Link } from 'react-router-dom';

export default function DogCard({id, image, name, weight, temperments}){
      
    return(
        <div className={style.cardContainer}>
            <h2 className={style.cardText}>Raza: {name}</h2>
            <img className={style.dogImage}  src={`https://cdn2.thedogapi.com/images/${image}.jpg`} alt={name}/>
            <h2 className={style.cardText}>Peso: {weight} Kg.</h2>
            <h2 className={style.cardText}>Temperamento: {temperments}</h2> 
            <Link to={`/dogs/${id}`} className={style.cardDitail}>
                <h5>Más detalles de la raza</h5>
            </Link>
        </div>
    )
}