/**
 * Created by JohnBae on 3/8/17.
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col, Panel, Thumbnail, Image, Button} from 'react-bootstrap'

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
                            <Image src="/assets/mockProduct.png"/>
                        </Row>
                        <br/>
                        <Row>
                            <div className="productpage-reviews">
                                <h1>Reviews</h1>
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
                    </Grid>
                </div>
                <div className="productPage-sideView">
                    <h1>Item Name</h1>
                    <Thumbnail src="/assets/mockProduct.png"/>
                    <h1>Designer Name</h1>
                    <br/>
                    <h1>Price</h1>
                    <Button>Add to Cart</Button>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae mattis massa, non varius sem. Fusce blandit molestie ligula eget congue. Sed erat ligula, fermentum a risus sit amet, egestas consequat tellus. Pellentesque vitae lacus imperdiet, tempus dui vel, bibendum lorem. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla facilisi.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}