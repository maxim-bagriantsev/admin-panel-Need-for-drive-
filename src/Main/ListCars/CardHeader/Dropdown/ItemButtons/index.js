import React from 'react';
import {Select} from "antd";
import Icon from "@ant-design/icons";
import {ReactComponent as doubleArrow} from "../../../../../assets/SVG/doubleArrow.svg";
import {classCars} from "./constants";

const {Option} = Select;

function handleChange(value) {
    console.log(`selected ${value}`);
}

const dropdownButtonClassCars = classCars.map((item, id) => {
    return (
        <Option key={id}
                value={item.value}>{item.text}</Option>
    )
})

export const ItemButton = () => {
    return (
        <>
            <Select
                defaultValue="Любые"
                suffixIcon={<Icon component={doubleArrow} className='content-dropdown-icon'/>}
                onChange={handleChange}
                className='item-dropdown-button'
            >
                {dropdownButtonClassCars}
            </Select>
        </>
    );
};
