/**
 * Created by JohnBae on 6/29/17.
 */

import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap'
import ProductPreview from '../../components/preview/main.jsx';

export default class TrendingView extends Component {

    render(){

        console.log("TRENDING");

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
                        <ProductPreview title="Mock Product 1" designer="Bob" price="$10.00" id="4"/>
                    </Col>
                    <Col md={4}>
                        <ProductPreview title="Mock Product 2" designer="Bob" price="$10.00" id="5"/>
                    </Col>
                    <Col md={4}>
                        <ProductPreview title="Mock Product 3" designer="Bob" price="$10.00" id="6"/>
                    </Col>
                </Row>
                <Row>
                    <h1 className="homePage-section-title">Free</h1>
                </Row>
                <Row className="homePage-section">
                    <Col md={4}>
                        <ProductPreview title="Mock Product 1" designer="Bob" price="$10.00" id="7"/>
                    </Col>
                    <Col md={4}>
                        <ProductPreview title="Mock Product 2" designer="Bob" price="$10.00" id="8"/>
                    </Col>
                    <Col md={4}>
                        <ProductPreview title="Mock Product 3" designer="Bob" price="$10.00" id="9"/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}