import React from 'react';
import Auth from './Auth';
import {Route, Redirect} from 'react-router';

import App from '../App';

const auth = new Auth();

const WithAuthRoute = ({component, ...rest}) => {
    rest.auth = auth;
    if (auth.isAuthenticated() || rest.path === '/callback') {      
        return <Route {...rest} render={(props) => {
                props.auth = auth;
                return React.createElement(component, props) 
            }
        } /> 
    }
    else
        return <Route {...rest} render={(props) => {
            props.auth = auth;
            return React.createElement(App, props) 
            }
        } />
};

export default WithAuthRoute;
