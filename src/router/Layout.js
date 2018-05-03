import React from 'react';
import {Switch, Route} from 'react-router-dom';
import CustomHome from './CustomHome';
import PrivateRoute from '../component/PrivateRoute'
import Home from '../component/Home'

function Layout() {
    return (
        <Switch>
            <Route exact path="/home" component={Home}/>
            <PrivateRoute component={CustomHome}/>
        </Switch>
    );
}

export default Layout;