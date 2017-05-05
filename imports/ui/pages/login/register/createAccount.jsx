/**
 * Created by JohnBae on 4/23/17.
 */
import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import {browserHistory} from 'react-router';

export default class CreateAccount extends Component{

    constructor(props){
        super(props);
        this.state = {
            email: this.props.email || "",
            validEmail: true,
            username: "",
            validUsername: true,
            password: "",
            confirmPwd: "",
            validPassword: true,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePwd = this.handlePwd.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
    }

    handlePwd(event){
        var self = this;
        this.setState({[event.target.name]: event.target.value}, function(){
            if(this.state.password != this.state.confirmPwd && this.state.confirmPwd.length > 0){
                self.setState({validPwd:  true});
            }
            else {
                self.setState({validPwd:  false});
            }
        });
    }

    handleUsername(event){

        var target = event.target,
            self = this;

        self.setState({username: target.value});
        if(self.state.username.length == 0) self.setState({validUsername: true});

    }

    handleEmail(event){

        var target = event.target,
            self = this;

        self.setState({email: target.value});
        if(self.state.email.length == 0)  self.setState({validEmail: true});
    }

    handleFacebookSubmit(){
        var self = this;
        Meteor.call('checkIfValidAccount',
            this.state.email,
            this.state.username,
            this.state.password,
            this.state.confirmPwd,
            function(err, result){
                if(err){
                    alert("ERROR IN ACCOUNT SUBMISSION");
                }
                if(!result.email) {
                    self.setState({validEmail: false});
                }
                else if(result.email){
                    self.setState({validEmail: true});
                }

                if(!result.username) self.setState({validUsername: false});
                else if(result.username){
                    self.setState({validUsername: true});
                }

                if(!result.password) self.setState({validPassword: false});
                else if(result.password){
                    self.setState({validPassword: true});
                }

                if(result.email && result.username && result.password) {
                    Meteor.call('addEmail', Meteor.userId(), self.state.email);
                    Meteor.call('setUsername', Meteor.userId(), self.state.username);
                    Meteor.call('setPassword', Meteor.userId(), self.state.password, self.state.confirmPwd, false, function(err){
                        if(err){
                            alert("ERROR IN ACCOUNT MODIFICATION");
                        }
                        else browserHistory.push('/register/1');
                    });
                }
            }
        );
    }

    handlePwdSubmit(){
        var self = this;

        Meteor.call('checkIfValidAccount',
            this.state.email,
            this.state.username,
            this.state.password,
            this.state.confirmPwd,
            function(err, result){
                if(err){
                    console.log("ERROR:", err);
                }
                if(!result.email) {
                    self.setState({validEmail: false});
                }
                else if(result.email){
                    self.setState({validEmail: true});
                }

                if(!result.username) self.setState({validUsername: false});
                else if(result.username){
                    self.setState({validUsername: true});
                }

                if(!result.password) self.setState({validPassword: false});
                else if(result.password){
                    self.setState({validPassword: true});
                }

                if(result.email && result.username && result.password) {
                    console.log("ALL PASSED");
                    Meteor.call('createAccount',self.state.email, self.state.username, self.state.password, function(err, result){
                        if(err){
                            console.log("ERROR:", err);
                        }
                        if(result){
                            Meteor.loginWithPassword({email: self.state.email}, self.state.password, function(err){
                                if(!err){
                                    browserHistory.push('/register/1');
                                }
                            });
                        }
                    });
                }
            }
        );
    }

    handleSubmit(event){
        var self = this;
        if(!this.props.email){
            this.handlePwdSubmit();
        }
        else{
            this.handleFacebookSubmit();
        }
        event.preventDefault();
    }

    render(){
        return(
            <div>
                <h1>Create Your Account</h1>
                <form onSubmit = {this.handleSubmit}>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input value={this.state.email}
                               type="email"
                               readOnly = {this.props.email ? true : false}
                               id = "email"
                               onChange={this.handleEmail}
                               name="email"/>
                        {!this.state.validEmail ? <p>Check Email</p> : <div/>}
                    </div>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input value={this.state.username}
                               id = "username"
                               onChange={this.handleUsername}
                               name="username"/>
                        {!this.state.validUsername ? <p>Check Username</p> : <div/>}
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type = "password"
                               value={this.state.password}
                               id = "password"
                               placeholder="At least 6 Characters"
                               onChange={this.handlePwd}
                               name="password"/>
                    </div>
                    <div>
                        <label htmlFor="confirmPwd">Confirm Password:</label>
                        <input type = "password"
                               value={this.state.confirmPwd}
                               id = "confirmPwd"
                               placeholder="At least 6 Characters"
                               onChange={this.handlePwd}
                               name="confirmPwd"/>
                        {!this.state.validPassword ? <p>Check Password</p> : <div/>}
                    </div>
                    <Button type="submit">Create Your Account!</Button>
                </form>
            </div>
        )
    }
}