import React, {useState} from 'react';
import ready from "../../../../assets/SVG/ready.svg";
import cancel from "../../../../assets/SVG/cancel.svg";
import edit from "../../../../assets/SVG/edit.svg";
import './button.scss'

export const MenuButton = ({
                               orderStatusId
                           }) => {
   const visibleButtonReady = 'Подтвержденные'
   const visibleButtonCancel = 'Отмененный'
   const visibleButtonEdit = 'Временные'

    if(orderStatusId === visibleButtonReady) {
        return visibleButtonReady
    }
    if(orderStatusId === visibleButtonCancel) {
        return visibleButtonCancel
    }
    if(orderStatusId === visibleButtonEdit) {
        return visibleButtonEdit
    }

    return (
        <div className='card-content-buttons'>

            {visibleButtonReady && <button className='item-button'>
                <img className='item-button-icon' src={ready} alt=""/>
                <section>Готово</section>
            </button>}

            {visibleButtonCancel && visibleButtonEdit && <button className='item-button'>
                <img className='item-button-icon' src={cancel} alt=""/>
                <section>Отмена</section>
            </button>}

            {visibleButtonCancel && visibleButtonEdit &&<button className='item-button'>
                <img className='item-button-icon' src={edit} alt=""/>
                <section>Изменить</section>
            </button>}

        </div>
    );
};

