/**
 * Created by JohnBae on 12/26/16.
 */

import React, { Component } from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import Feed from './feed.jsx';
import Trending from './trending.jsx';
import Designer from './designer.jsx';
import {LinkContainer} from 'react-router-bootstrap';

import './style.css';

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
        console.log("Handling Type Change:", type);
        switch(type){
            case "designers" : this.setState({type: "designers"});
                break;
            case "trending" : this.setState({type: "trending"});
                break;
            case "feed" : this.setState({type: "feed"});
                break;
            default : console.log("Error: Unknown Type")
        }
    }

    render() {

        var component = this.props.params.component;
        var loggedIn = Meteor.user();

        var Content;

        switch(component){
            case "feed":
                loggedIn ? Content = Feed : Content = Trending;
                break;
            case "trending":
                Content = Trending;
                break;
            case "designers":
                Content = Designer;
                break;
            default : loggedIn ? Content = Feed : Content = Trending;
        }

        return (
            <div className="homePage">
                <Grid fluid>
                    <Row >
                        <div className="homePage-showBy-bar">
                            <LinkContainer to="/home/feed">
                                <Button className="homePage-showBy-button"
                                   onClick={()=> this.handleTypeChange("feed")}>Feed</Button>
                            </LinkContainer>
                            <LinkContainer to="/home/trending">
                                <Button className="homePage-showBy-button"
                                   onClick={()=> this.handleTypeChange("trending")}>Trending</Button>
                            </LinkContainer>
                            <LinkContainer to="/home/designers">
                                <Button className="homePage-showBy-button"
                                   onClick={()=> this.handleTypeChange("designers")}>Designers</Button>
                            </LinkContainer>
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