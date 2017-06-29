/**
 * Created by JohnBae on 4/15/17.
 */

import React, { Component } from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {Navbar, NavItem, Nav, FormGroup, FormControl, Button} from 'react-bootstrap'
import './navBar.css';

class NavBar extends Component{

    logOff(){
        AccountsTemplates.logout();
    }

    render(){
        const {...rest} = this.props;
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
                        {/*<Navbar.Form pullLeft>
                         <FormGroup>
                         <FormControl type="text" placeholder="Search" />
                         </FormGroup>
                         {' '}
                         </Navbar.Form>*/}
                        <LinkContainer to="/home">
                            <NavItem>HOME</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/profile">
                            <NavItem>MY STORE</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/cart">
                            <NavItem >CART</NavItem>
                        </LinkContainer>
                        {
                            this.props.currentUser ?
                                <NavItem onClick = {this.logOff.bind(this)}>LOGOUT</NavItem>
                                :
                                <LinkContainer to={{pathname: '/login', state: {redirect: this.props.redirect}}}>
                                    <NavItem >LOGIN</NavItem>
                                </LinkContainer>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        );
    }
}

export default class TestNavBar extends Component{
    logOff(){
        AccountsTemplates.logout();
    }

    render(){
        return(
            <div id="navBar">
                <LinkContainer to="/home">
                    <Button>LOGO</Button>
                </LinkContainer>
                <LinkContainer to="/home">
                    <Button>HOME</Button>
                </LinkContainer>
                <LinkContainer to="/profile">
                    <Button>MY STORE</Button>
                </LinkContainer>
                <LinkContainer to="/cart">
                    <Button >CART</Button>
                </LinkContainer>
                {
                    this.props.currentUser ?
                        <Button onClick = {this.logOff.bind(this)}>LOGOUT</Button>
                        :
                        <LinkContainer to={{pathname: '/login', state: {redirect: this.props.redirect}}}>
                            <Button >LOGIN</Button>
                        </LinkContainer>
                }
            </div>
        )
    }
}