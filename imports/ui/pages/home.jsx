/**
 * Created by JohnBae on 12/26/16.
 */

import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col, Panel, Jumbotron, Image, Button, FormGroup, FormControl, ControlLabel, HelpBlock} from 'react-bootstrap'
import Scroll from 'react-scroll';
import ProductPreview from '../components/productPreview.jsx';

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

        var products = [],
            iteration = this.state.products;

        while(iteration-->0){
            products.push(<ProductsView key = {key++}/> );

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
                <div className="homePage-products">
                    <h1><div>FEATURED</div></h1>
                    {products}
                    <h1><div>TRENDING</div></h1>
                    {products}
                    <h1><div>FREE PRODUCTS</div></h1>
                    {products}
                </div>
            </div>
        );
    }
}

class ProductsView extends Component {

    render(){
        return(
            <Grid fluid>
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
                        <ProductPreview title="Mock Product 4" designer="Bob" price="$10.00"/>
                    </Col>
                </Row>
            </Grid>
        );
    }
}