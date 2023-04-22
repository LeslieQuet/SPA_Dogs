import style from './Home.module.css'
import SearchBar from '../../Components/SearchBar/SearchBar'
import ListedDogs from '../../Components/ListedDogs/ListedDogs'

export default function Home(props){
    return(
        <div className={style.HomeContainer}>
            <h2 className={style.text}>Este es el home y está lleno de perritos</h2>
            <SearchBar/>
            <div>
                <button className={style.xButton} onClick={props.getDogs}>Traer perros</button>
            </div>
            <ListedDogs onClose={props.onClose} breeds={props.breeds}/>
            <button>Botón de filtrado</button>
            <button>Botón de ordenar</button>
            {/* Falta paginado */}
        </div>
    )
}