import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import DropdownDemo from './dropdown/demo';
import Navigation from './navigation/nav';
import Home from './home/home';
import { NotFound } from './errors';

const Router = () => (
    <div>
        <Navigation/>
        <HashRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/projects/mui-dropdown" component={DropdownDemo}/>
                <Route component={NotFound}/>
            </Switch>
        </HashRouter>
    </div>
)

export default Router;