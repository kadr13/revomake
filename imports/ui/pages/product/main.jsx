/**
 * Created by JohnBae on 3/8/17.
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col, Panel, Thumbnail, Image, Button} from 'react-bootstrap'
import "./style.css";

export default class ProductPreview extends Component {

    componentDidMount(){

    }

    render() {

        var id = this.props.routeParams.id;

        return(
            <div className="productPage">
                <div className="productPage-mainView">
                    <Grid fluid>
                        <Row>
                            <Col md={8}>
                                <Row>
                                    <Image style={{width: "75%", marginLeft: "12.5%", marginRight: "12.5%"}} src="/assets/mockProduct.png"/>
                                </Row>
                                <br/>
                                <Row>
                                    <div className="productPage-reviews">
                                        <h1 className="productPage-reviews-title">Reviews</h1>
                                        <br/>
                                        <br/>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae mattis massa, non varius sem. Fusce blandit molestie ligula eget congue. Sed erat ligula, fermentum a risus sit amet, egestas consequat tellus. Pellentesque vitae lacus imperdiet, tempus dui vel, bibendum lorem. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi.
                                        </p>
                                        <br/>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae mattis massa, non varius sem. Fusce blandit molestie ligula eget congue. Sed erat ligula, fermentum a risus sit amet, egestas consequat tellus. Pellentesque vitae lacus imperdiet, tempus dui vel, bibendum lorem. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi.
                                        </p>
                                        <br/>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae mattis massa, non varius sem. Fusce blandit molestie ligula eget congue. Sed erat ligula, fermentum a risus sit amet, egestas consequat tellus. Pellentesque vitae lacus imperdiet, tempus dui vel, bibendum lorem. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi.
                                        </p>
                                    </div>
                                </Row>
                            </Col>
                            <Col md={4}>
                                <div className="productPage-sideView">
                                    <h1 className="productPage-item">Item Name</h1>
                                    <Thumbnail src="/assets/mockProduct.png"/>
                                    <h1 className="productPage-designer">Designer Name</h1>
                                    <br/>
                                    <h1 className="productPage-price">Price</h1>
                                    <Button className="productPage-action">Add to Cart</Button>
                                    <Button className="productPage-action">Purchase</Button>
                                    <br/>
                                    <br/>
                                    <div>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae mattis massa, non varius sem. Fusce blandit molestie ligula eget congue. Sed erat ligula, fermentum a risus sit amet, egestas consequat tellus. Pellentesque vitae lacus imperdiet, tempus dui vel, bibendum lorem. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        )
    }
}