import style from './Detail.module.css';
import DogDetail from '../../Components/DogDetail/DogDetail';
import { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import {getDetail} from '../../Redux/actions';
import {useParams} from 'react-router-dom';

function Detail(){
    const {ID} = useParams();
    const dogDetail = useSelector((state) => state.detail);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetail(ID));
    }, []);

    console.log(dogDetail)
    return(
        <div className={style.detailBox}> 
            <DogDetail
                key={dogDetail.id}
                id={dogDetail.id}
                name={dogDetail.name}
                image={dogDetail.reference_image_id}
                temperments={dogDetail.temperments}
                life_span={dogDetail.life_span}
                weight={dogDetail.weight.metric}
                height={dogDetail.height.metric}
            />
        </div>
    )
}

export default Detail;