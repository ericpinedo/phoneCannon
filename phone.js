/* Author: Eric Pinedo
 * Date: August 3, 2017
 * File Description: The main file which will hold all of the 'phone cannon' logic 
 */






/** Basic API logic **/

//using twilio



var info = require('./config.js');
console.log(info);

var accountSid = info.MY_KEY;
var authToken = info.SECREY_KEY;




var client = require('twilio')(accountSid, authToken);


while( true ) { 
client.calls.create({
    url: "http://demo.twilio.com/docs/voice.xml",
    to: info.to,
    from: info.from
}, function(err, call) {
    process.stdout.write(call.sid);
});

}