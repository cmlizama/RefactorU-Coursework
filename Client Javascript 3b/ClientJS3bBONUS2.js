victimNumber = prompt("How many disaster victims do you need to enter?");

var victimListName = [];

var victimListPhone = [];

var victimListStreet = [];

for (var i=0; i<victimNumber; i++) {
	victimListName.push(prompt("What is the victim's name?"));
	victimListPhone.push(prompt("What is their phone number?"));
	victimListStreet.push(prompt("What is their street address?"));
}

console.log(victimListStreet, victimListPhone, victimListName);



volunteerNumber = prompt("How many volunteers do you need to enter?");

var volunteerListName = [];
var volunteerListPhone = [];
var volunteerListStreet = [];

for (var i=0; i<volunteerNumber; i++) {
	volunteerListName.push(prompt("What is the volunteer's name?"));
	volunteerListPhone.push(prompt("What is their phone number?"));
	volunteerListStreet.push(prompt("What is their street address?"));
}

console.log(volunteerListStreet, volunteerListPhone, volunteerListName);


console.log(victimNumber, volunteerNumber, victimListName.join(), + "," +  volunteerListName.join());
alert(victimNumber + " victims" + '\n' + volunteerNumber + " volunteers" + '\n' + "Victims: " + victimListName.join() + '\n' + "Volunteers: " + volunteerListName.join());





//Looks up the name of a victim and tries to find a volunteer on their street//
var victimSearch = prompt("Enter the name of a victim to look for information.");

//find index of victim's name
var fvs = victimListName.indexOf(victimSearch);

var matchStreets = [];

//find index of the victim's street
for (i=0; i>victimListStreet.length; i++) {
	if (i === fvs) {
		matchStreets.push(i);
	} }



var matchedVolunteers = [];

//match the common-street index with the name of the volunteer
for(i = 0; i>matchStreets.length; i++){
	if ( volunteerListName[i] ===  matchStreets[i]) {
		matchedVolunteers.push();
	} 
	}

console.log(matchedVolunteers.join());
alert(matchedVolunteers.join());


