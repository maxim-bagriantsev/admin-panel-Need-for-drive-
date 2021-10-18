import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {Progress} from 'antd';
import './progressCar.scss'

export const ProgressCar = () => {
    const progress = 74

    return (

        <div className='progress'>
            <div className='progress-content'>
                <div className='progress-content-header'>
                    <span className='progress-content-title'>Заполнено</span>
                    <span className='ant-progress-text'>
                        {progress}%
                    </span>
                </div>
                <Progress  percent={74} showInfo={false}/>
            </div>

        </div>

    );
};
