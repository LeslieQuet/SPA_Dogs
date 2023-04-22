import style from './ListedDogs.module.css'
import DogCard from '../DogCard/DogCard';

export default function ListedDogs(props){
    return(
        <div className={style.cardsBox}> 
            {props.breeds.map(breed => (
                // console.log(breed.name),
               <DogCard 
                  key={breed.id}
                  id={breed.id}
                  name={breed.name}
                  image={breed.image.url}
                  temperments={breed.temperments}
                  onClose={()=>props.onClose(breed.id)}
               />
            ))}
        </div>
    )
}