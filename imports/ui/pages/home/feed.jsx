/**
 * Created by JohnBae on 6/29/17.
 */

import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap'
import ProductPreview from '../../components/preview/main.jsx';

var key = 0;

export default class FeedView extends Component {

    render(){

        console.log("FEED");

        return(
            <Grid fluid>
                <Row>
                    <h1 className="homePage-section-title">Featured</h1>
                </Row>
                <Row className="homePage-section">
                    <Col md={4}>
                        <ProductPreview title="Mock Product 1" designer="Bob" price="$10.00" id="1"/>
                    </Col>
                    <Col md={4}>
                        <ProductPreview title="Mock Product 2" designer="Bob" price="$10.00" id="2"/>
                    </Col>
                    <Col md={4}>
                        <ProductPreview title="Mock Product 3" designer="Bob" price="$10.00" id="3"/>
                    </Col>
                </Row>
                <Row>
                    <h1 className="homePage-section-title">Trending</h1>
                </Row>
                <Row className="homePage-section">
                    <Col md={4}>
                        <ProductPreview title="Mock Product 1" designer="Bob" price="$10.00" id="1"/>
                    </Col>
                    <Col md={4}>
                        <ProductPreview title="Mock Product 2" designer="Bob" price="$10.00" id="2"/>
                    </Col>
                    <Col md={4}>
                        <ProductPreview title="Mock Product 3" designer="Bob" price="$10.00" id="3"/>
                    </Col>
                </Row>
                <Row>
                    <h1 className="homePage-section-title">Free</h1>
                </Row>
                <Row className="homePage-section">
                    <Col md={4}>
                        <ProductPreview title="Mock Product 1" designer="Bob" price="$10.00" id="1"/>
                    </Col>
                    <Col md={4}>
                        <ProductPreview title="Mock Product 2" designer="Bob" price="$10.00" id="2"/>
                    </Col>
                    <Col md={4}>
                        <ProductPreview title="Mock Product 3" designer="Bob" price="$10.00" id="3"/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}


