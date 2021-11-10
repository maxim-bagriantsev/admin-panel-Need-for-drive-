import React from 'react';
import './cardFooter.scss'
import {Pagination} from "antd";
import 'antd/dist/antd.css';
import './index.css';
import {useDispatch, useSelector} from "react-redux";
import {useAllOrder} from "../../../hook/useAllOrder";
import {getFilterOrder} from "../../../api/api";


export const CardFooter = ({getPeriod}) => {
    useAllOrder()

    const dispatch = useDispatch()

    const {
        selectedCar,
        selectedTown,
        selectedOrderStatus,
        currentPage,
        filteredOrders
    } = useSelector((state) => {
        return state.reducerData
    })

    const selectedItems = {
        carId: selectedCar,
        createdAt: getPeriod,
        cityId: selectedTown,
        statusId: selectedOrderStatus,
        currentPage: currentPage
    }

    const access_token = JSON.parse(localStorage.getItem('access_token'))

    const handleChangePage = (currentPage) => {
        dispatch({type: 'ADD_CURRENT_PAGE', payload: currentPage})
        getFilterOrder(access_token, selectedItems)
            .then(response => {
                dispatch({type: 'IS_FILTERED_ORDER', payload: response.data})
            })
    }

    return (
        <div className='card-footer'>
            <Pagination defaultCurrent={1}
                        defaultPageSize={7}
                        pagesLength={filteredOrders?.count ? filteredOrders.count : ''}
                        currentPage={currentPage + 1}
                        total={filteredOrders?.count ? filteredOrders?.count- 7 : 2}
                        onChange={handleChangePage}
                        showSizeChanger={false}
                        hideOnSinglePage={true}
                        showLessItems
                        itemRender={(_, type, originalContent) => {
                            switch (type) {
                                case 'prev':
                                    return (
                                        <div className='pagination__button'>
                                            &laquo;
                                        </div>
                                    )

                                case 'next':
                                    return (
                                        <div className='pagination__button'>
                                            &raquo;
                                        </div>
                                    )

                                case 'jump-prev':
                                    return (
                                        <div className='pagination__dots'>
                                            ...
                                        </div>
                                    )

                                case 'jump-next':
                                    return (
                                        <div className='pagination__dots'>
                                            ...
                                        </div>
                                    )

                                default:
                                    return originalContent
                            }
                        }}
            />
        </div>
    );
};
