/**
 * Created by JohnBae on 6/29/17.
 */

import React, {Component} from 'react';
import {Thumbnail} from 'react-bootstrap'
import {browserHistory} from 'react-router'
import './style.css'

export default class Preview extends Component {

    constructor(props){
        super(props);
        this.state = {
            likes: 0,
            liked: false
        }
    }

    showView(){
        browserHistory.push('/product/'+ this.props.id +'')
    }

    render() {

        var liked = this.state.liked;
        console.log("Designer?", this.props.designer);

        return(
            <div className="preview">
                <div className="preview-portrait">
                    <Thumbnail src={!this.props.designer ? "/assets/mockDesigner.png" : "/assets/mockProduct.png"}
                               onClick={this.showView.bind(this)}
                               className="itemPreview"
                               alt="235x235"/>
                </div>
                <div className="preview-title">
                    <p>{this.props.title}</p>
                    <p>{this.props.designer}</p>
                    <p>{this.props.price}</p>
                    <div className="preview-like">
                        <button className="preview-like-icon"
                                onClick={()=> liked ? this.setState({likes: 0, liked: false})
                                    : this.setState({likes: 1, liked: true})}>
                            <img width="25"
                                 src={liked ? "/assets/liked.png" : "/assets/like.png"}/>
                        </button>
                        {this.state.likes}
                    </div>
                </div>
            </div>
        )
    }
}