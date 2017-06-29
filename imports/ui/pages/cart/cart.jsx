/**
 * Created by JohnBae on 12/26/16.
 */

import React, { Component, PropTypes } from 'react';
import {Grid, Row, Col, Panel, Jumbotron, Image, Button, FormGroup, FormControl, ControlLabel, HelpBlock} from 'react-bootstrap'
import ProductPreview from '../../components/preview/main.jsx';

import './cart.css';

export default class App extends Component {

    render() {
        return (
            <div className="searchPage">
                <Grid fluid className="searchPage-resultView">
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
                    </Row>
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
                    </Row>
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
                    </Row>
                </Grid>
                <div className="searchPage-searchTool">
                    <h1>Items: 3</h1>
                    <br/>
                    <h1>Total Cost: $19.99</h1>
                    <br/><br/><br/><br/><br/>
                    <Button>Purchase</Button>
                </div>
            </div>
        );
    }
}