import style from './Create.module.css'
import React from "react"
import validations from "./Validations.js"
import { getTemperaments } from '../../Redux/actions'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createABreed } from '../../Redux/actions'

export default function CreateBreed(){

    //Estados internos para manejo de datos ingresados y errores

    const [dogData, setDogData] = useState({
        image: "",
        name: "",
        height: "",
        weight: "",
        life_span: "",
        temperaments: [],
    });
    
    let [errors, setErrors] = useState({
        image: "",
        name: "",
        height: "",
        weight: "",
        life_span: "",
        temperaments: [],
    });

    //Suscripción al estado global temperaments 
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTemperaments());
    }, []);
    
    const tempers = useSelector((state) => state.temperaments);

    const handleTemperaments = (e)=>{
        const value = e.target.value;
    
        setDogData((prevState) => ({
            ...prevState,
            temperaments: prevState.temperaments.concat(value),
          }));
        validations((prevState) => ({
            ...prevState,
            temperaments: prevState.temperaments.concat(value),
          }), errors, setErrors);
    }
    
    const handleInputChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
    
        setDogData({ ...dogData, [property]: value });
        validations({ ...dogData, [property]: value }, errors, setErrors);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(createABreed(dogData));
    };

    
   return (
    <form className={style.container} onSubmit={submitHandler}>
        <section className={style.form}>
            <div>
                <label htmlFor="name" className={style.text}>Nombre:</label>
                <input className={style.searchInput} placeholder='Ingresa un nombre' type="text" name="name" value={dogData.name} onChange={handleInputChange}/>
                <p>{errors.name}</p>
            </div>
            <div>
                <label htmlFor="height" className={style.text}>Altura:</label>
                <input className={style.searchInput} placeholder='Ingresa alturas mínimas y máximas' type="text" name="height" value={dogData.height} onChange={handleInputChange}/>
                <p>{errors.height}</p>
            </div>
            <div>
                <label htmlFor="weight" className={style.text}>Peso:</label>
                <input className={style.searchInput} placeholder='Ingresa pesos mínimos y máximos' type="text" name="weight" value={dogData.weight} onChange={handleInputChange}/>
                <p>{errors.weight}</p>
            </div>
            <div>
                <label htmlFor="life_span" className={style.text}>Tiempo de vida:</label>
                <input className={style.searchInput} placeholder='Ingresa estimado de vida en años' type="text" name="life_span" value={dogData.life_span} onChange={handleInputChange}/>
                <p>{errors.life_span}</p>
            </div>
            <div>
                <label htmlFor="image" className={style.text}>Imagen:</label>
                <input className={style.searchInput} placeholder='Ingresa la url de una imagen' type="text" name="image" value={dogData.image} onChange={handleInputChange}/>
                <p>{errors.image}</p>
            </div>
            <p className={style.text}>Selecciona temperamentos:</p>
            <select name="temperaments" onChange={handleTemperaments}>
              <option value="default">Elegir temperamentos</option>
              {tempers?.map((item) => (
                <option value={item.id} key={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <button type="submit" className={style.xButton}>Crear nueva raza</button>
        </section>  
        <section >
            <p className={style.renderData}>{dogData.name}</p>
            <p className={style.renderData}>{dogData.height} Cm.</p>
            <p className={style.renderData}>{dogData.weight} kg.</p>
            <p className={style.renderData}>{dogData.life_span} Años</p>
            <p className={style.renderData}>{dogData.temperaments}</p>
            <p className={style.renderData}>{dogData.image}</p>
        </section>
    </form>
   );
}