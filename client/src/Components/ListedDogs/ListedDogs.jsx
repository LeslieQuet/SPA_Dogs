//Class component renders DogCards at Home view

import React from 'react';
import style from './ListedDogs.module.css'
import DogCard from '../DogCard/DogCard';
import {connect} from 'react-redux'
import { getDogs } from '../../Redux/actions';

class ListedDogs extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getDogs();
    }

    render(){
        return(
            <div className={style.cardsBox}> 
                {this.props.breeds.map((breed) => {
                    return <DogCard 
                    key={breed.id}
                    id={breed.id}
                    name={breed.name}
                    image={breed.image.url}
                    temperments={breed.temperments}
                    />;
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        breeds: state.breeds,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getDogs: () => { 
            dispatch(getDogs());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (ListedDogs);