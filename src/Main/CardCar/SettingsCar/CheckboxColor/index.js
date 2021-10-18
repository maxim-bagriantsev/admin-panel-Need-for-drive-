import React from 'react';
import {Checkbox} from "antd";
import './checkboxColor.scss'

export const CheckboxColor = () => {
    return (
        <div className='setting-car-color-checkbox'>
            <label className='checkbox-color'>
                <Checkbox onChange={'#'}>Красный</Checkbox>
            </label>
            <label className='checkbox-color'>
                <Checkbox onChange={'#'}>Белый</Checkbox>
            </label>
            <label className='checkbox-color'>
                <Checkbox onChange={'#'}>Чёрный</Checkbox>
            </label>
        </div>
    );
};

