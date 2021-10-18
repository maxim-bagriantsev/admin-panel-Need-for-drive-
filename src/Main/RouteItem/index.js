import React from 'react';
import {Route, Switch} from "react-router-dom";
import {OrderList} from "../OrderList";
import {CardCar} from "../CardCar";

export const RouteItem = () => {
    return (
        <Switch>
            <Route path='/main/carSetting' component={CardCar} exact/>
            <Route path='/main/orderList' component={OrderList} exact/>
        </Switch>
    );
};

