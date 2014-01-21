//Part 1: "Follow the instructions on nodejs.org under "An example: Webserver" to create a simple web server"

// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World\n');
// }).listen(1337, '127.0.0.1');
// console.log('Server running at http://127.0.0.1:1337/');


//Part 2:
//1.Change the content that is returned to the client with res.end(...) to a string of HTML. 
//Request the page again in your browser. What is the output? Is it what you expected?
//2.Change the response header Content-Type from text/plain to text/html. Request the page again in your browser.
// How did the output change?

// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('<h1>I love 2 code node</h1>\n');
// }).listen(1337, '127.0.0.1');
// console.log('Server running at http://127.0.0.1:1337/');


//Part 3


// var fs = require('fs');

// var combTextFile = fs.readFileSync('data.txt')

// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end(combTextFile);
// }).listen(1337, '127.0.0.1');
// console.log('Server running at http://127.0.0.1:1337/')


//Part 4


var fs = require('fs');
var http = require('http');

http.createServer(function (req, res) {

  fs.readFile(__dirname + '/data.txt', function(err, data){
  	if(err){
        throw err
  	}else{
  		res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(data)
         }
    });
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/')