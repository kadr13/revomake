/**
 * Created by JohnBae on 4/23/17.
 */
import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import {browserHistory} from 'react-router';

export default class Complete extends Component{
    render(){
        return(
            <div>
                <div>Finished</div>
                <Button onClick = {()=> browserHistory.push(this.props.redirect)}>Complete</Button>
                <Button onClick = {()=> browserHistory.push("/profile")}>Go to Profile</Button>
            </div>
        )
    }
}