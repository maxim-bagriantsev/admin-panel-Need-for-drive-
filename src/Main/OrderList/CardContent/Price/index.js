import React from 'react';
import './price.scss'

export const Price = ({
                          price
                      }) => {
    return (
        <div className='card-content-price'>
            <p className='card-content-price-style'>
                {`${price ? price : ''} ₽`}
            </p>
        </div>
    );
};
