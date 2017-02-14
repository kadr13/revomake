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
            type: "trending",
            products: 1
        })

        this.handleTypeChange = this.handleTypeChange.bind(this);
    }

    handleTypeChange(type){
        console.log("Handling Type Change");
        switch(type){
            case "trending" : this.setState({type: "trending"});
                console.log("setting type to trending");
                break;
            case "curated" : this.setState({type: "curated"});
                console.log("setting type to curated");
                break;
            case "subscribed" : this.setState({type: "subscribed"});
                console.log("setting type to subscribed");
                break;
            case "designers" : this.setState({type: "designers"});
                console.log("setting type to designers");
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
                            <a className="homePage-showBy-text" onClick={()=> this.handleTypeChange("curated")}>Curated</a>
                            <a className="homePage-showBy-text" onClick={()=> this.handleTypeChange("trending")}>Trending</a>
                            <a className="homePage-showBy-text" onClick={()=> this.handleTypeChange("subscribed")}>Subscribed</a>
                            <a className="homePage-showBy-text" onClick={()=> this.handleTypeChange("designers")}>Designers</a>
                        </div>
                    </Row>
                </Grid>
                <div className="homePage-products">
                    <h1><div>Popular</div></h1>
                    {products}
                    <h1><div>Fresh</div></h1>
                    {products}
                    <h1><div>Free Products</div></h1>
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