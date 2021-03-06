import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from "../component/Home";
import Two from "../component/Two";
import Antd from "../component/Antd";
import Login from "../component/Login";
import UserManger from '../component/userManger';
import Register from '../component/Register';
export function CustomHome() {
    return (
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/two" component={Two}/>
            <Route exact path="/antd" component={Antd}/>
            <Route exact path="/userManger" component={UserManger}/>
            <Route exact path="/register" component={Register}/>
        </Switch>
    );
}

export default CustomHome;
