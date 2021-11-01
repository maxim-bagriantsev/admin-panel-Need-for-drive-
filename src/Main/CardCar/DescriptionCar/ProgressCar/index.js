import React from 'react';

import {Progress} from 'antd';
import './index.css';
import './progressCar.scss'

export const ProgressCar = ({modelCar, typeCar, descriptionCar, fileList, minPriceCar, maxPriceCar}) => {
    const arr = [modelCar, typeCar, descriptionCar, fileList, minPriceCar, maxPriceCar]

    const sumItem = arr.filter(Boolean).length

    const progress = Math.round(sumItem / 6 * 100)

    return (

        <div className='progress'>
            <div className='progress-content'>
                <div className='progress-content-header'>
                    <span className='progress-content-title'>Заполнено</span>
                    <span className='ant-progress-text'>
                        {progress}%
                    </span>
                </div>
                <Progress percent={progress} showInfo={false}/>
            </div>
        </div>
    )
}

