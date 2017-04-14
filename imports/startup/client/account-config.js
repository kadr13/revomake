/**
 * Created by JohnBae on 3/28/17.
 */
import { Accounts } from 'meteor/accounts-base';

Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL',
});