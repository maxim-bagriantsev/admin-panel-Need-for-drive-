import React from 'react';
import {Checkbox} from "antd";
import './index.css'
import 'antd/dist/antd.css';

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}

export const CheckboxCard = () => {
    return (
        <div className='card-content-checkbox'>
            <label className='checkbox'>
                <Checkbox onChange={onChange}>
                    <p className='checkbox-text'>Полный бак</p>
                </Checkbox>
            </label>
            <label className='checkbox'>
                <Checkbox onChange={onChange}>
                    <p className='checkbox-text'>Детское кресло</p>
                </Checkbox>
            </label>
            <label className='checkbox'>
                <Checkbox onChange={onChange}>
                    <p className='checkbox-text'>Правый руль</p>
                </Checkbox>
            </label>
        </div>
    );
};

