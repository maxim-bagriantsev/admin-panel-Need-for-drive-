import React from 'react';
import {Checkbox} from "antd";
import './index.css'
import 'antd/dist/antd.css';

export const CheckboxCard = ({
                                 isFullTank,
                                 isNeedChildChair,
                                 isRightWheel
                             }) => {
    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }

    return (
        <div className='card-content-checkbox'>
            <label className='checkbox'>
                <Checkbox onChange={onChange}
                          checked={isFullTank}>
                    <p className='checkbox-text'>Полный бак</p>
                </Checkbox>
            </label>
            <label className='checkbox'>
                <Checkbox onChange={onChange}
                          checked={isNeedChildChair}>
                    <p className='checkbox-text'>Детское кресло</p>
                </Checkbox>
            </label>
            <label className='checkbox'>
                <Checkbox onChange={onChange}
                          checked={isRightWheel}>
                    <p className='checkbox-text'>Правый руль</p>
                </Checkbox>
            </label>
        </div>
    );
};

