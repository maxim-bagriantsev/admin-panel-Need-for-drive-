import React, {useState} from 'react';
import {DescriptionCar} from "./DescriptionCar";
import {SettingsCar} from "./SettingsCar";
import './cardCar.scss'
import {useSelector} from "react-redux";

export const CardCar = ({newColors}) => {
    const [modelCar, setModelCar] = useState('')
    const [typeCar, setTypeCar] = useState('')
    const [descriptionCar, setDescriptionCar] = useState('')
    const [minPriceCar, setMinPriceCar] = useState('')
    const [maxPriceCar, setMaxPriceCar] = useState('')
    const [image, setImage] = useState('')

    const {
        addedCarByCard
    } = useSelector((state) => {
        return state.reducerData
    })

    console.log(addedCarByCard.thumbUrl)

    return (
        <div className='card-setting'>
            <h2 className='card-setting-title'>Карточка автомобиля</h2>
            <div className='card-setting-background'>
                {<DescriptionCar image={image}
                                 setImage={setImage}
                                 modelCar={modelCar}
                                 typeCar={typeCar}
                                 minPriceCar={minPriceCar}
                                 maxPriceCar={maxPriceCar}
                                 descriptionCar={descriptionCar}
                                 newColors={newColors}
                />}
                <SettingsCar modelCar={modelCar}
                             image={image}
                             setImage={setImage}
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

