/**
 * Created by JohnBae on 2/9/17.
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Thumbnail} from 'react-bootstrap'
import {browserHistory} from 'react-router'

export default class ProductPreview extends Component {

    showView(){
        browserHistory.push('/product/'+ this.props.id +'')
    }

    render() {
        return(
            <div className="productPreview">
                <div className="productPreview-portrait">
                    <Thumbnail src="/assets/mockProduct.png"
                               onClick={this.showView.bind(this)}
                               className="itemPreview"
                               alt="235x235"/>
                </div>
                <div className="productPreview-title">
                    <div>{this.props.title}</div>
                    <div>{this.props.designer}</div>
                    <div>{this.props.price}</div>
                </div>
            </div>
        )
    }
}