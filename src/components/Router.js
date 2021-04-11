import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import ReservationsContainer from './ReservationsContainer';
import Tours from './components/Tours';



function Router() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/tours' component={Tours} />
                <Route exact path='/reservations' component={ReservationsContainer} />
            </Switch>
        </div>
    )
}

export default Router;
