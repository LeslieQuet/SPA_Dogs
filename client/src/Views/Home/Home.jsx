import style from './Home.module.css'
import SearchBar from '../../Components/SearchBar/SearchBar'
import ListedDogs from '../../Components/ListedDogs/ListedDogs'
import Pagination from '../../Components/Pagination/Pagination';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDogs } from '../../Redux/actions'

export default function Home(){
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    
    //Pagination
    const breeds = useSelector((state) => state.breeds);    
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(8);
    
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    
    return(
        <div className={style.HomeContainer}>
            <h2 className={style.text}>Este es el home y está lleno de perritos</h2>
            <SearchBar/>
            <Pagination postPerPage={postPerPage} totalPosts={breeds.length} paginate={paginate}/>
            <button>Botón de filtrado</button>
            <button>Botón de ordenar</button>
            <button onClick={()=>{dispatch(getDogs())}}>Volver a todas las razas</button>
            <ListedDogs loading={loading} setLoading={setLoading} indexOfFirstPost={indexOfFirstPost} indexOfLastPost={indexOfLastPost}/>
        </div>
    )
}