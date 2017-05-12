/**
 * Created by JohnBae on 4/23/17.
 */
import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import {browserHistory} from 'react-router';

export default class StoreSetup extends Component{

    handleSubmit(event){
        event.preventDefault();
    }

    render(){
        return(
            <div>
                <h1>Step Three</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div> Name of your store: <input /></div>
                </form>
                <Button onClick = {()=> browserHistory.push("/register/1")}>Previous</Button>
                <Button onClick = {()=> browserHistory.push("/register/3")}>Finish</Button>
            </div>
        )
    }
}