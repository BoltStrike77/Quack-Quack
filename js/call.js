// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = "AC269a71fe39b369694a3c5c578229f674";
const authToken = "3f822b3af5ecaf17e7bde0de48e9d7aa";
const client = require('twilio')(accountSid, authToken);

function send_message() {
    client.messages
        .create({body: 'Quack Quack you duck', from: '+15017122661', to: '+14694961009'})
        .then(message => console.log(message.sid));
};

