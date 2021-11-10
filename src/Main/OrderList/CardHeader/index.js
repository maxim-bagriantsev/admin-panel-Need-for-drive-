import React, {useEffect} from 'react';
import {DropdownItems} from "../CardFooter/Dropdown";
import doubleArrow from "../../../assets/SVG/doubleArrow.svg";
import {Button} from "antd";
import './headerContent.scss'
import {useDispatch, useSelector} from "react-redux";
import {getFilterOrder} from "../../../api/api";


export const CardHeader = ({getPeriod}) => {

    const dispatch = useDispatch()

    const {
        selectedCar,
        selectedPeriodTime,
        selectedTown,
        selectedOrderStatus,
        currentPage
    } = useSelector((state) => {
        return state.reducerData
    })

    const access_token = JSON.parse(localStorage.getItem('access_token'))

    const selectedItems = {
        carId: selectedCar,
        createdAt: getPeriod,
        cityId: selectedTown,
        statusId: selectedOrderStatus,
        currentPage: currentPage
    }
    const hendleClickFilterOrder = () => {

        getFilterOrder(access_token, selectedItems)
            .then(response => {
                dispatch({type: 'IS_FILTERED_ORDER', payload: response.data})
            })
    }
    console.log(selectedCar)

    return (
        <div className='content-header'>
            <div className='card-header'>
                <DropdownItems className='dropdown-item' icon={<img src={doubleArrow} alt=""/>}/>
                <Button className='card-header-button'
                        type="primary"
                        onClick={hendleClickFilterOrder}
                >
                    Применить
                </Button>
            </div>
        </div>
    );
};

