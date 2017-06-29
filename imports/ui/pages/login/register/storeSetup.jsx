/**
 * Created by JohnBae on 4/23/17.
 */
import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import {browserHistory} from 'react-router';

export default class StoreSetup extends Component{

    constructor(props){
        super(props);

        Meteor.subscribe('userData');

        var store = Meteor.user().store || "";

        this.state = {
            store: store,
        }
    }

    handleSubmit(event){
        Meteor.call("setStore", this.refs.store.value);
        browserHistory.push("/register/3");
        event.preventDefault();
    }

    render(){
        return(
            <div>
                <h1>Step Three</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div> Name of your store: <input ref = "store" defaultValue={this.state.store}/></div>
                </form>
                <Button onClick = {()=> browserHistory.push("/register/1")}>Previous</Button>
                <Button onClick = {this.handleSubmit.bind(this)}>Finish</Button>
            </div>
        )
    }
}