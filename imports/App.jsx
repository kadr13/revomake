/**
 * Created by JohnBae on 12/26/16.
 */

import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import NavBar from './ui/components/navBar/navBar.jsx'

import './ui/stylesheets/bootstrap.css'
import './ui/stylesheets/global.css'

class App extends Component {

    constructor(props){
        super(props);
    }

    componentDidUpdate(){

        var registering = this.props.children.props.route.registration;
        console.log("registering?", registering);
        if(Meteor.user() && !Meteor.user().name && !registering){
            console.log("LOGGING OUT");
            Meteor.logout();
        }
    }

    render() {
        var showNavBar = !this.props.children.props.route.noNavBar;

        if(showNavBar){
            return (
                <div className = "masterContainer">
                    <NavBar currentUser = {this.props.currentUser}
                            redirect = {this.props.location.pathname}/>
                    {this.props.children}
                </div>
            );
        }
        else{
            return (
                <div className = "masterContainer">
                    {this.props.children}
                </div>
            );
        }
    }
}

export default createContainer(() => {
    Meteor.subscribe("userData");
    return {
        currentUser: Meteor.user(),
    };
}, App);