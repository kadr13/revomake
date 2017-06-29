/**
 * Created by JohnBae on 3/29/17.
 */
import React, { Component } from 'react';
import CreateAccount from './createAccount';
import BasicInfo from './basicInfo';
import StoreSetup from './storeSetup';
import Completed from './complete';
import { browserHistory } from 'react-router'

import './style.css';

export default class Register extends Component{

    constructor(props){
        super(props);

        this.handleCrumb = this.handleCrumb.bind(this);
    }

    handleCrumb(step){
        browserHistory.push("/register/"+step);
    }

    render(){
        var step = this.props.params.step;
        var loggedIn = Meteor.user();

        if(step == undefined || !loggedIn) step = "0";

        var stepContainer;
        switch(step){
            case "0" || undefined:
                var email = this.props.location.state ? this.props.location.state.email : "";
                stepContainer = <CreateAccount email = {email}/>;
                break;
            case "1" :
                stepContainer = <BasicInfo redirect = {this.props.location.state ? this.props.location.state.redirect : "/home"}/>;
                break;
            case "2" :
                stepContainer = <StoreSetup />;
                break;
            case "3" :
                stepContainer = <Completed redirect = {this.props.location.state ? this.props.location.state.redirect : "/home"}/>;
                break;
            default : stepContainer = <div>SOMETHING FAILED...</div>
        }

        return(
            <div id="loginPage-container">
                <div id="loginPage-section">
                    <div id="loginPage-breadcrumb">
                        <button className={step!=0 ? "loginPage-breadcrumb-pinnedCrumb" : "loginPage-breadcrumb-currentCrumb"}
                                disabled="true"/>
                        <button className={step!=1 ? "loginPage-breadcrumb-crumb" : "loginPage-breadcrumb-currentCrumb"}
                                disabled={step == 0}
                                onClick = {()=>this.handleCrumb(1)}/>
                        <button className={step!=2 ? "loginPage-breadcrumb-crumb" : "loginPage-breadcrumb-currentCrumb"}
                                disabled={step == 0}
                                onClick = {()=>this.handleCrumb(2)}/>
                        <button className={step!=3 ? "loginPage-breadcrumb-crumb" : "loginPage-breadcrumb-currentCrumb"}
                                disabled={step == 0}
                                onClick = {()=>this.handleCrumb(3)}/>
                    </div>
                    {stepContainer}
                </div>
            </div>
        )
    }
}