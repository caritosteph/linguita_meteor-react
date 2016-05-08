import { Meteor } from 'meteor/meteor';
/*global Chats*/
/*global Emojis*/
Meteor.startup(() => {
  // code to run on server at 
      if (!Meteor.users.findOne()) {
        for (var i = 1; i < 2; i++) {
            var email = "user" + i + "@test.com";
            var username = "user" + i;
            var avatar = "ava" + i + ".png"
            console.log("creating a user with password 'test123' and username/ email: " + email);
            Meteor.users.insert({
                profile: {
                    username: username,
                    avatar: avatar
                },
                emails: [{
                    address: email
                }],
                services: {
                    password: {
                        "bcrypt": "$2a$10$I3erQ084OiyILTv8ybtQ4ON6wusgPbMZ6.P33zzSDei.BbDL.Q4EO"
                    }
                }
            });
        }
    }
});

Meteor.publish("users", function() {
    return Meteor.users.find();
});
Meteor.publish("chats", function() {
    if (this.userId) {
        return Chats.find();

    }
    return;
});
Meteor.publish('emojis', function() {
  return Emojis.find();
});