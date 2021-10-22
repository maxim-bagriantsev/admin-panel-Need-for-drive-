import React from 'react';
import {Select} from "antd";
import Icon from "@ant-design/icons";
import {ReactComponent as doubleArrow} from "../../../../../assets/SVG/doubleArrow.svg";

const {Option} = Select;

function handleChange(value) {
    console.log(`selected ${value}`);
}

export const ItemDropdown = () => {
    return (
        <Select defaultValue="За неделю"
                suffixIcon={<Icon component={doubleArrow} className='content-dropdown-icon'/>}
                onChange={handleChange}
                className='item-dropdown-button'
        >
            <Option value="За сегодня">За сегодня</Option>
            <Option value="За неделю">За неделю</Option>
            <Option value="За месяц">За неделю</Option>
            <Option value="За год">За год</Option>
        </Select>
    );
};
