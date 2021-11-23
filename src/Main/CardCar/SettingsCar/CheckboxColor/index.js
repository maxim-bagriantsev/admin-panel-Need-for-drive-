import React from 'react';
import {Checkbox} from "antd";
import './checkboxColor.scss'

export const CheckboxColor = ({newColors, setNewColors}) => {

    const deleteItemColor = (index) => {

        const filteredColors = newColors.filter((item, i) => {
            return i !== index
        })
        setNewColors(filteredColors)
    }

    const colors = newColors.map((item, index) => {

        return (
            <label className='checkbox-color'
                   key={index}
            >
                <Checkbox checked
                          onClick={() => deleteItemColor(index)}
                          item={item}
                          key={index}
                >{item}</Checkbox>
            </label>
        )
    })

    return (
        <div className='setting-car-color-checkbox'>
            {colors}
        </div>
    );
};

