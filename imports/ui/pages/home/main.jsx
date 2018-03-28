/**
 * Created by JohnBae on 12/26/16.
 */

import React, { Component } from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import Feed from './feed.jsx';
import Trending from './trending.jsx';
import Designer from './designer.jsx';
import {LinkContainer} from 'react-router-bootstrap';
import { createContainer } from 'meteor/react-meteor-data';
import { Router, Route, matchPath} from 'react-router'

import './style.css';

var key = 0;

class Home extends Component {

    constructor(props){

        var match = props.match;
        const matchTest = matchPath(props.location.pathname, {
            path: `${match.url}/:id`
        });

        console.log(match, matchTest);

        if(!matchTest || !matchTest.params.id){
            console.log("Bare");
            if(Meteor.user()) {
                console.log("Bare 1");
                props.location.pathname = "/home/feed";
            }
            else {
                console.log("Bare 2");
                props.location.pathname = "/home/trending";
            }
        }

        if(matchTest && matchTest.id == "feed" && !Meteor.user()){
            console.log("unauthorized");
            props.location.pathname = "/home/trending";
        }
        console.log("HOME:", props.location.pathname);
        super(props);

        this.state = ({
            type: "feed",
            products: 1
        });

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

    componentWillMount(){
        console.log("GENESIS");

        var match = this.props.match;
        const matchTest = matchPath(this.props.location.pathname, {
            path: `${match.url}/:id`
        });

        if(!matchTest || !matchTest.params.id){
            console.log("bare");
            if(Meteor.user()) this.props.history.push('/home/feed');
            else this.props.history.push('/home/trending');
        }

        if(matchTest && matchTest.id == "feed" && !Meteor.user()){
            console.log("unauthorized");
            this.props.history.push('/home/trending');
        }
    }

    componentWillReceiveProps(props){

        console.log("SENTRY");

        var match = props.match;
        const matchTest = matchPath(props.location.pathname, {
            path: `${match.url}/:id`
        });

        if(!matchTest || !matchTest.params.id){
            console.log("bare");
            if(Meteor.user()) props.history.push('/home/feed');
            else props.history.push('/home/trending');
        }

        if(matchTest && matchTest.id == "feed" && !Meteor.user()){
            console.log("unauthorized");
            props.history.push('/home/trending');
        }
    }

    render() {

        var match = this.props.match;

        console.log(match);

        return (
            <div className="homePage">
                <Grid fluid>
                    <Row >
                        <div className="homePage-showBy-bar">
                            {this.props.currentUser ? <LinkContainer to="/home/feed">
                                <Button className="homePage-showBy-button"
                                   onClick={()=> this.handleTypeChange("feed")}>Feed</Button>
                            </LinkContainer> : ""}
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
                <Route path={`${match.url}/:id`} component={Content} />
            </div>
        );
    }
}

class Content extends Component{

    constructor(props){
        super(props)
    }

    render(){

        var Content;

        var id = this.props.match.params.id;

        switch(id){
            case "feed":
                Content = Feed
                break;
            case "trending":
                Content = Trending;
                break;
            case "designers":
                Content = Designer;
                break;
            default : Content = Trending
        }

        console.log("Initializing:", id);

        return(
            <div>
                <Route path={'/home/:id'} component={Content} />
            </div>
        )
    }
}

export default createContainer(() => {
    return {
        currentUser: Meteor.user(),
    };
}, Home);