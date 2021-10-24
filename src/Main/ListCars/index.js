import React from 'react';
import {CarsHeader} from "./CardHeader";

import {CarsContent} from "./CarsContent";
import './orderList.scss'
import 'antd/dist/antd.css';

export const ListCars = () => {
    return (
        <div className='card-listCars'>
            <h2 className='card-listCars-title'>Заказы</h2>
            <div className='card-listCars-background'>
                <CarsHeader/>
                <CarsContent/>
            </div>
        </div>
    );
};

