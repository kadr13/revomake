import React, {Component} from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, Redirect} from 'react-router'
import {BrowserRouter, Switch} from 'react-router-dom'
import 'normalize.css';

import Home from '../imports/ui/pages/home/main.jsx';
import Profile from '../imports/ui/pages/designer/main.jsx';
import Cart from '../imports/ui/pages/cart/cart.jsx';
import Product from '../imports/ui/pages/product/main.jsx';
import Submit from '../imports/ui/pages/product/submit';
import Login from '../imports/ui/pages/login/login.jsx'
import Register from '../imports/ui/pages/login/register/main.jsx'
import RecoverPassword from '../imports/ui/pages/login/recoverPassword.jsx'

import NavBar from '../imports/ui/components/navBar/main.jsx'

Meteor.startup(() => {
    render(
        <BrowserRouter>
            <div id="bootstrap-overrides">
                <Route render={({location, history, match}) => {

                    var path = location.pathname;

                    return (
                        <div>
                            <NavBar location={path}/>
                            <Switch key={location.key} location={location}>
                                <Route exact path="/" render={() => <Redirect to="/home/feed"/>}/>

                                <Route path="/home" component={Home}/>
                                <Route path="/login" component={Login} noNavBar/>
                                <Route path="/profile" component={Profile} />
                                <Route path="/product/:id" component={Product} />
                                <Route path="/cart" component={Cart} />
                                <Route path="/submit" component={Submit} />
                                <Route component={Missing}/>
                            </Switch>
                        </div>
                    );
                }}/>
            </div>
        </BrowserRouter>
        ,document.getElementById('render-target')
    );
});

class Missing extends Component{
    render(){
        return(
            <div>
                <div>
                    The page you're looking for does not exist :(
                </div>
            </div>
        )
    }
}
