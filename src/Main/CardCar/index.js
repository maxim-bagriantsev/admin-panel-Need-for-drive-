import React from 'react';
import './cardCar.scss'
import {DescriptionCar} from "./DescriptionCar";
import {SettingsCar} from "./SettingsCar";

export const CardCar = () => {

    return (
        <div className='card-setting'>
            <h2 className='card-setting-title'>Карточка автомобиля</h2>
            <div className='card-setting-background'>
                <DescriptionCar/>
                <SettingsCar/>
            </div>
        </div>
    );
};

