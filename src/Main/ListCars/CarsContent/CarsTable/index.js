import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {Spin, Table} from 'antd';
import './tableCars.scss'
import {useAllCar} from "../../../../hook/useAllCar";
import {useDispatch, useSelector} from "react-redux";
import {columns} from "./common/colums";

export const CarsTable = () => {

    useAllCar()

    const dispatch = useDispatch()

    const {
        addedAllCar,
        filteredCategoryCars
    } = useSelector((state) => {
        return state.reducerData
    })

    const allListCars = addedAllCar?.map((item) => {
        return {
            key: item.id,
            id: item.id,
            modelCar: item.name,
            classCar: item.categoryId,
            regSign: item.number,
            minPrice: item.priceMin,
            maxPrice: item.priceMax,
            colors: item.colors,
            description: item.description,
            thumbnail: item.thumbnail,
        }
    })

    if (!addedAllCar) {
        return <Spin/>
    }

    const listCarsTableFiltered = filteredCategoryCars?.map((item) => {
        return {
            key: item.id,
            id: item.id,
            modelCar: item.name,
            classCar: item.categoryId,
            regSign: item.number,
            minPrice: item.priceMin,
            maxPrice: item.priceMax,
            colors: item.colors,
            description: item.description,
            thumbnail: item.thumbnail,
        }
    })

    const data = []

    for (let i = 0; i < addedAllCar.length; i++) {
        data.push({
            key: addedAllCar[i].id,
            id: addedAllCar[i].id,
            name: addedAllCar[i].name,
            type: addedAllCar[i].categoryId?.name,
            priceMin: addedAllCar[i].priceMin,
            priceMax: addedAllCar[i].priceMax,
            number: addedAllCar[i].number,
            categoryId: addedAllCar[i].categoryId,
            colors: addedAllCar[i].colors,
            description: addedAllCar[i].description,
            thumbnail: addedAllCar[i].thumbnail
        })
    }

    const handleClickByRow = (record) => {

        const selectCarItem = data.filter((item) => item.id === record.id)[0]
        dispatch({type: 'ADD_CAR_BY_CARD', payload: selectCarItem})
    }

    return (
        <div className='table-cars'>
            <Table size="small"
                   columns={columns}
                   pagination={{position: 'bottomCenter'}}
                   dataSource={!filteredCategoryCars ? allListCars : listCarsTableFiltered}
                   className='row-className'
                   onRow={(record) => {
                       return {
                           onClick: () => handleClickByRow(record)
                       }
                   }}
            />
        </div>)
};

