/**
 * Created by JohnBae on 12/26/16.
 */

import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import {Grid, Row, Col, Thumbnail, Panel, Button} from 'react-bootstrap'
import ProductPreview from '../../components/preview/main.jsx';
import {browserHistory} from 'react-router';
import StdPage from '/imports/ui/components/standardPage/main'

import './style.css';

class Profile extends Component {

    constructor(props){
        super(props);

        this.state = {edit: false};

        this.editProfileImage = this.editProfileImage.bind(this);
        this.editUsername = this.editUsername.bind(this);
        this.editAbout = this.editAbout.bind(this);
        this.confirmEdit = this.confirmEdit.bind(this);
    }

    editProfileImage(event){
        this.setState({edit: true, profile: event.target.value});
    }

    editUsername(){
        this.setState({edit: true, });
    }

    editAbout(){
        this.setState({edit: true});

    }

    confirmEdit(){
        this.setState({edit: false});

    }

    render() {

        if(!this.props.currentUser){
            return (
                <LoginFirst />
            )
        }

        return (
            <StdPage>
                <Grid className="storePage-section">
                    <Row className="storePage-about">
                        <Panel>
                            <Col md={4}>
                                <Thumbnail src={this.props.currentUser.profileImg || "/assets/mockProduct.png"}/>
                            </Col>
                            <Col md={3}>
                                <p>
                                    Name: {this.props.currentUser.name}
                                    <br/>
                                    Subscribers: 14982
                                    <br/>
                                    Items: 2
                                </p>
                            </Col>
                            <Col md={5}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere tellus est, ut pellentesque nisl finibus sit amet. Etiam tempor neque vel nisl fringilla lobortis. In ac condimentum massa. Sed fermentum lorem eu pellentesque viverra. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce auctor quam vel felis faucibus pharetra.
                                </p>
                            </Col>
                        </Panel>
                    </Row>
                    <br/>
                    <Row>
                        <Panel>
                            <Button onClick = {()=> this.refs.fileInput.click()}>Edit Profile Picture</Button>
                            <input ref="fileInput"
                                   type="file"
                                   style={{display:"none"}}
                                   onChange = {this.editProfileImage} />
                            <Button onClick = {this.editUsername}>Edit Username</Button>
                            <Button onClick = {this.editAbout}>Edit About</Button>
                            <Button disabled = {!this.state.edit }
                                    onClick = {this.confirmEdit}>Confirm</Button>
                        </Panel>
                    </Row>
                    <Row >
                        <Panel>
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
                                <button className="storePage-addItem" onClick={()=>browserHistory.push('/submit')}>Add Item</button>
                            </Col>
                        </Panel>
                    </Row>
                </Grid>
            </StdPage>
        );
    }
}

class LoginFirst extends Component{

    render(){
        return (
            <StdPage>
                <Panel>
                    <p> Please Login First!</p>
                </Panel>
            </StdPage>
        )
    }
}

export default createContainer(() => {
    Meteor.subscribe('userData');
    return {
        currentUser: Meteor.user(),
    };
}, Profile);