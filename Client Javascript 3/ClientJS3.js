var phone_number = prompt("Please enter your phone number and include dashes i.e. '612-555-1234'");

if (phone_number.charAt(3)==="-" && phone_number.charAt(7)==="-"){
	alert("Your phone number is valid")
} else {
	alert("Your phone number is not valid. Did you remember to include dashes?")
};



var birth_date = prompt("Please enter your birthday date in mm/dd/yy format");

if (birth_date.charAt(2)==="/" && birth_date.charAt(5)==="/") {
	alert("Your birthdate is valid. Thanks!")
} else {
	alert("Your birthdate is not valid. Did you remember to use the mm/dd/yy format?")
};



var postal_code = prompt("Please enter your ZIP code");

if ((postal_code.length === 5) || (postal_code.length === 10)) {
	alert("Your information is valid. Thanks")
} else {
	alert("Your information is not valid. Please enter your 5 or 9 digit ZIP code.")
};




var home_state = prompt("Please enter your state's 2-letter abbreviation.");

if (home_state.length === 2 && home_state === home_state.toUpperCase()) {
	alert ("Thank you, your information is valid")
} else {
	alert ("Your information is invalid. Remember to use the 2-letter abbreviation and all capital letters.")
};




var marital_status = prompt("Are you married? Yes/No");

if (marital_status.toLowerCase() === "yes" || marital_status.toLowerCase() === "no") {
	alert("Thank you for your input")
} else {
	alert("Your information is not valid. Please reply with a yes or a no")
};
