import React from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';

const propTypes = {
    component: PropTypes.func.isRequired
};

function PrivateRoute({component: Component,}) {
    return (
        <Route
            render={props => (<Component {...props} />)}
        />
    );
}

PrivateRoute.propTypes = propTypes;
export default PrivateRoute;
