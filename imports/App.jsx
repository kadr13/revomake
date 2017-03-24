/**
 * Created by JohnBae on 12/26/16.
 */

import React, { Component, PropTypes } from 'react';

import {Navbar, NavItem, Nav, FormGroup, FormControl, Button} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {browserHistory} from 'react-router';

import './ui/stylesheets/bootstrap.css'
import './ui/stylesheets/cart.css'
import './ui/stylesheets/global.css'
import './ui/stylesheets/home.css'
import './ui/stylesheets/navbar.css'
import './ui/stylesheets/productPreview.css'
import './ui/stylesheets/productView.css'
import './ui/stylesheets/search.css'
import './ui/stylesheets/myStore.css'

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
                    <div className = 'navbar-Logo' onClick={()=>browserHistory.push('/home')}></div>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight >
                    <Navbar.Form pullLeft>
                        <FormGroup>
                            <FormControl type="text" placeholder="Search" />
                        </FormGroup>
                        {' '}
                    </Navbar.Form>
                    <LinkContainer to="/home">
                        <NavItem>HOME</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/search">
                        <NavItem>SEARCH</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/myStore">
                        <NavItem>MY STORE</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/cart">
                        <NavItem >CART</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/login">
                        <NavItem >LOGIN</NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

        );
    }
}