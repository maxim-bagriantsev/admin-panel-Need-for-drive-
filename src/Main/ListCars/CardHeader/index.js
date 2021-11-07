import React, {useState} from 'react';
import {DropdownItems} from "./Dropdown";
import {Button} from "antd";
import './headerContent.scss'
import {getFilterCategory} from "../../../api/api";
import {useDispatch, useSelector} from "react-redux";


export const CarsHeader = () => {
    const [selectedCategoryId, setSelectCategoryId] = useState([])

    const dispatch = useDispatch()

    const hendleChangeFilterCategory = () => {

        getFilterCategory(selectedCategoryId)
            .then(response => {
                dispatch({type: 'GET_FILTER_CATEGORY_CARS', payload: response.data.data})
            })
    }

    return (
        <div className='content-header'>
            <div className='cars-header'>
                <DropdownItems className='dropdown-item'
                               selectedCategoryId={selectedCategoryId}
                               setSelectCategoryId={setSelectCategoryId}
                />
                <Button className='card-header-button'
                        type="primary"
                        onClick={hendleChangeFilterCategory}
                >
                    Применить
                </Button>
            </div>
        </div>
    );
};

