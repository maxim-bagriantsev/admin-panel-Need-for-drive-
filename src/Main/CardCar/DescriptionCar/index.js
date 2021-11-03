import React, {useState} from 'react';
import {UploadInput} from "./UploadInput";
import {ProgressCar} from "./ProgressCar";
import {Description} from "./Description";
import {Skeleton} from "antd";
import './descriptionCar.scss';

export const DescriptionCar = ({
                                   modelCar,
                                   typeCar,
                                   descriptionCar,
                                   newColor,
                                   minPriceCar,
                                   maxPriceCar,
                                   image,
                                   setImage
                               }) => {

    return (
        <div className='details-card-car'>
            <div className='details-card-car-image'>
                {image
                    ? <img src={(image.thumbUrl)} alt="image"/>
                    : <Skeleton.Image/>
                }
            </div>
            <h3 className='details-card-title'>{modelCar ? modelCar : 'Модель'}</h3>
            <p className='car-description'>{typeCar ? typeCar : 'Тип'}</p>
            <UploadInput addedImageCar={image}
                         image={image}
                         setImage={setImage}
            />
            <ProgressCar modelCar={modelCar}
                         typeCar={typeCar}
                         descriptionCar={descriptionCar}
                         addedImageCar={image}
                         minPriceCar={minPriceCar}
                         maxPriceCar={maxPriceCar}
                         newColor={newColor}/>
            <Description descriptionCar={descriptionCar}/>
        </div>
    );
};

