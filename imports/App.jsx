/**
 * Created by JohnBae on 12/26/16.
 */

import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import NavBar from './ui/components/navBar/main.jsx'

import './ui/stylesheets/bootstrap.css'
import './ui/stylesheets/global.css'
import './ui/stylesheets/customBootstrap.css'

class App extends Component {

    constructor(props){
        super(props);
    }

    componentDidUpdate(){
        var sub = Meteor.subscribe("userData"),
            self = this;
        sub.ready(function(){
            var registering = self.props.children.props.route.registration;
            if(self.props.currentUser && self.props.currentUser.name && !registering){
                Meteor.logout();
            }
        });

    }

    render() {
        var showNavBar = !this.props.children.props.route.noNavBar;

        if(showNavBar){
            return (
                <div id = "masterContainer">
                    <NavBar currentUser = {this.props.currentUser}
                            redirect = {this.props.location.pathname}/>
                    <div id="masterContainer-container">
                        {this.props.children}
                    </div>
                </div>
            );
        }
        else{
            return (
                <div className = "masterContainer-container">
                    <div id="masterContainer-container">
                        {this.props.children}
                    </div>
                </div>
            );
        }
    }
}

export default createContainer(() => {
    return {
        currentUser: Meteor.user(),
    };
}, App);