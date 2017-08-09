/* Author: Eric Pinedo
 * Date: August 3, 2017
 * File Description: The main file which will hold all of the 'phone flooding' logic 
 */






/** Basic API logic **/

//using twilio



var info = require('./config.js');
var prompts = require('./prompts.js');
console.log(info);

var accountSid = info.MY_KEY;
var authToken = info.SECREY_KEY;



var client = require('twilio')(accountSid, authToken);

 
const readline = require('readline');

const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var hello = prompts.enterNumber + prompts.numberStart;
read.question( hello, (answer) => {

  console.log("Number entered: " answer);

 read.close();
});






while( true ) { 

	//loop fromNumbers

	Call( fromNumber )

	//error handling


}

function Call( fromNumber ){
	client.calls.create({
    	url: "http://demo.twilio.com/docs/voice.xml",
    	to: answer
    	from: fromNumber
	}, function(err, call) {
    	process.stdout.write(call.sid);
	});

}

