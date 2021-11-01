import React, {useState} from 'react';
import {InputSettings} from "./InputSettings";
import {CheckboxColor} from "./CheckboxColor";
import {ButtonCarSetting} from "./ButtonCarSetting";
import {InputTextArea} from "./InputTextArea";
import './settingsCar.scss';


export const SettingsCar = (props) => {
    const [nameColor, setNameColor] = useState('')
    const [newColor, setNewColor] = useState([])

    return (
        <div className='details-card-setting'>
            <h3 className='details-card-setting-title'>Настройки автомобиля</h3>
            <InputSettings modelCar={props.modelCar}
                           setModelCar={props.setModelCar}
                           typeCar={props.typeCar}
                           setTypeCar={props.setTypeCar}
                           minPriceCar={props.minPriceCar}
                           setMinPriceCar={props.setMinPriceCar}
                           maxPriceCar={props.maxPriceCar}
                           setMaxPriceCar={props.setMaxPriceCar}
                           nameColor={nameColor}
                           setNameColor={setNameColor}
                           newColor={newColor}
                           setNewColor={setNewColor}
            />
            <CheckboxColor newColor={newColor}
                           setNewColor={setNewColor}
            />
            <InputTextArea descriptionCar={props.descriptionCar}
                           setDescriptionCar={props.setDescriptionCar}
            />
            <ButtonCarSetting/>
        </div>
    );
};

