import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Sale from './pages/Sale';
import Admin from './pages/Admin';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/sale" component={Sale} />
                <Route path="/admin" component={Admin} />
            </Switch>
        </BrowserRouter>
    )
}