import React, {useState} from 'react';
import './cardCar.scss'
import {DescriptionCar} from "./DescriptionCar";
import {SettingsCar} from "./SettingsCar";

export const CardCar = ({newColor}) => {
    const [modelCar, setModelCar] = useState('')
    const [typeCar, setTypeCar] = useState('')
    const [descriptionCar, setDescriptionCar] = useState('')
    const [minPriceCar, setMinPriceCar] = useState('')
    const [maxPriceCar, setMaxPriceCar] = useState('')

    return (
        <div className='card-setting'>
            <h2 className='card-setting-title'>Карточка автомобиля</h2>
            <div className='card-setting-background'>
                <DescriptionCar modelCar={modelCar}
                                typeCar={typeCar}
                                minPriceCar={minPriceCar}
                                maxPriceCar={maxPriceCar}
                                descriptionCar={descriptionCar}
                                newColor={newColor}
                />
                <SettingsCar modelCar={modelCar}
                             setModelCar={setModelCar}
                             typeCar={typeCar}
                             setTypeCar={setTypeCar}
                             descriptionCar={descriptionCar}
                             setDescriptionCar={setDescriptionCar}
                             minPriceCar={minPriceCar}
                             setMinPriceCar={setMinPriceCar}
                             maxPriceCar={maxPriceCar}
                             setMaxPriceCar={setMaxPriceCar}
                />
            </div>
        </div>
    );
};

