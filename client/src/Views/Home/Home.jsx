import style from './Home.module.css'
import SearchBar from '../../Components/SearchBar/SearchBar'
import ListedDogs from '../../Components/ListedDogs/ListedDogs'
import { useDispatch } from 'react-redux';
import { getDogs } from '../../Redux/actions'

export default function Home(){
    const dispatch = useDispatch();
    return(
        <div className={style.HomeContainer}>
            <h2 className={style.text}>Este es el home y está lleno de perritos</h2>
            <SearchBar/>
            <button>Botón de filtrado</button>
            <button>Botón de ordenar</button>
            <button onClick={()=>{dispatch(getDogs())}}>Volver a todas las razas</button>
            <ListedDogs/>
        </div>
    )
}