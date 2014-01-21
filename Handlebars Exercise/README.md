README.md

Objective
Create a data driven UI using Handlebars

Skills
Creating an Express app
Understanding the relationship between client and server.
Creating Handebars templates
AJAX
jQuery
Resources
handlebarsjs.com
dummy data
Requirements
Part I

Setup an Express server
Define an Express route, "/search" in your Express app
Add the dummy data object listed above as a variable inside of your "/search" route
Create a form using Jade that contains a search input (like Google)
Add a div below it with the ID "results"
Create a Handlebars template for your "results" div

When a user enters a value into the search box and presses "Enter". Send the entered search term via AJAX to your "/search" endpoint
In your "/search" route take the search term that was sent to your server and find its corresponding description in the "data" object.
Use res.send to send the JSON back to the client.
When you recieve the response from the server, compile your Handlebars template Handlebars.compile, passing the data to it.
Take the resulting Handlebars string and append it to your results div using jQuery.
Bonus

Get really fancy with the search engine
Modify your code so that you are able to search for any text within the "dummy data" object.


**Pseudo Code**
##Application flow
*Page loads
*Display search bar
*Enter search query text
*Press enter to submit
*Return search results

##Technical Application Flow
*Page loads - ("/" route) Making a GET request, render the Jade via res.render("index", if jade template was called index.jade)
*Press Enter - listen for a keyup event (or capture form submit)
*Capture the value that was entered in the input box (.val())
*Send the value to the server via AJAX (this is on the client-side) $.get or $.post or $.ajax or $.getJSON
*Hit the specific route on the server that AJAX is requesting
*Get the data from the querystring or body based on what type of request it was (req.query or req.body)
*Search through dummy data for the search term
* Send the value back to the client
*Display the data using a Handlebars template
	*Get the template using .html() (jQuery)
	*Run Handlebars.compile on value received by .html()
	*Pass the data to the compiled template
	*Append the resulting html string into the DOM



code
	if(key in obj){
}



put json in app.js as variable OR as a flat file and use fs.readfile(__dirname + '/dummyData.JSON', function(err, data){
	
});








