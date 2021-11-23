import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {Button, notification} from 'antd';

const key = 'updatable';

const openNotification = () => {
    notification.open({
        key,
        message: 'Notification Title',
        description: 'description.',
    });
    setTimeout(() => {
        notification.open({
            key,
            message: 'New Title',
            description: 'New description.',
        });
    }, 1000);
};

export const Notification = () => {
    return (
        <Button type="primary" onClick={openNotification}>
            Open the notification box
        </Button>
    );
};

