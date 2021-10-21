import React from 'react';
import {Button} from "antd";
import './errorComponent.scss'
import './index.css'

export const ErrorComponent = (props) => {
    return (
        <section className='error-component'>
            <h1 className='error-component-status'>
                { props.status }
            </h1>

            <h2 className='error-component-title'>
                { props.title }
            </h2>

            <span className='error-component-subtitle'>
        { props.message }
      </span>

            <div className='error-component-button'>
                <Button backgrond='blue'>
                    Назад
                </Button>
            </div>
        </section>
    );
};

