/* Author: Eric Pinedo
 * Date: August 3, 2017
 * File Description: The main file which will hold all of the 'phone canon' logic 
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


var accountSid = 'AC8e527c5ca687d9ebacdebb42e0a73fe6';
var authToken = 'b79909cc7e280c31d75408ecd3dd1cf0';


var numberToCall 


var client = require('twilio')(accountSid, authToken);

client.calls.create({
    url: "http://demo.twilio.com/docs/voice.xml",
    to: "+14155551212",
    from: "+15017250604"
}, function(err, call) {
    process.stdout.write(call.sid);
});