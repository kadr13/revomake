/**
 * Created by JohnBae on 6/29/17.
 */

import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap'
import DesignerPreview from '../../components/preview/main.jsx'

var key = 0;

export default class DesignerView extends Component {

    render(){
        return(
            <Grid fluid>
                <Row >
                    <Col md={4}>
                        <DesignerPreview title="Mock Designer 1" id="1"/>
                    </Col>
                    <Col md={4}>
                        <DesignerPreview title="Mock Designer 2" id="2"/>
                    </Col>
                    <Col md={4}>
                        <DesignerPreview title="Mock Designer 3" id="3"/>
                    </Col>
                </Row>
                <Row >
                    <Col md={4}>
                        <DesignerPreview title="Mock Designer 1" id="1"/>
                    </Col>
                    <Col md={4}>
                        <DesignerPreview title="Mock Designer 2" id="2"/>
                    </Col>
                    <Col md={4}>
                        <DesignerPreview title="Mock Designer 3" id="3"/>
                    </Col>
                </Row>
                <Row >
                    <Col md={4}>
                        <DesignerPreview title="Mock Designer 1" id="1"/>
                    </Col>
                    <Col md={4}>
                        <DesignerPreview title="Mock Designer 2" id="2"/>
                    </Col>
                    <Col md={4}>
                        <DesignerPreview title="Mock Designer 3" id="3"/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}