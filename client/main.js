import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRedirect} from 'react-router'

import App from '../imports/App.jsx';
import Home from '../imports/ui/pages/home.jsx';
import MyStore from '../imports/ui/pages/myStore.jsx';
import Cart from '../imports/ui/pages/cart.jsx';


Meteor.startup(() => {
    render(
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRedirect to="/home"/>
                <Route path="home" component={Home} />
                <Route path="myStore" component={MyStore} />
                <Route path="cart" component={Cart} />
            </Route>
        </Router>
        ,document.getElementById('render-target')
    );
});
