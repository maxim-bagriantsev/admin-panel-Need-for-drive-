import React from 'react';
import './radioButtonCategoriesId.scss'
import {ItemCategoriesId} from "./ItemCategoriesId/ItemCategoriesId";
import {useSelector} from "react-redux";

export const RadioButtonCategoriesId = ({
                                            categorySelect,
                                            setCategorySelect
                                        }) => {
    const {
        categoriesId,
    } = useSelector((state) => {
        return state.reducerData
    })

    const categoryName = categoriesId?.map((item, index) => {
        return <ItemCategoriesId item={item}
                                 key={index}
                                 setCategorySelect={setCategorySelect}
        />
    })

    return (
        <>
            <div className='button-radio'>
                <div className="form-group">
                    {categoryName}
                </div>
            </div>
        </>
    );
};

