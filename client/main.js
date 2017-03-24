import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRedirect} from 'react-router'

import App from '../imports/App.jsx';
import Home from '../imports/ui/pages/home.jsx';
import MyStore from '../imports/ui/pages/myStore.jsx';
import Cart from '../imports/ui/pages/cart.jsx';
import Search from '../imports/ui/pages/search.jsx';
import Product from '../imports/ui/pages/productView';
import Submit from '../imports/ui/pages/submit';

Meteor.startup(() => {
    render(
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRedirect to="/home"/>
                <Route path="home" component={Home} />
                <Route path="search" component={Search} />
                <Route path="myStore" component={MyStore} />
                <Route path="cart" component={Cart} />
                <Route path="submit" component={Submit} />
                <Route path="product/:entries" component={Product} />
            </Route>
        </Router>
        ,document.getElementById('render-target')
    );
});
