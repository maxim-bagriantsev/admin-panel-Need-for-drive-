import React from 'react';
import './contentInfo.scss'
import { MenuButton} from "./MenuButton";
import {Price} from "./Price";
import {ChecknoxCard} from "./Checkbox";
import {InfoOrder} from "./InfoOrder";

export const CardContent = () => {
    return (
        <div className='card-content'>
            <InfoOrder/>
            <ChecknoxCard/>
            <Price/>
            <MenuButton/>
        </div>
    );
};

