import './Home.module.css'
import SearchBar from '../../Components/SearchBar/SearchBar'
import ListedDogs from '../../Components/ListedDogs/ListedDogs'

export default function Home(){
    return(
        <div className="HomeContainer">
            <h2>Acá va el home</h2>
            <SearchBar/>
            <ListedDogs/>
            <botton>Botón de filtrado</botton>
            <botton>Botón de ordenar</botton>
            {/* Falta paginado */}
        </div>
    )
}