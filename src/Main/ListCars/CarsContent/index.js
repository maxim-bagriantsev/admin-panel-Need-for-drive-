import React from 'react';
import './carsTable.scss'
import {CarsTable} from "./CarsTable";

export const CarsContent = ({setIsLoadedCar}) => {
    return (
        <div className='cars-content'>
            <CarsTable setIsLoadedCar={setIsLoadedCar}/>
        </div>
    );
};

