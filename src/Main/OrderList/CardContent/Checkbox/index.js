import React from 'react';
import {Checkbox} from "antd";
import './index.css'
import 'antd/dist/antd.css';

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}

export const ChecknoxCard = () => {
    return (
        <div className='card-content-checkbox'>
            <label className='checkbox'>
                <Checkbox onChange={onChange}>Полный бак</Checkbox>
            </label>
            <label className='checkbox'>
                <Checkbox onChange={onChange}>Детское кресло</Checkbox>
            </label>
            <label className='checkbox'>
                <Checkbox onChange={onChange}>Правый руль</Checkbox>
            </label>
        </div>
    );
};

