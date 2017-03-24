/**
 * Created by JohnBae on 12/26/16.
 */

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col, Panel, Jumbotron, Image, Button, FormGroup, FormControl, ControlLabel, HelpBlock} from 'react-bootstrap'
import Scroll from 'react-scroll';
import ProductPreview from '../components/productPreview.jsx';
import DesignerPreview from '../components/designerPreview.jsx'

var key = 0;

export default class Home extends Component {

    constructor(props){
        super(props);

        this.state = ({
            type: "feed",
            products: 1
        })

        this.handleTypeChange = this.handleTypeChange.bind(this);
    }

    handleTypeChange(type){
        console.log("Handling Type Change");
        switch(type){
            case "designers" : this.setState({type: "designers"});
                console.log("setting type to designers");
                break;
            case "subscription" : this.setState({type: "subscription"});
                console.log("setting type to subscription");
                break;
            case "feed" : this.setState({type: "feed"});
                console.log("setting type to feed");
                break;
            default : console.log("Error: Unknown Type")
        }
    }

    loadMoreProducts(protocol){

        console.log("SCROLLING: ",);
        this.setState({products: ++this.state.products}, function(){
            Scroll.animateScroll.scrollTo(500);
        });
    }

    render() {

        console.log(this);

        var Content;

        switch(this.state.type){
            case "feed":
                Content = FeedView;
                break;
            case "subscription":
                Content = SubscribeView;
                break;
            case "designers":
                Content = DesignerView;
                break;
            default : Content = null;
        }

        return (
            <div className="homePage">
                <Grid fluid>
                    <Row >
                        <div className="homePage-showBy-bar">
                            <a className="homePage-showBy-text" onClick={()=> this.handleTypeChange("designers")}>Designers</a>
                            <a className="homePage-showBy-text" onClick={()=> this.handleTypeChange("subscription")}>Subscription</a>
                            <a className="homePage-showBy-text" onClick={()=> this.handleTypeChange("feed")}>Feed</a>
                        </div>
                    </Row>
                </Grid>
                <div className="homePage-content">
                    <Content/>
                </div>
            </div>
        );
    }
}

class FeedView extends Component {

    render(){
        return(
            <Grid fluid>
                <Row>
                    <h1>Featured</h1>
                </Row>
                <Row >
                    <Col md={3}>
                        <ProductPreview title="Mock Product 1" designer="Bob" price="$10.00" id="1"/>
                    </Col>
                    <Col md={3}>
                        <ProductPreview title="Mock Product 2" designer="Bob" price="$10.00" id="2"/>
                    </Col>
                    <Col md={3}>
                        <ProductPreview title="Mock Product 3" designer="Bob" price="$10.00" id="3"/>
                    </Col>
                    <Col md={3}>
                        <ProductPreview title="Mock Product 4" designer="Bob" price="$10.00" id="4"/>
                    </Col>
                </Row>
                <Row>
                    <h1>Trending</h1>
                </Row>
                <Row >
                    <Col md={3}>
                        <ProductPreview title="Mock Product 1" designer="Bob" price="$10.00" id="1"/>
                    </Col>
                    <Col md={3}>
                        <ProductPreview title="Mock Product 2" designer="Bob" price="$10.00" id="2"/>
                    </Col>
                    <Col md={3}>
                        <ProductPreview title="Mock Product 3" designer="Bob" price="$10.00" id="3"/>
                    </Col>
                    <Col md={3}>
                        <ProductPreview title="Mock Product 4" designer="Bob" price="$10.00" id="4"/>
                    </Col>
                </Row>
                <Row>
                    <h1>Free</h1>
                </Row>
                <Row >
                    <Col md={3}>
                        <ProductPreview title="Mock Product 1" designer="Bob" price="$10.00" id="1"/>
                    </Col>
                    <Col md={3}>
                        <ProductPreview title="Mock Product 2" designer="Bob" price="$10.00" id="2"/>
                    </Col>
                    <Col md={3}>
                        <ProductPreview title="Mock Product 3" designer="Bob" price="$10.00" id="3"/>
                    </Col>
                    <Col md={3}>
                        <ProductPreview title="Mock Product 4" designer="Bob" price="$10.00" id="4"/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

class SubscribeView extends Component {

    render(){
        return(
            <Grid fluid>
                <Row >
                    <Col md={3}>
                        <DesignerPreview title="Subscribed Designer 1"  id="1"/>
                    </Col>
                    <Col md={3}>
                        <DesignerPreview title="Subscribed Designer 2"  id="2"/>
                    </Col>
                    <Col md={3}>
                        <DesignerPreview title="Subscribed Designer 3"  id="3"/>
                    </Col>
                    <Col md={3}>
                        <DesignerPreview title="Subscribed Designer 4"  id="4"/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

class DesignerView extends Component {

    render(){
        return(
            <Grid fluid>
                <Row >
                    <Col md={3}>
                        <DesignerPreview title="Mock Designer 1" id="1"/>
                    </Col>
                    <Col md={3}>
                        <DesignerPreview title="Mock Designer 2" id="2"/>
                    </Col>
                    <Col md={3}>
                        <DesignerPreview title="Mock Designer 3" id="3"/>
                    </Col>
                    <Col md={3}>
                        <DesignerPreview title="Mock Designer 4" id="4"/>
                    </Col>
                </Row>
                <Row >
                    <Col md={3}>
                        <DesignerPreview title="Mock Designer 1" id="1"/>
                    </Col>
                    <Col md={3}>
                        <DesignerPreview title="Mock Designer 2" id="2"/>
                    </Col>
                    <Col md={3}>
                        <DesignerPreview title="Mock Designer 3" id="3"/>
                    </Col>
                    <Col md={3}>
                        <DesignerPreview title="Mock Designer 4" id="4"/>
                    </Col>
                </Row>
                <Row >
                    <Col md={3}>
                        <DesignerPreview title="Mock Designer 1" id="1"/>
                    </Col>
                    <Col md={3}>
                        <DesignerPreview title="Mock Designer 2" id="2"/>
                    </Col>
                    <Col md={3}>
                        <DesignerPreview title="Mock Designer 3" id="3"/>
                    </Col>
                    <Col md={3}>
                        <DesignerPreview title="Mock Designer 4" id="4"/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}