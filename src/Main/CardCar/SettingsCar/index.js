import React, {useState} from 'react';
import {InputSettings} from "./InputSettings";
import {CheckboxColor} from "./CheckboxColor";
import {ButtonCarSetting} from "./ButtonCarSetting";
import {InputTextArea} from "./InputTextArea";
import './settingsCar.scss';

export const SettingsCar = (props) => {
    const [nameColor, setNameColor] = useState('')
    const [newColors, setNewColors] = useState([])
    const [categorySelect, setCategorySelect] = useState('')

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
                           newColors={newColors}
                           setNewColors={setNewColors}
                           categorySelect={categorySelect}
                           setCategorySelect={setCategorySelect}
            />

            <CheckboxColor newColors={newColors}
                           setNewColors={setNewColors}
                           nameColor={nameColor}
            />

            <InputTextArea descriptionCar={props.descriptionCar}
                           setDescriptionCar={props.setDescriptionCar}
            />
            <ButtonCarSetting modelCar={props.modelCar}
                              setModelCar={props.setModelCar}
                              typeCar={props.typeCar}
                              setTypeCar={props.setTypeCar}
                              minPriceCar={props.minPriceCar}
                              setMinPriceCar={props.setMinPriceCar}
                              maxPriceCar={props.maxPriceCar}
                              setMaxPriceCar={props.setMaxPriceCar}
                              descriptionCar={props.descriptionCar}
                              setDescriptionCar={props.setDescriptionCar}
                              newColors={newColors}
                              setNameColor={setNameColor}
                              setImage={props.setImage}
                              setNewColors={setNewColors}
                              image={props.image}
                              categorySelect={categorySelect}
                              setCategorySelect={setCategorySelect}
            />
        </div>
    );
};

