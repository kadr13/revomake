/**
 * Created by JohnBae on 4/15/17.
 */

import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import {LinkContainer} from 'react-router-bootstrap';
import {Navbar, NavItem, Nav, Button} from 'react-bootstrap'
import './style.css';

class NavBar extends Component{

    logOff(){
        AccountsTemplates.logout();
    }

    render(){

        return(
            <div id="navBar">
                <LinkContainer to="/home">
                    <Button id="navBar-logo">
                        <img style={{verticalAlign: "middle", marginLeft: "25px"}}
                             width="200"
                             src="/assets/revomakeLogo.png"/>
                    </Button>
                </LinkContainer>
                <input className="navBar-search"/>
                <LinkContainer to="/home">
                    <Button className="navBar-elements">
                        HOME
                    </Button>
                </LinkContainer>
                {/*<LinkContainer to="/cart">
                    <Button className="navBar-elements">
                        SEARCH
                    </Button>
                </LinkContainer>*/}
                <LinkContainer to="/profile">
                    <Button className="navBar-elements">
                        MY STORE
                    </Button>
                </LinkContainer>
                <LinkContainer to="/cart">
                    <Button className="navBar-elements">
                        CART
                    </Button>
                </LinkContainer>
                {
                    this.props.currentUser ?
                        <Button className="navBar-elements" onClick = {this.logOff.bind(this)}>LOGOUT</Button>
                        :
                        <LinkContainer to={{pathname: '/login', state: {redirect: this.props.redirect}}}>
                            <Button className="navBar-elements">LOGIN</Button>
                        </LinkContainer>
                }
            </div>
        )
    }
}

export default withTracker(props => {

    return {
        currentUser: Meteor.user(),
    };

})(NavBar);