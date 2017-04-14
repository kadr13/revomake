/**
 * Created by JohnBae on 4/6/17.
 */

import {SimpleSchema} from 'meteor/accounts-base';
import { Accounts } from 'meteor/accounts-base';

Meteor.methods({
    createAccount(email, username, pwd){
        var created = Accounts.createUser({email: email, password:pwd}) ? true : false;
        var id =  Accounts.findUserByEmail(email)._id;
        Meteor.users.update(id, {
            $set: {
                name: username
            }
        });
        return created;
    }
});

Meteor.methods({
    checkIfValidAccount (email, username, pwd, cPwd, facebook) {

        var email = checkEmail(email);
        var username = true;
        var pwd = !(pwd != cPwd || pwd < 6);

        return {
            username: username,
            email: email,
            password: pwd
        };
    }
});

function checkUsername(username){
    return Meteor.users.findOne({username: username}) || username.length == 0 ? false : true;
}

function checkEmail(email){
    return Meteor.users.findOne({'emails.address': email}) || email.length == 0 ? false : true;
}

Meteor.methods({
    addEmail(userId, email){
        var exists = Meteor.users.findOne({'emails.address': email});
        if(!exists) return Accounts.addEmail(userId, email);
        else throw new Meteor.Error("Email Addition Error");
    }
});

Meteor.methods({
    setUsername(userId, username){
        Meteor.users.update(userId, {
            $set: {
                name: username
            }
        });
    }
});

Meteor.methods({
    setPassword(userId, password, cPwd, maintain){
        var valid = !(password != cPwd || password < 6);
        if(valid) return Accounts.setPassword(userId, password, {logout: maintain});
        else throw new Meteor.Error("Invalid Password!");
    }
});

Meteor.methods({
    sendEmail(to, from, subject, text) {
        console.log("SENDING EMAIL TO:", to, " WITH STUFF LIKE:", text)
        Email.send({ to, from, subject, text });
    }
});

Meteor.methods({
    sendVerificationLink() {
        let userId = Meteor.userId();
        console.log("CHECKING USER:", userId);
        if ( userId ) {
            console.log("SENDING VERIFICATION EMAIL");
            return Accounts.sendVerificataionEmail( userId );
        }
    }
});

Accounts.onCreateUser(function(options, user) {

    if (user.services) {

        var service = _.keys(user.services)[0];

        if (service == 'facebook') {
            var email = user.services[service].email;
            var existingUser = Meteor.users.findOne({'emails.address': email});
            if(existingUser) {
                throw new Meteor.Error("email-exists","Email is already associated");
            }
            return user;
        }
        else if(service == 'password') {
            var email = user.emails[0].address;
            var existingUser = Meteor.users.findOne({'services.facebook.email': email});
            if(existingUser) {
                throw new Meteor.Error("email-exists","Email is already associated");
            }
            return user;
        }
    }
});

Meteor.publish('userData', function (userId) {
    // Select only the users that match the array of IDs passed in
    console.log("PUBLISHING", this.userId);
    const selector = {
        _id: this.userId
    };
    // Only return one field, `initials`
    const options = {
        fields: { name: 1 }
    };
    return Meteor.users.find(selector, options);
});