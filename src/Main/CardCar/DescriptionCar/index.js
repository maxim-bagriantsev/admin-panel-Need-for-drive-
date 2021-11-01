import React, {useState} from 'react';
import car from "../../../assets/Images/car-mock.png";
import {UploadInput} from "./UploadInput";
import {ProgressCar} from "./ProgressCar";
import {Description} from "./Description";
import './descriptionCar.scss'
import {Skeleton} from "antd";

export const DescriptionCar = ({modelCar, typeCar, descriptionCar, fileList, newColor, minPriceCar, maxPriceCar}) => {


    return (
        <div className='details-card-car'>
            <div className='details-card-car-image'>
                {fileList
                    ? <img src={(fileList)} alt="image"/>
                    : <Skeleton.Image/>
                }
            </div>
            <h3 className='details-card-title'>{modelCar ? modelCar : 'Модель'}</h3>
            <p className='car-description'>{typeCar ? typeCar : 'Тип'}</p>
            <UploadInput/>
            <ProgressCar modelCar={modelCar}
                         typeCar={typeCar}
                         descriptionCar={descriptionCar}
                         fileList={fileList}
                         minPriceCar={minPriceCar}
                         maxPriceCar={maxPriceCar}
                         newColor={newColor} />
            <Description descriptionCar={descriptionCar}/>
        </div>
    );
};

