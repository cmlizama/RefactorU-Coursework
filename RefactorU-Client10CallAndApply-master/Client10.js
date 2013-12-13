$(function() {
	var person1 = {firstName: 'Marvin', age: 42, color: 'green'};
	var person2 = {firstName: 'Zaphod', age: 42000000000, color: 'peachpuff'};
	var person3 = {firstName: 'Gollum', age: 589, color: 'green'};

	var personList = [person1, person3];

	var sayHello = function() {
	 alert('Hello, ' + this.firstName);
	};

	var greetOneAnother = function(a, b) {
	 alert("{0}, meet {1} and {2}".supplant([this.firstName, a.firstName, b.firstName]));
	};


	//supplant function
	if (!String.prototype.supplant) {
	    String.prototype.supplant = function (o) {
	        return this.replace(
	            /\{([^{}]*)\}/g,
	            function (a, b) {
	                var r = o[b];
	                return typeof r === 'string' || typeof r === 'number' ? r : a;
	            }
	        );
	    };
	}

	//My written code for the exercise below

    //sayHello.call(person1);
	// sayHello.call(person2);
	// sayHello.call(person3);
	//greetOneAnother.apply(person2, personList);


		function clickButtons () {
			var buttonClicked = $(this).text();
			$('#buttontext').text(buttonClicked);
			alert(buttonClicked);
		};

		//clickButtons.call($('.btn')); //Prints the text in each button successively
		//clickButtons($('.btn-primary')); // alerts an empty text field
		
		clickButtons.call($('.btn-primary'));

		$('button').on('click', clickButtons)
		

 
});