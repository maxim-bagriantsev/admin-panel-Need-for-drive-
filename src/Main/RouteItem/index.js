import React from 'react';
import {Route, Switch} from "react-router-dom";
import {OrderList} from "../OrderList";
import {CardCar} from "../CardCar";
import {ListCars} from "../ListCars";
import {ErrorPage} from "../ErrorPage";

export const RouteItem = () => {
    return (
        <Switch>
            <Route path='/main/carSetting' component={CardCar} exact/>
            <Route path='/main/listCars' component={ListCars} exact/>
            <Route path='/main/orderList' component={OrderList} exact/>
            <Route path='/main/error' component={ErrorPage} exact/>
            <Route path='/main/error' component={ErrorPage} exact/>
            <Route path='/main/error' component={ErrorPage} exact/>
            <Route path='/main/error' component={ErrorPage} exact/>
        </Switch>
    );
};

