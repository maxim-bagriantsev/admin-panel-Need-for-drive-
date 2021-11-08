import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {Button, message} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import './buttonCarSettingn.scss'
import {deleteCardCar, postCardCar} from "../../../../api/api";

//свойства всплывающего сообщения при успешном,неуспешном  добавлении машины на сервер.
message.config({
    top: 0,
    duration: 3,
    maxCount: 1,
});

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
                                     newColors,
                                     setNameColor,
                                     setImage,
                                     setNewColors,
                                     categorySelect,
                                     image
                                 }) => {

        const dispatch = useDispatch()

        const {
            isPublishedCardCar,
            addedCardCar
        } = useSelector((state) => {
            return state.reducerData
        })

        const access_token = JSON.parse(localStorage.getItem('access_token'))

        const handleAddNewCardCar = () => {

            const info = () => {
                if (isPublishedCardCar) {
                    message.info('Успешно! Машина добавлена');
                }
                if (!isPublishedCardCar) {
                    message.info('При добавлении машины произошла ошибка');
                }
            };

            const cardCar = {
                priceMax: maxPriceCar,
                priceMin: minPriceCar,
                name: modelCar,
                thumbnail: {
                    mimetype: image.type,
                    originalname: image.name,
                    path: image.thumbUrl,
                    size: image.size
                },
                description: descriptionCar,
                categoryId: {
                    description: categorySelect.description,
                    id: categorySelect.id,
                    name: categorySelect.name,
                },
                colors: newColors,
            }

            postCardCar(access_token, cardCar)
                .then(response => {
                    dispatch({type: 'GET_CARD_CAR', payload: response.data})
                    dispatch({type: 'SET_CARD_CAR', payload: true})
                    info()
                })

                .catch(error => {
                    dispatch({type: 'SET_CARD_CAR', payload: false})
                    info()
                });
        }

        const handleCancelInfoCardCar = () => {
            setModelCar('')
            setTypeCar('')
            setMinPriceCar('')
            setMaxPriceCar('')
            setDescriptionCar('')
            setNameColor('')
            setImage('')
            setNewColors([])
        }

        const hendleDeleteCardCar = () => {

            const info = () => {
                if (isPublishedCardCar) {
                    message.info('Успешно! Машина удалена');
                }
                if (!isPublishedCardCar) {
                    message.info('При удалении машины возникли проблемы');
                }
            };


            deleteCardCar(access_token, addedCardCar.data.id)
                .then(response => {
                    dispatch({type: 'DELETE_CARD_CAR', payload: true})
                    info()
                })

                .catch(error => {
                    dispatch({type: 'DELETE_CARD_CAR', payload: false})
                    info()
                });
        }

        const isEnableButton = !modelCar || !typeCar || !minPriceCar || !maxPriceCar || !descriptionCar || !newColors || !categorySelect || !image

        return (
            <div className='buttons'>
                <div className='buttons-group'>
                    <Button className='button-save'
                            type="primary"
                            onClick={handleAddNewCardCar}
                            disabled={isEnableButton}
                    >
                        Сохранить
                    </Button>
                    <Button className='button-cancel'
                            type='primary'
                            onClick={handleCancelInfoCardCar}
                    >
                        Отменить
                    </Button>
                </div>
                <div className='buttons-one'>
                    <Button className='button-delete'
                            type="primary"
                            disabled={!isPublishedCardCar ? true : isEnableButton}
                            onClick={hendleDeleteCardCar}
                    >
                        Удалить
                    </Button>
                </div>
            </div>
        );
    }
;

