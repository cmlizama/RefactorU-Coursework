

var victimListName = [];

var victimListPhone = [];

var victimListStreet = [];



x= true
 
while (x===true){
    victimListName.push(prompt("What is the victim's name?"));
    victimListPhone.push(prompt("What is their phone number?"));
	victimListStreet.push(prompt("What is their street address?"));
	var x = confirm("Do you have any other people to register?");
 } 
    
 


 console.log(victimListStreet, victimListPhone, victimListName);