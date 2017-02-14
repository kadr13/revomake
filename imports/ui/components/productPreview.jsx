/**
 * Created by JohnBae on 2/9/17.
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col, Panel, Jumbotron, Image, Button, FormGroup, FormControl, ControlLabel, HelpBlock, Thumbnail} from 'react-bootstrap'

export default class ProductPreview extends Component {

    componentDidMount(){

    }

    render() {
        return(
            <div className="productPreview">
                <div className="productPreview-portrait">
                    <Thumbnail src="/assets/save.png" alt="242x200"/>
                </div>
                <div className="productPreview-title">
                    <div>{this.props.title}</div>
                    <div>{this.props.designer}</div>
                    <div>{this.props.price}</div>
                </div>
            </div>
        )
    }
}