import React from 'react';
import {Checkbox} from "antd";
import './checkboxColor.scss'

export const CheckboxColor = ({newColor, setNewColor}) => {

    const deleteItemColor = (id) => {
        setNewColor([...newColor.slice(0, id), ...newColor.slice(id + 1)])
    }

    const colors = newColor.map((item, id) => {
        return (
            <label className='checkbox-color'
                   key={id}
            >
                <Checkbox checked
                          onClick={() => deleteItemColor(id)}
                          item={item}
                          key={id}
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

