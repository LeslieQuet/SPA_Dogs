import style from './Home.module.css'
import SearchBar from '../../Components/SearchBar/SearchBar'
import ListedDogs from '../../Components/ListedDogs/ListedDogs'
import Pagination from '../../Components/Pagination/Pagination';
import Filter from '../../Components/Filter/Filter';
import OrderedBy from '../../Components/OrderedBy/OrderedBy';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDogs } from '../../Redux/actions'

export default function Home(){
    const dispatch = useDispatch();
    
    //Pagination
    const breeds = useSelector((state) => state.breeds);    
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(8);
    
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    
    return(
        <div className={style.HomeContainer}>
            <h2 className={style.text}>Este es el home y está lleno de perritos</h2>
            <SearchBar/>
            <Filter/>
            <button className={style.button} onClick={()=>{dispatch(getDogs())}}>Volver a todas las razas</button>
            <OrderedBy/>
            <Pagination postPerPage={postPerPage} totalPosts={breeds.length} paginate={paginate}/>
            <ListedDogs indexOfFirstPost={indexOfFirstPost} indexOfLastPost={indexOfLastPost}/>
        </div>
    )
}