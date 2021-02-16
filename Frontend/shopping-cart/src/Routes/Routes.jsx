import React from 'react';
import { Route, Switch } from "react-router-dom";
import { HomePage } from '../Pages/HomePage/Components/HomePage';
import { Navbar } from '../Pages/HomePage/Components/Navbar';

export function Routes() {
    return (
        <div>
            <Route path = "/" render = {(props) => <Navbar {...props} /> }  />
            <Switch>
                <Route exact path = "/" render = {(props) => <HomePage {...props} /> } />
            </Switch>
        </div>
    )
}
