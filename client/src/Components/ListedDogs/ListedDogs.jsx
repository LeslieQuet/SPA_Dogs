import React from 'react';
import style from './ListedDogs.module.css'
import DogCard from '../DogCard/DogCard';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDogs } from '../../Redux/actions';

export default function ListedDogs({indexOfFirstPost, indexOfLastPost}){
    const breeds = useSelector((state) => state.breeds);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDogs());
    }, []);

    const currentPosts = breeds.slice(indexOfFirstPost, indexOfLastPost);

    return(
        <div className={style.cardsBox}> 
            {currentPosts.map((breed) => {
                return <DogCard 
                key={breed.id}
                id={breed.id}
                name={breed.name}
                image={breed.image}
                weight={breed.weight}
                temperament={breed.temperament}
                />;
            })}
        </div>
    )
}


//Class component renders DogCards at Home view, suscribes to Global State
//import {connect} from 'react-redux'
// class ListedDogs extends React.Component {
//     constructor(props){
//         super(props);
//     }

//     componentDidMount(){
//         this.props.getDogs();
//     }

//     render(){
//         return(
//             <div className={style.cardsBox}> 
//                 {this.props.breeds.map((breed) => {
//                     return <DogCard 
//                     key={breed.id}
//                     id={breed.id}
//                     name={breed.name}
//                     image={breed.reference_image_id}
//                     weight={breed.weight.metric}
//                     temperments={breed.temperments}
//                     />;
//                 })}
//             </div>
//         );
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         breeds: state.breeds,
//     }
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getDogs: () => { 
//             dispatch(getDogs());
//         }
//     }
// };

// export default connect(mapStateToProps, mapDispatchToProps) (ListedDogs);