import React from 'react';
import {Select} from "antd";
import Icon from "@ant-design/icons";
import {ReactComponent as doubleArrow} from "../../../../../assets/SVG/doubleArrow.svg";
import {dropdownListCars, dropdownListTowns, dropdownOrderStatus, dropdownPeriodTime} from "./constants";
import {useDispatch} from "react-redux";

export const ItemButtons = () => {

    const dispatch = useDispatch()

    const {Option} = Select;

    const handleChangePeriodTime = (value) => {
        dispatch({type: 'SELECT_PERIOD_TIME', payload: value})
    }

    const handleChangeListCars = (value) => {
        if (value !== 'Любая') {
            dispatch({type: 'SELECT_CAR', payload: '&carId' + `=${value}`})
        } else {
            dispatch({type: 'SELECT_CAR', payload: ''})
        }
    }

    const handleChangeListTowns = (value) => {
        dispatch({type: 'SELECT_TOWN', payload: value})
    }
    const handleChangeOrderStatus = (value) => {
        dispatch({type: 'SELECT_ORDER_STATUS', payload: value})
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

    return (
        <>
            <Select
                defaultValue="За неделю"
                suffixIcon={<Icon component={doubleArrow} className='content-dropdown-icon'/>}
                onChange={handleChangePeriodTime}
                className='item-dropdown-button'
            >
                {dropdownButtonPeriodTime}
            </Select>

            <Select
                defaultValue="Любая"
                suffixIcon={<Icon component={doubleArrow} className='content-dropdown-icon'/>}
                onChange={handleChangeListCars}
                className='item-dropdown-button'
            >
                {dropdownButtonListCars}
            </Select>

            <Select
                defaultValue="Ульяновск"
                suffixIcon={<Icon component={doubleArrow} className='content-dropdown-icon'/>}
                onChange={handleChangeListTowns}
                className='item-dropdown-button'
            >
                {dropdownButtonListTowns}
            </Select>

            <Select
                defaultValue="В процессе"
                suffixIcon={<Icon component={doubleArrow} className='content-dropdown-icon'/>}
                onChange={handleChangeOrderStatus}
                className='item-dropdown-button'
            >
                {dropdownButtonOrderStatus}
            </Select>
        </>
    );
};
