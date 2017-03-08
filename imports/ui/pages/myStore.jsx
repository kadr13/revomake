/**
 * Created by JohnBae on 12/26/16.
 */

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col, Panel, Jumbotron, Image, Button, FormGroup, FormControl, ControlLabel, HelpBlock} from 'react-bootstrap'
import Scroll from 'react-scroll';
import ProductPreview from '../components/productPreview.jsx';
import DesignerPreview from '../components/designerPreview.jsx'

export default class App extends Component {

    render() {
        return (
            <div className="myStorePage">
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
            </div>
        );
    }
}