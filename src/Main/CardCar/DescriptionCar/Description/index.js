import React from 'react';
import './description.scss'

export const Description = ({descriptionCar}) => {

    return (
        <div className='description'>
            <h5 className='description-title'>Описание</h5>
            <p className='description-text'>
                {descriptionCar ? descriptionCar : 'Описание машины не добавлено...'}
            </p>
        </div>
    );
};

