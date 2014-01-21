

var users_word = prompt("Enter any word");



alert ("You entered: " + users_word + 
	'\n' + "Your word has " + users_word.length + " characters" + 
	'\n' + "The third letter is " + users_word.charAt(2) + 
	'\n' + "All lowercase: " +  users_word.toLowerCase()  + 
	'\n' +  "All uppercase: " + users_word.toUpperCase() +  
	'\n' + "A good " + users_word + " is hard to find" +  
	'\n' + "The mid-section is " + users_word.substring(1,5)) ;