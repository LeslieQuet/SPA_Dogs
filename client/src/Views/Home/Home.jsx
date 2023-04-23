import style from './Home.module.css'
import SearchBar from '../../Components/SearchBar/SearchBar'
import ListedDogs from '../../Components/ListedDogs/ListedDogs'

export default function Home(props){
    return(
        <div className={style.HomeContainer}>
            <h2 className={style.text}>Este es el home y está lleno de perritos</h2>
            <SearchBar/>
            <button>Botón de filtrado</button>
            <button>Botón de ordenar</button>
            <ListedDogs/>
        </div>
    )
}