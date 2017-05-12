/**
 * Created by JohnBae on 4/12/17.
 */

import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import {Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import { browserHistory } from 'react-router'

export default class RecoverPassword extends Component{

    constructor(props){
        super(props);
        this.state = {
            error: "",
            email: ""
        };
        this.handleEmailEdit = this.handleEmailEdit.bind(this);
    }

    sendEmail(){

    }

    handleEmailEdit(event){
        var email = event.target.value;
        this.setState({email: email});
    }

    render(){

        return(
            <div id="loginPage-container">
                <div id="loginPage-section">
                    <form onSubmit={this.loginWithPwd}>
                        <div>
                            <label>Email:</label>
                            <input value = {this.state.email}
                                   onChange = {this.handleEmailEdit}
                                   name="email"/>
                        </div>
                        <Button type = 'submit'>Send</Button>
                        <LinkContainer to={"login"}>
                            <Button>Cancel</Button>
                        </LinkContainer>
                    </form>
                </div>
            </div>
        )
    }
}