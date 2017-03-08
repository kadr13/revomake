
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col, Panel, Jumbotron, Image, Button, FormGroup, Checkbox, MenuItem, DropdownButton} from 'react-bootstrap'
import Scroll from 'react-scroll';
import ProductPreview from '../components/productPreview.jsx';
import DesignerPreview from '../components/designerPreview.jsx'

export default class Buffer extends Component {

    componentDidMount(){

    }

    render() {
       return(
       <div className="searchPage">
           <Grid fluid className="searchPage-resultView">
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
               </Row>
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
               </Row>
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
               </Row>
           </Grid>
           <div className="searchPage-searchTool">
               <h1>Search Option</h1>
               <input placeholder="description"/>
               <FormGroup>
                   <Checkbox inline>
                       Input
                   </Checkbox>
                   {' '}
                   <Checkbox inline>
                       Tags
                   </Checkbox>
                   {' '}
                   <Checkbox inline>
                       Designer
                   </Checkbox>
               </FormGroup>
               <h1>Price Range</h1>
               <input placeholder="from"/>
               <input placeholder="to"/>
               <h1>File Size</h1>
               <input placeholder="from"/>
               <input placeholder="to"/>
               <DropdownButton title="Print Type">
                   <MenuItem eventKey="1">A</MenuItem>
                   <MenuItem eventKey="2">B</MenuItem>
               </DropdownButton>
               <button>Search</button>
           </div>
       </div>
       )
    }
}