import React from 'react';

export const ItemCategoriesId = ({
                                     item,
                                     setCategorySelect,
                                     index,
                                 }) => {

        const hendleChangeCategoryId = () => {
            setCategorySelect(item)
        }

        return (
            <label key={index} onClick={hendleChangeCategoryId}>
                <input
                    type="radio"
                    name="radioCar"
                    value="1"
                    className="real-radio-btn"
                />
                <span className="custom-radio-btn"/>
                {item.name}
            </label>
        )
    }
;

