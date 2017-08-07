/* Author: Eric Pinedo
 * Date: August 3, 2017
 * File Description: The main file which will hold all of the 'phone cannon' logic 
 */



/* 
var prompts = require('./prompts.js');
console.log(prompts.login(hello));
 
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question( hello, (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});
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