import React from 'react';
import {UploadInput} from "./UploadInput";
import {ProgressCar} from "./ProgressCar";
import {Description} from "./Description";
import {useSelector} from "react-redux";
import {Skeleton} from "antd";
import './descriptionCar.scss';

export const DescriptionCar = ({
                                   modelCar,
                                   typeCar,
                                   descriptionCar,
                                   newColor,
                                   minPriceCar,
                                   maxPriceCar
                               }) => {

    const {
        addedImageCar,
    } = useSelector((state) => {
        return state.reducerData
    })

    return (
        <div className='details-card-car'>
            <div className='details-card-car-image'>
                {addedImageCar
                    ? <img src={(addedImageCar.thumbUrl)} alt="image"/>
                    : <Skeleton.Image/>
                }
            </div>
            <h3 className='details-card-title'>{modelCar ? modelCar : 'Модель'}</h3>
            <p className='car-description'>{typeCar ? typeCar : 'Тип'}</p>
            <UploadInput addedImageCar={addedImageCar}/>
            <ProgressCar modelCar={modelCar}
                         typeCar={typeCar}
                         descriptionCar={descriptionCar}
                         addedImageCar={addedImageCar}
                         minPriceCar={minPriceCar}
                         maxPriceCar={maxPriceCar}
                         newColor={newColor}/>
            <Description descriptionCar={descriptionCar}/>
        </div>
    );
};

