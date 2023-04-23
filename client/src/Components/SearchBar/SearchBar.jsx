import style from './SearchBar.module.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getBreed } from '../../Redux/actions';

export default function SearchBar(){
    const [dog, setDog] = useState("")
    const changeHandler = (event) => {
      //la propiedad value del event.target desestructurada y guardada en una variable//
      const {value} = event.target; 
      setDog(value);
    }

    const dispatch = useDispatch();
    const onSearch = (dog) => {dispatch(getBreed(dog))};

    return(
        <div className={style.searchContainer}>
            <input type='search' className={style.searchInput} onChange={changeHandler} />
            <button className={style.searchButton} onClick={()=>{onSearch(dog)}}>Buscador por nombre de raza</button>
        </div>
    )
}