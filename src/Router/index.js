import React from 'react';
import {Route, Switch} from "react-router-dom";
import {LoginPanel} from "../LoginPanel";
import {Main} from "../Main";
import {useSelector} from "react-redux";
import {Redirect} from "react-router";

export const StepRouter = () => {

    const {
        isAuthorised,
    } = useSelector((state) => {
        return state.reducerData
    })

    return (
        <Switch>

            <Route path='/login' component={LoginPanel} exact/>
            {/*<Route path='/main/carSetting' component={Main} exact/>*/}
            {
                isAuthorised
                    ? <Route path='/main' component={Main}/>
                    : <Redirect to='/login'/>
            }
        </Switch>
    );
};