
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

app.get('/', routes.index);
app.get('/users', user.list);

//Part 1
app.get('/hi', function(req,res){
	res.send("<h1>Yo yo yo</h1>");
    });
app.get('/thanks', function(req,res){
	res.send("<h1>ty 4 looking at my webpage :)</h1>");
    });
app.get('/bye', function(req,res){
	res.send("<h1>come back soon (^_^)</h1>");
    });


//part 2
app.get('/form', function(req, res){
     fs.readFile(__dirname + '/EXPRESSive.html', function(err, data){
  	if(err){
        throw err
  	}else{
  		res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(data)
         }
    });
});



app.post('/formsubmit', function(req, res){
	res.send(req.body.feedback)
});

app.post('/success', function(req, res){
	res.send('<h1> ... great job!</h1>')
});




http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
