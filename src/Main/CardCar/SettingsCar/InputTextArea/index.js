import React from 'react';
import './inputTextArea.scss'

export const InputTextArea = ({descriptionCar, setDescriptionCar}) => {

    const handleChangeDescription = (event) => {
        setDescriptionCar(event.target.value)
    }

    return (
        <textarea placeholder='Введите описание машины'
                  className='card-setting-textarea'
                  name='input-description-car'
                  value={descriptionCar}
                  onChange={handleChangeDescription}
        >
        </textarea>
    );
};

