/**
 * Created by JohnBae on 12/26/16.
 */

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import {Grid, Row, Col, Panel, Jumbotron, Image, Button, FormGroup, FormControl, ControlLabel, Thumbnail} from 'react-bootstrap'
import Scroll from 'react-scroll';
import ProductPreview from '../components/productPreview.jsx';
import DesignerPreview from '../components/designerPreview.jsx'
import {browserHistory} from 'react-router';

class Profile extends Component {



    render() {

        if(!this.props.currentUser){
            return (
                <div className="myStorePage">
                    <Grid fluid className="searchPage-resultView">
                        <Row className="myStorePage-about">
                            <Col>
                                <p> Please Login First!</p>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            )
        }
        console.log(this.props.currentUser);
        console.log(Meteor.user().name);
        return (
            <div className="myStorePage">
                <Grid fluid className="searchPage-resultView">
                    <Row className="myStorePage-about">
                        <Col md={4}>
                            <Thumbnail src="/assets/mockDesigner.png"/>
                        </Col>
                        <Col md={3}>
                            <p>
                                Name: {this.props.currentUser.name}
                                <br/>
                                Subscribers: 14982
                                <br/>
                                Items: 2
                            </p>
                        </Col>
                        <Col md={5}>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere tellus est, ut pellentesque nisl finibus sit amet. Etiam tempor neque vel nisl fringilla lobortis. In ac condimentum massa. Sed fermentum lorem eu pellentesque viverra. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce auctor quam vel felis faucibus pharetra.
                            </p>
                        </Col>
                    </Row>
                    <br/>
                    <Row >
                        <Col md={3}>
                            <ProductPreview title="Mock Product 1" designer="Bob" price="$10.00"/>
                        </Col>
                        <Col md={3}>
                            <ProductPreview title="Mock Product 2" designer="Bob" price="$10.00"/>
                        </Col>
                        <Col md={3}>
                            <ProductPreview title="Mock Product 3" designer="Bob" price="$10.00"/>
                        </Col>
                        <Col md={3}>
                            <button className="myStorePage-addItem" onClick={()=>browserHistory.push('/submit')}>Add Item</button>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default createContainer(() => {
    Meteor.subscribe('userData');
    return {
        currentUser: Meteor.user(),
    };
}, Profile);