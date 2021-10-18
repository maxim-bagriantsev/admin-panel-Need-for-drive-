import React from 'react';
import {PlusOutlined} from "@ant-design/icons";
import './inputSettings.scss'

export const InputSettings = () => {
    return (
        <>
            <div className='setting-car-model-and-type'>
                <div className='setting-car-model'>
                    <h5 className='item-title'>Модель автомобиля</h5>
                    <input className='item-input' type="text"/>
                </div>

                <div className='setting-car-type'>
                    <h5 className='item-title'>Тип автомобиля</h5>
                    <input className='item-input' type="text"/>
                </div>
            </div>

            <div className='setting-car-color'>
                <h5 className='item-title'>Доступные цвета</h5>
                <div className='item-title-input'>
                    <input className='item-input-color' type="text"/>

                    <button className='button-plus'>
                        <PlusOutlined className='button-plus-icon'/>
                    </button>

                </div>
            </div>
        </>
    );
};

