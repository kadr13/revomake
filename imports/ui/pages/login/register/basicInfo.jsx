/**
 * Created by JohnBae on 4/23/17.
 */
import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import {browserHistory} from 'react-router';


export default class BasicInfo extends Component{

    constructor(props){
        super(props);

        Meteor.subscribe('userData');

        var profile = Meteor.user().profileImg || null,
            about = Meteor.user().about || null;

        this.state = {
            profile: profile,
            about: about
        }
    }

    uploadProfile(){
        var uploader = new Slingshot.Upload("myFileUploads"),
            self = this;

        if(this.state.profile){
            uploader.send(input.files[0], function (error, downloadUrl) {
                if (error) {
                    console.error('Error uploading', uploader.xhr.response);
                    alert (error);
                }
                else {
                    Meteor.call("setAboutText", self.refs.about.value);
                    Meteor.call("setProfileImg", downloadUrl)
                    browserHistory.push("/register/2")
                }
            });
        }
        else {
            if(self.refs.about.value) Meteor.call("setAboutText", self.refs.about.value);
            browserHistory.push("/register/2");
        }
    }

    setProfileImage(event) {
        var self = this;
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                self.setState({profile: e.target.result})
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    render(){
        return(
            <div>
                <h1>Customize your account</h1>
                <p>You can come back to this later!</p>
                <form>
                    <div>
                        <p>Profile Picture:</p>
                        <div id = "basicInfo-profileImg-container">
                            <img id = "basicInfo-profileImg-img" src = {this.state.profile}/>
                        </div>
                        <input type="file" id="input" accept=".png, .jpg" onChange = {this.setProfileImage.bind(this)}/>
                    </div>
                    <div>
                        <p>Basic Info: </p>
                        <textarea ref = "about"
                                  defaultValue={this.state.about}/>
                    </div>
                </form>
                <Button onClick = {()=> browserHistory.push(this.props.redirect)}>Later</Button>
                <Button onClick = {this.uploadProfile.bind(this)}>Next</Button>
            </div>
        )
    }
}