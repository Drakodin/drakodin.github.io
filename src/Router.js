import React from 'react'
import { Route, Switch } from 'react-router-dom';
import DropdownDemo from './dropdown/demo';

const Router = () => (
    <div>
        <Switch>
            <Route exact path="/mui-dropdown" component={DropdownDemo}/>
        </Switch>
    </div>
)

export default Router;