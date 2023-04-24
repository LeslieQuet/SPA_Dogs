import style from './Filter.module.css'
import React from "react";
import Select from "react-select";
import { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { getTemperaments } from '../../Redux/actions';


export default function Filter (){
    const DBTemperaments = useSelector((state) => state.temperaments);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTemperaments());
    }, []);

    //Opciones del desplegable harcodeadas hasta que conecte con el global state y la DB
    const temperaments = [
        {label: 'Joyi', value: '1'}
    ];

    return(
        <div className={style.Filter}>
            <Select
                options={temperaments}
            />
        </div>
    )
}