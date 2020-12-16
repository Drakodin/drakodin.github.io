import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import DropdownDemo from './dropdown/demo';
import Navigation from './navigation/nav';
import Bar from './navigation/bar';
import Home from './home/home';
import { NotFound } from './errors';
import { makeStyles } from '@material-ui/core';

const make = makeStyles(() => ({
    bg: {
        background: 'linear-gradient(0.5turn, #001756, #2E0084 58.2%)',
        position: 'absolute',
        height: '100%',
        width: '100%',
        top: 0,
        left: 0,
        zIndex: -2,
    },
}));

const Router = () => (
    <div>
        <div className={make().bg}/>
        <Bar/>
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