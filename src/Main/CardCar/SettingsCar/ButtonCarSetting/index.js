import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {Button} from 'antd';
import {useDispatch} from "react-redux";
import './buttonCarSettingn.scss'

export const ButtonCarSetting = ({
                                     modelCar,
                                     setModelCar,
                                     typeCar,
                                     setTypeCar,
                                     minPriceCar,
                                     setMinPriceCar,
                                     maxPriceCar,
                                     setMaxPriceCar,
                                     descriptionCar,
                                     setDescriptionCar,
                                     newColor,
                                     setNameColor,
                                     setImage
                                 }) => {

    const dispatch = useDispatch()

    const handleAddNewCardCar = () => {
        dispatch({
            type: 'ADD_NEW_CARD_CAR', payload: [{
                modelCar: modelCar,
                typeCar: typeCar,
                descriptionCar: descriptionCar,
                newColor: newColor,
                minPriceCar: minPriceCar,
                maxPriceCar: maxPriceCar
            }]
        })
    }


    const handleDeleteCardCar = () => {
        setModelCar('')
        setTypeCar('')
        setMinPriceCar('')
        setMaxPriceCar('')
        setDescriptionCar('')
        setNameColor('')
        setImage('')


        dispatch({
            type: 'DELETE_CARD_CAR', payload: [{addedNewCardCar: ''}]
        })
    }

    return (
        <div className='buttons'>
            <div className='buttons-group'>
                <Button className='button-save'
                        type="primary"
                        onClick={handleAddNewCardCar}
                >Сохранить
                </Button>
                <Button className='button-cancel'
                        type='primary'
                        onClick={handleDeleteCardCar}
                >Отменить
                </Button>
            </div>
            <div className='buttons-one'>
                <Button className='button-delete' type="primary">Удалить</Button>
            </div>
        </div>
    );
};

