import React from 'react';
import './infoOrder.scss'
import moment from 'moment'

export const InfoOrder = ({
                              image,
                              model,
                              cityName,
                              address,
                              dateFrom,
                              dateTo,
                              colors
                          }) => {


    return (
        <div className='card-content-image-info'>
            <img className='card-content-imageCar' src={image} alt=""/>
            <div className='card-content-infoOrder'>
                <section><span>{model}</span> в <span>{cityName}</span>, {address}</section>
                <section> {moment(dateFrom).format('DD.MM.YYYY h:mm')} — {moment(dateTo).format('DD.MM.YYYY h:mm')}</section>
                <section>Цвет:
                    <span> {`${colors}`}</span>
                </section>
            </div>
        </div>
    );
};

