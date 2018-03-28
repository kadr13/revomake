/**
 * Created by JohnBae on 4/05/17.
 */

import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import {Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import { browserHistory } from 'react-router'

import './style.css';

class Login extends Component{

    constructor(props){
        super(props);
        this.state = {
            error: "",
            username: "",
            password: ""
        };
        this.loginWithFacebook = this.loginWithFacebook.bind(this);
        this.loginWithPwd = this.loginWithPwd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getRedirectAddress = this.getRedirectAddress.bind(this);
    }

    getRedirectAddress(){
        console.log(this.props);
        var redirect = this.props.location.state ? this.props.location.state.redirect : "/home";
        if(redirect=="/login") redirect = "/home";
        if(!redirect) redirect = "/home";
        console.log("TRYING:", redirect);
        return redirect;
    }

    handleChange(event){
        var target = event.target;
        this.setState({[target.name]: target.value});
    }

    loginWithFacebook(){
        var self = this;
        Meteor.loginWithFacebook({ requestPermissions: ['email', 'public_profile']}, function(err){
            if (err) {
                self.setState({error: "EMAIL ALREADY TAKEN"});
                throw new Meteor.Error("Facebook login failed");
            }
            else if(self.state.error == "EMAIL ALREADY TAKEN"){
                self.setState({error: ""});
            }

            var name = Meteor.user().name;
            var email = Meteor.user().services.facebook.email;
            if(name && email) {
                browserHistory.push(self.getRedirectAddress());
            }
            else browserHistory.push({
                pathname: 'register',
                state: {
                    email: email,
                    redirect: self.getRedirectAddress()
                }
            });
        })

    }

    loginWithPwd(event){
        var self = this;
        Meteor.loginWithPassword({email: this.state.username}, this.state.password, function(err){
            if (err) {
                self.setState({error: "INVALID LOGIN INFO"});
                throw new Meteor.Error("Password login failed");
            }
            else if(self.setState({error: "INVALID LOGIN INFO"})){
                self.setState({error: ""});
            }
            browserHistory.push(self.getRedirectAddress());
        });
        event.preventDefault();
    }

    render(){

        return(
            <div id="loginPage-container">
                <div id="loginPage-section">
                    <h1 id="loginPage-section-title">Revomake Login</h1>
                    <Button className="loginPage-actionButton"
                            onClick = {this.loginWithFacebook}>Login with Facebook</Button>
                    {this.state.error.length > 0 ? <div>{this.state.error}</div> : ""}
                    <form onSubmit={this.loginWithPwd}>
                        <div>
                            <label>Username:</label>
                            <input value = {this.state.username}
                                   onChange = {this.handleChange}
                                   name="username"
                                   id="username"/>
                        </div>
                        <div>
                            <label>Password:</label>
                            <input value = {this.state.password}
                                   onChange = {this.handleChange}
                                   type = "password"
                                   name="password"
                                   id="password"/>
                            <LinkContainer to={"recoverPassword"}>
                                <Button className="loginPage-actionButton">Forgot Password</Button>
                            </LinkContainer>
                        </div>
                        <Button className="loginPage-actionButton" type = 'submit'>Login</Button>
                    </form>
                    <LinkContainer to={
                        {
                            pathname: '/register',
                            state: {
                                redirect: this.getRedirectAddress()
                            }
                        }
                    }>
                        <Button className="loginPage-actionButton">Register</Button>
                    </LinkContainer>
                    <LinkContainer to={this.getRedirectAddress()}>
                        <Button className="loginPage-actionButton">Cancel</Button>
                    </LinkContainer>
                </div>
            </div>
        )
    }
}

export default createContainer(() => {
    Meteor.subscribe('userData');
    return {
        currentUser: Meteor.user(),
    };
}, Login);