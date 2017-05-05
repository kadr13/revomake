import { Meteor } from 'meteor/meteor';

import '../imports/api/accounts/server/accountSentry';
import '../imports/api/accounts/server/publications';
import '../imports/api/accounts/cloudStorage';
import '../imports/api/accounts/methods';

import '../imports/startup/server/email';

Meteor.startup(() => {

});
