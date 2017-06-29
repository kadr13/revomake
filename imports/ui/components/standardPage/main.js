/**
 * Created by JohnBae on 5/6/17.
 */

import React, { Component } from 'react';

import './style.css';

export default class StandardPage extends Component {

    render() {
        return(
            <div className="standardPage-container">
                <div className="standardPage-section">
                    {this.props.children}
                </div>
            </div>
        )
    }
}