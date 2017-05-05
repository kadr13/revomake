/**
 * Created by JohnBae on 3/8/17.
 */

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col, Panel, Jumbotron, Image, Button, FormGroup, FormControl, ControlLabel, Thumbnail} from 'react-bootstrap'
import Scroll from 'react-scroll';
import ProductPreview from '../../components/productPreview.jsx';
import DesignerPreview from '../../components/designerPreview.jsx'

export default class App extends Component {

    render() {
        return (
            <div className="productPage">
                <div className="productPage-mainView">
                    <Grid fluid>
                        <Row>
                            <Image src="/assets/mockProduct.png"/>
                        </Row>
                        <br/>
                        <Row>

                        </Row>
                    </Grid>
                </div>
                <div className="productPage-sideView">
                    <label>Name: <input placeholder="Item Name"/></label>
                    <Button>Upload File</Button>
                    <label>Price: <input placeholder="Price"/></label>
                    <textarea placeholder="Add tags"></textarea>
                    <textarea placeholder="Description"></textarea>
                    <Button>SUBMIT</Button>
                </div>
            </div>
        );
    }
}