import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRedirect} from 'react-router'

import App from '../imports/App.jsx';
import Home from '../imports/ui/pages/home.jsx';
import Profile from '../imports/ui/pages/profile.jsx';
import Cart from '../imports/ui/pages/cart.jsx';
import Search from '../imports/ui/pages/search.jsx';
import Product from '../imports/ui/pages/productView';
import Submit from '../imports/ui/pages/submit';
import Login from '../imports/ui/pages/login.jsx'
import Register from '../imports/ui/components/register.jsx'

import '../imports/startup/client/account-config';
import '../lib/config/atConfig';

Meteor.startup(() => {
    render(
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRedirect to="/home"/>
                <Route path="home" component={Home} />
                <Route path="login" component={Login} />
                <Route path="register" component={Register} fruits = {"WHAAAAT"}/>
                <Route path="register/:step" component={Register}/>
                <Route path="search" component={Search} />
                <Route path="profile" component={Profile} />
                <Route path="cart" component={Cart} />
                <Route path="submit" component={Submit} />
                <Route path="product/:entries" component={Product} />
            </Route>
        </Router>
        ,document.getElementById('render-target')
    );
});
