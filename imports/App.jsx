/**
 * Created by JohnBae on 12/26/16.
 */

import React, { Component, PropTypes } from 'react';

import {Navbar, NavItem, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {browserHistory} from 'react-router';

import './ui/stylesheets/bootstrap.css'
import './ui/stylesheets/cart.css'
import './ui/stylesheets/global.css'
import './ui/stylesheets/home.css'
import './ui/stylesheets/navbar.css'
import './ui/stylesheets/productPreview.css'

export default class App extends Component {

    componentDidUpdate(){

    }

    render() {
        return (
            <div className = "masterContainer">
                <NavbarInstance/>
                {this.props.children}
            </div>
        );
    }
}

class NavbarInstance extends Component{

    render(){
        return(
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <div className = 'navBarLogo' onClick={()=>browserHistory.push('/home')}></div>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight >
                    <LinkContainer to="/home">
                        <NavItem>HOME</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/myStore">
                        <NavItem>MY STORE</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/cart">
                        <NavItem >CART</NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

        );
    }
}
