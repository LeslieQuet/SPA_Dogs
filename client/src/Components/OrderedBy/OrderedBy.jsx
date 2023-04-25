import style from './OrderedBy.module.css'
import React from "react"
import Select from "react-select"
import { useDispatch } from 'react-redux'
import { orderedByName, orderedByWeight } from '../../Redux/actions'

export default function Filter (){
    
    const orders = [
        {label: 'Alfabéticamente (A-Z)', value: 1}, 
        {label: 'Alfabéticamente (Z-A)', value: 2}, 
        {label: 'Por peso (min a max)', value: 3}, 
        {label: 'Por peso (max a min)', value: 4}, 
    ]

    const dispatch = useDispatch();
    const handleSelectChange = (event) => {
        if (event.value < 3) dispatch(orderedByName(event.value))
        else dispatch(orderedByWeight(event.value))
    }

    return(
    <div className={style.selector} >
        <Select
            defaultValue={{label: "Ordena razas alfabéticamente o por su peso", value: 'empty'}}
            options={orders}
            onChange={handleSelectChange}
        />
    </div>
    )
}