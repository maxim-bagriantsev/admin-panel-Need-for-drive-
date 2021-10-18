import React from 'react';
import {InputSettings} from "./InputSettings";
import {CheckboxColor} from "./CheckboxColor";
import {ButtonCarSetting} from "./ButtonCarSetting";
import './settingsCar.scss';

export const SettingsCar = () => {
    return (
        <div className='details-card-setting'>
            <h3 className='details-card-setting-title'>Настройки автомобиля</h3>
            <InputSettings/>
            <CheckboxColor/>
            <ButtonCarSetting/>
        </div>
    );
};

