
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

var fs = require('fs');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//app.get('/', routes.index);
app.get('/users', user.list);


//Node2.js

// Objective:
// Create a form that submits data to your Express web server. 
// Output the submitted data in Terminal.

// Requirements:
// Create a web app with node
// Create an index.html file with a form
// Submit the form to the "/" endpoint
// Log the data in Terminal when the form is submitted

// Bonus:
// When the form is submitted render a success message on the page.


app.get('/', function(req, res){
     fs.readFile(__dirname + '/index.html', function(err, data){
  	if(err){
        throw err
  	}else{
  		res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(data)
         }
    });
});

app.post('/formsubmit', function(req, res){
	console.log(req.body)
	res.redirect('/success')
});

app.get('/success', function(req, res){
	res.send('<h1> ... great job!</h1>')
});



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
