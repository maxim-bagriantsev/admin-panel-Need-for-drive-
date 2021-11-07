import React, {useState} from 'react';
import {Select} from "antd";
import Icon from "@ant-design/icons";
import {ReactComponent as doubleArrow} from "../../../../../assets/SVG/doubleArrow.svg";
import {useSelector} from "react-redux";

export const ItemButton = ({setSelectCategoryId}) => {

    const {
        categoriesId
    } = useSelector((state) => {
        return state.reducerData
    })

    const {Option} = Select;

    const handleChange = (value) => {
        setSelectCategoryId(value)
    }

    const dropdownButtonClassCars = categoriesId?.map((item, id) => {
        return (
            <Option key={id}
                    value={item.id}
                    >
                {item.name}
            </Option>
        )
    })

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
