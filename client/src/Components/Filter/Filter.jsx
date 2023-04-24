import style from './Filter.module.css'
import React from "react";
import Select from "react-select";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { getTemperaments, getBreedsByTemperaments } from '../../Redux/actions';


export default function Filter (){
    //Trae los temperamentos de la BD y se los pasa al filtro
    const DBTemperaments = useSelector((state) => state.temperaments);

    const temperaments = DBTemperaments.map(temp => {
        return { label: temp.name, value: temp.id}
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTemperaments());
    }, []);

    //hace el dispatch con el temperamento seleccionado
    
    const handleSelectChange = (event) => {dispatch(getBreedsByTemperaments(event.label))}
    
    return(
        <div className={style.Filter}>
            <Select
                defaultValue={{label: "Selecciona razas por su temperamento", value: 'empty'}}
                options={temperaments}
                onChange={handleSelectChange}
            />
        </div>
    )
}