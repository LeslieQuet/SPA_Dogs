import style from './DogDetail.module.css'
import { NavLink } from 'react-router-dom'

export default function DogDetail({id, name, image, height, weight, life_span, temperments}){
    return(
        <div className={style.container}>
            <NavLink to="/home" >
                <button className={style.xButton}>X</button>
            </NavLink>
            <div style={{display: 'inline-block', margin: '2em'}}> 
                <h2 className={style.cardText}>Raza: {name}</h2>
                <h3 className={style.cardText}>ID de Raza: {id}</h3>
                <h3 className={style.cardText}>Temperamento: {temperments}</h3>
                <h3 className={style.cardText}>Altura: {height} Cm.</h3>
                <h3 className={style.cardText}>Peso: {weight} Kg.</h3>
                <h3 className={style.cardText}>Promedio de vida: {life_span}</h3>
            </div>
            <img className={style.dogImage} src={`https://cdn2.thedogapi.com/images/${image}.jpg`} alt={name}/>
        </div>
    )
}