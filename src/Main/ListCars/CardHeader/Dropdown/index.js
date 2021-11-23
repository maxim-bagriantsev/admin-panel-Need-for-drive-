import React from 'react';
import './index.css';
import {ItemButton} from "./ItemButtons";

export const DropdownItems = ({setSelectCategoryId, selectedCategoryId}) => {
    return (
        <>
            <div className='items-dropdown-buttons'>
                <ItemButton setSelectCategoryId={setSelectCategoryId}
                            selectedCategoryId={selectedCategoryId}/>
            </div>
        </>
    );
};

