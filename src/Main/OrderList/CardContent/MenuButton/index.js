import React from 'react';
import ready from "../../../../assets/SVG/ready.svg";
import cancel from "../../../../assets/SVG/cancel.svg";
import edit from "../../../../assets/SVG/edit.svg";
import './button.scss'

export const MenuButton = () => {
    return (
        <div className='card-content-buttons'>

            <button className='item-button'>
                <img className='item-button-icon' src={ready} alt=""/>
                <section>Готово</section>
            </button>

            <button className='item-button'>
                <img className='item-button-icon' src={cancel} alt=""/>
                <section>Отмена</section>
            </button>

            <button className='item-button'>
                <img className='item-button-icon' src={edit} alt=""/>
                <section>Изменить</section>
            </button>

        </div>
    );
};

