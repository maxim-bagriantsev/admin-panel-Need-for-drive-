import React from 'react';
import {Select} from "antd";
import Icon from "@ant-design/icons";
import {ReactComponent as doubleArrow} from "../../../../../assets/SVG/doubleArrow.svg";
import {dropdownListCars, dropdownListTowns, dropdownOrderStatus, dropdownPeriodTime} from "./constants";

const {Option} = Select;

function handleChange(value) {
    console.log(`selected ${value}`);
}

const dropdownButtonPeriodTime = dropdownPeriodTime.map((item, id) => {
    return (
        <Option key={id}
                value={item.value}>{item.text}</Option>
    )
})

const dropdownButtonListCars = dropdownListCars.map((item, id) => {
    return (
        <Option key={id}
                value={item.value}>{item.text}</Option>
    )
})

const dropdownButtonListTowns = dropdownListTowns.map((item, id) => {
    return (
        <Option key={id}
                value={item.value}>{item.text}</Option>
    )
})

const dropdownButtonOrderStatus = dropdownOrderStatus.map((item, id) => {
    return (
        <Option key={id}
                value={item.value}>{item.text}</Option>
    )
})

export const ItemButtons = () => {
    return (
        <>
            <Select
                defaultValue="За неделю"
                suffixIcon={<Icon component={doubleArrow} className='content-dropdown-icon'/>}
                onChange={handleChange}
                className='item-dropdown-button'
            >
                {dropdownButtonPeriodTime}
            </Select>

            <Select
                defaultValue="Elantra"
                suffixIcon={<Icon component={doubleArrow} className='content-dropdown-icon'/>}
                onChange={handleChange}
                className='item-dropdown-button'
            >
                {dropdownButtonListCars}
            </Select>

            <Select
                defaultValue="Ульяновск"
                suffixIcon={<Icon component={doubleArrow} className='content-dropdown-icon'/>}
                onChange={handleChange}
                className='item-dropdown-button'
            >
                {dropdownButtonListTowns}
            </Select>

            <Select
                defaultValue="В процессе"
                suffixIcon={<Icon component={doubleArrow} className='content-dropdown-icon'/>}
                onChange={handleChange}
                className='item-dropdown-button'
            >
                {dropdownButtonOrderStatus}
            </Select>
        </>



    );
};
