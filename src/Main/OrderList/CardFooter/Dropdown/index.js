import React from 'react';
import './index.css';
import {Select} from 'antd';
import Icon from '@ant-design/icons';
import {ReactComponent as doubleArrow} from '../../../../assets/SVG/doubleArrow.svg'
import {ItemDropdown} from "./ItemDropdown";

const {Option} = Select;

function handleChange(value) {
    console.log(`selected ${value}`);
}

export const DropdownItem = () => {
    return (
        <>
            <div className='items-dropdown-button'>
                <ItemDropdown/>
                {/*<Select defaultValue="За неделю"*/}
                {/*        suffixIcon={<Icon component={doubleArrow} className='content-dropdown-icon'/>}*/}
                {/*        onChange={handleChange}*/}
                {/*        className='item-dropdown-button'*/}
                {/*>*/}
                {/*    <Option value="За сегодня">За сегодня</Option>*/}
                {/*    <Option value="За неделю">За неделю</Option>*/}
                {/*    <Option value="За месяц">За неделю</Option>*/}
                {/*    <Option value="За год">За год</Option>*/}
                {/*</Select>*/}

                <Select defaultValue="Elantra"
                        suffixIcon={<Icon component={doubleArrow} className='content-dropdown-icon'/>}
                        onChange={handleChange}
                        className='item-dropdown-button'
                >
                    <Option value="Elantra">Elantra</Option>
                    <Option value="Любая">Любая</Option>
                    <Option value="Renoult">Renoult</Option>
                    <Option value="Honda">Honda</Option>
                </Select>

                <Select defaultValue="Ульяновск"
                        suffixIcon={<Icon component={doubleArrow} className='content-dropdown-icon'/>}
                        onChange={handleChange}
                        className='item-dropdown-button'
                >
                    <Option value="Ульяновск">Ульяновск</Option>
                    <Option value="Самара">Самара</Option>
                    <Option value="Москва">Москва</Option>
                    <Option value="Санкт-Петербург">Санкт-Петербург</Option>
                </Select>

                <Select defaultValue="В процессе"
                        suffixIcon={<Icon component={doubleArrow} className='content-dropdown-icon'/>}
                        onChange={handleChange}
                        className='item-dropdown-button'
                >
                    <Option value="Новый">Новый</Option>
                    <Option value="Подтвержденный">Подтвержденный</Option>
                    <Option value="Отмененный">Отмененный</Option>
                    <Option value="В процессе">В процессе</Option>
                </Select>
            </div>
        </>
    );
};

