import React from 'react';
import car from "../../../assats/Images/car-mock.png";
import {UploadInput} from "./UploadInput";
import {ProgressCar} from "./ProgressCar";
import {Description} from "./Description";
import './descriptionCar.scss'

export const DescriptionCar = () => {
    return (
            <div className='details-card-car'>
                <img className='details-card-car-image' src={car} alt=""/>
                <h3 className='details-card-title'>Hyndai, i30 N</h3>
                <p className='car-description'>Компакт-кар</p>
                <UploadInput/>
                <ProgressCar/>
                <Description/>
            </div>
    );
};

