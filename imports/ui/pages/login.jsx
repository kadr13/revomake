/**
 * Created by JohnBae on 3/29/17.
 */
import { createContainer } from 'meteor/react-meteor-data';

import React, { Component, PropTypes } from 'react';
import Account from '../../ui/components/login.jsx';
import {browserHistory} from 'react-router';

class Login extends Component {

    render() {
        if(this.props.currentUser) {
            browserHistory.goBack();
            return(null);
        }
        return (
            <div id="loginPage-container">
                <div id="loginPage-section">
                    <Account />
                </div>
            </div>
        );
    }
}

export default createContainer(() => {
    return {
        currentUser: Meteor.user(),
    };
}, Login);