import React, {useEffect} from 'react';
import {PlusOutlined} from "@ant-design/icons";
import './inputSettings.scss'

export const InputSettings = ({
                                  modelCar,
                                  setModelCar,
                                  typeCar,
                                  setTypeCar,
                                  minPriceCar,
                                  setMinPriceCar,
                                  maxPriceCar,
                                  setMaxPriceCar,
                                  nameColor,
                                  setNameColor,
                                  newColor,
                                  setNewColor
                              }) => {

    //Ввод модели машины
    const handleChangeModelCar = (event) => {
        setModelCar(event.target.value);
    }

    //Ввод типа машины
    const handleChangeTypeCar = (event) => {
        setTypeCar(event.target.value);
    }

    //Ввод минимальной цены аренды машины
    const handleChangeMinPriceCar = (event) => {
        setMinPriceCar(event.target.value);
    }

    //Ввод максимальной цены аренды машины
    const handleChangeMaxPriceCar = (event) => {
        setMaxPriceCar(event.target.value);
    }

    //Ввод нового цвета для машины
    const handleChangeNewColor = (event) => {
        setNameColor(event.target.value);
    }

    //Добавление нового цвета для машины
    const handleAddNewColor = () => {
        setNewColor([...newColor, nameColor]);
    }

    return (
        <>
            <div className='without-class'>
                <div className='setting-car-model-and-type'>
                    <div className='setting-car-model'>
                        <h5 className='item-title'>Модель автомобиля</h5>
                        <input className='item-input'
                               type="text"
                               value={modelCar}
                               onChange={handleChangeModelCar}
                        />
                    </div>

                    <div className='setting-car-type'>
                        <h5 className='item-title'>Тип автомобиля</h5>
                        <input className='item-input'
                               type="text"
                               value={typeCar}
                               onChange={handleChangeTypeCar}
                        />
                    </div>
                </div>
            </div>

            <div className='without-class'>
                <div className='setting-car-model-and-type'>
                    <div className='setting-car-model'>
                        <h5 className='item-title'>Минимальная цена</h5>
                        <input className='item-input'
                               type="number"
                               value={minPriceCar}
                               onChange={handleChangeMinPriceCar}
                        />
                    </div>

                    <div className='setting-car-type'>
                        <h5 className='item-title'>Максимальная цена</h5>
                        <input className='item-input'
                               type="number"
                               value={maxPriceCar}
                               onChange={handleChangeMaxPriceCar}
                        />
                    </div>
                </div>

                <div className='setting-car-color'>
                    <h5 className='item-title'>Доступные цвета</h5>
                    <div className='item-title-input'>
                        <input className='item-input-color'
                               type="text"
                               value={nameColor}
                               onChange={handleChangeNewColor}
                        />

                        <button className='button-plus'
                                onClick={handleAddNewColor}>
                            <PlusOutlined className='button-plus-icon'/>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

