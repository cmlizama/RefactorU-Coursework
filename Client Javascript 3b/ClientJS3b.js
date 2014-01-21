victimNumber = prompt("How many disaster victims do you need to enter?");

var victimListName = [];

var victimListPhone = [];

var victimListStreet = [];

for (var i=0; i<victimNumber; i++) {
	victimListName.push(prompt("What is the victim's name?"))
	victimListPhone.push(prompt("What is their phone number?"))
	victimListStreet.push(prompt("What is their street address?"))
};

console.log(victimListStreet, victimListPhone, victimListName);



volunteerNumber = prompt("How many volunteers do you need to enter?");

var volunteerListName = [];

var volunteerListPhone = [];

var volunteerListStreet = [];

for (var i=0; i<volunteerNumber; i++) {
	volunteerListName.push(prompt("What is the volunteer's name?"))
	volunteerListPhone.push(prompt("What is their phone number?"))
	volunteerListStreet.push(prompt("What is their street address?"))
};

console.log(volunteerListStreet, volunteerListPhone, volunteerListName);


console.log(victimNumber, volunteerNumber, victimListName.join(), + "," +  volunteerListName.join());
alert(victimNumber + " victims" + '\n' + volunteerNumber + " volunteers" + '\n' + "Victims: " + victimListName.join() + '\n' + "Volunteers: " + volunteerListName.join());