import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRedirect} from 'react-router'

import App from '../imports/App.jsx';
import Home from '../imports/ui/pages/home/main.jsx';
import Profile from '../imports/ui/pages/designer/main.jsx';
import Cart from '../imports/ui/pages/cart/cart.jsx';
import Product from '../imports/ui/pages/product/main.jsx';
import Submit from '../imports/ui/pages/product/submit';
import Login from '../imports/ui/pages/login/login.jsx'
import Register from '../imports/ui/pages/login/register/main.jsx'
import RecoverPassword from '../imports/ui/pages/login/recoverPassword.jsx'

Meteor.startup(() => {
    render(
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRedirect to="/home"/>
                <Route path="home" component={Home} >
                    <Route path=":component" component={Home}/>
                </Route>
                <Route path="login" component={Login} noNavBar/>
                <Route path="recoverPassword" component={RecoverPassword} noNavBar/>
                <Route path="register" component={Register} noNavBar registration/>
                <Route path="register/:step" component={Register} noNavBar registration/>
                <Route path="profile" component={Profile} />
                <Route path="product/:id" component={Product} />
                <Route path="cart" component={Cart} />
                <Route path="submit" component={Submit} />
            </Route>
        </Router>
        ,document.getElementById('render-target')
    );
});
