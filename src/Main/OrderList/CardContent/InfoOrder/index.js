import React from 'react';
import car from "../../../../assats/Images/car-mock.png";
import './infoOrder.scss'

export const InfoOrder = () => {
    return (
        <>
            <img className='card-content-imageCar' src={car} alt=""/>
            <div className='card-content-infoOrder'>
                <section><span>ELANTRA</span> в <span>Ульяновск</span>, Нариманова 42</section>
                <section>12.06.2019 12:00 — 13.06.2019 12:00</section>
                <section>Цвет:
                    <span> Голубой</span>
                </section>
            </div>
        </>
    );
};

