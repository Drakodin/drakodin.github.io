import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import DropdownDemo from './dropdown/demo';
import Navigation from './navigation/nav';
import Home from './home/home';

const Router = () => (
    <div>
        <Navigation/>
        <HashRouter basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/projects/mui-dropdown" component={DropdownDemo}/>
            </Switch>
        </HashRouter>
    </div>
)

export default Router;