/**
 * Created by JohnBae on 3/29/17.
 */
import { Meteor } from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import {browserHistory} from 'react-router';
import ReactDOM from 'react-dom';
import { Prompt, BrowserRouter } from 'react-router-dom'

export default class Login extends Component{

    constructor(props){
        super(props);
        this.updateForm = this.updateForm.bind(this);
    }

    updateForm(key, value){
        this.setState({[key]: value});
    }

    render(){
        var step = this.props.params.step;
        if(step == undefined) step = "0";

        var stepContainer;
        switch(step){
            case "0" || undefined:
                console.log(this.props);
                var email = this.props.location.state ? this.props.location.state.email : "";
                stepContainer = <StepOne email = {email}/>;
                break;
            case "1" :
                stepContainer = <StepTwo redirect = {this.props.location.state ? this.props.location.state.redirect : "/home"}/>;
                break;
            case "2" :
                stepContainer = <StepThree {...this.props}/>;
                break;
            case "3" :
                stepContainer = <Finish {...this.props}/>;
                break;
            default : stepContainer = <div>SOMETHING FAILED...</div>
        }

        return(
            <div id="loginPage-container">
                <div id="loginPage-section">
                    {stepContainer}
                </div>
            </div>
        )
    }
}

class StepOne extends Component{

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
        this.handleChange = this.handleChange.bind(this);

        this.handleUsername = this.handleUsername.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleConfirmPwd = this.handleConfirmPwd.bind(this);
    }

    handleChange(event){
        var self = this;
        this.setState({[event.target.name]: event.target.value}, function(){
            console.log(this.state.password, " vs ", this.state.confirmPwd);
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

    verifyUsername(){
        Meteor.call("checkIfUsernameExists", target.value, function(err, result){
            if(err){
                alert('There is an error while checking username');
            }
            else{
                if(result){
                    self.setState({validUsername: false});
                }
                else{
                    self.setState({validUsername: true});
                }
            }
        });
    }

    handleEmail(event){

        var target = event.target,
            self = this;

        self.setState({email: target.value});
        if(self.state.email.length == 0)  self.setState({validEmail: true});
    }

    verifyEmail(){
        Meteor.call("checkIfEmailExists", event.target.value, function(err, result){
            if(err){
                alert('There is an error while checking email');
            }
            else{
                if(result){
                    self.setState({validEmail: false});
                }
                else{
                    self.setState({validEmail: true});
                }
            }
        });
    }

    handlePassword(event){

    }

    handleConfirmPwd(event){

    }

    handleSubmit(event){
        var self = this;
        if(!this.props.email){
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
                                browserHistory.push('/register/1');
                            }
                        });
                    }
                }
            );
        }
        else{
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
                               onChange={this.handleChange}
                               name="password"/>
                    </div>
                    <div>
                        <label htmlFor="confirmPwd">Confirm Password:</label>
                        <input type = "password"
                               value={this.state.confirmPwd}
                               id = "confirmPwd"
                               placeholder="At least 6 Characters"
                               onChange={this.handleChange}
                               name="confirmPwd"/>
                        {!this.state.validPassword ? <p>Check Password</p> : <div/>}
                    </div>
                    <button type="submit">Create Your Account!</button>
                </form>
            </div>
        )
    }
}

class StepTwo extends Component{
    render(){
        return(
            <div>
                <h1>Customize your account</h1>
                <p>You can come back to this later!</p>
                <form>
                    <div> Profile Picture: <image /></div>
                    <div> Basic Info: <textare /></div>
                </form>
                <Button onClick = {()=> browserHistory.push(this.props.redirect)}>Cancel</Button>
                <Button onClick = {()=> browserHistory.push("/register/2")}>Next</Button>
            </div>
        )
    }
}

class StepThree extends Component{
    render(){
        return(
            <div>
                <h1>Step Three</h1>
                <form>
                    <div> Store: <input /></div>
                </form>
                <Button onClick = {()=> browserHistory.push("/register/1")}>Previous</Button>
                <Button onClick = {()=> browserHistory.push("/register/3")}>Finish</Button>
            </div>
        )
    }
}

class Finish extends Component{
    render(){
        return(
            <div>
                <div>Finished</div>
                <Button onClick = {()=> browserHistory.push("/register/0")}>Start Over</Button>
            </div>
        )
    }
}