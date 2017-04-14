/**
 * Created by JohnBae on 4/05/17.
 */

import React, { Component } from 'react';
import Register from '../components/register';
import { Accounts } from 'meteor/accounts-base';
import {Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import { Router, Route, Link, browserHistory, IndexRedirect} from 'react-router'

export default class Login extends Component{

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
    }

    getRedirectAddress(){
        var redirect = this.props.location.state ? this.props.location.state.redirect : "/home";
        if(redirect=="/login") redirect = "/home";
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
            }8

            var name = Meteor.user().services.facebook.name;
            var email = Meteor.user().services.facebook.email;

            if(Meteor.user().username) {
                browserHistory.push(self.getRedirectAddress())
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
                console.log("ERR:", err);
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
                    <Button onClick = {this.loginWithFacebook}>Login with Facebook</Button>
                    {this.state.error.length > 0 ? <div>{this.state.error}</div> : null}
                    <form onSubmit={this.loginWithPwd}>
                        <div>
                            <label>Email:</label>
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
                        </div>
                        <Button type = 'submit'>Login</Button>
                    </form>
                    <LinkContainer to={
                    {
                        pathname: '/register',
                        state: {
                            redirect: this.getRedirectAddress()
                        }
                    }
                    }>
                        <Button>Register</Button>
                    </LinkContainer>
                </div>
            </div>
        )
    }
}