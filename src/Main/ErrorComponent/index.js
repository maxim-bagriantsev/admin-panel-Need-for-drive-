import React from 'react';
import {Button} from "antd";

export const ErrorComponent = (props) => {
    return (
        <section className='error-component'>
            <h1 className='error-component__code'>
                { props.status }
            </h1>

            <h2 className='error-component__title'>
                { props.title }
            </h2>

            <span className='error-component__info'>
        { props.message }
      </span>

            <div className='error-component__button'>
                <Button backgrond='blue'>
                    Назад
                </Button>
            </div>
        </section>
    );
};

