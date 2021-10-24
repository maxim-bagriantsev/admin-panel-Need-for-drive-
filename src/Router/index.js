import React from 'react';
import {Route, Switch} from "react-router-dom";
import {LoginPanel} from "../LoginPanel";
import {Main} from "../Main";

export const StepRouter = () => {
    return (
        <Switch>
            <Route path="/" component={LoginPanel} exact/>
            <Route path="/main/" component={Main}/>
        </Switch>
    );
};