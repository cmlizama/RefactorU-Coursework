
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

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

var destinationsArray = [
	{
		name: "Seville",
		info: "Seville is a Spanish city, it is the capital and largest city of the autonomous community of Andalusia and the province of Seville. It is situated on the plain of the River Guadalquivir. The inhabitants of the city are known as sevillanos (feminine form: sevillanas) or hispalenses, after the Roman name of the city, Hispalis.",
		next : 1
	},
	{
		name: "Canary Islands",
		info: "The name Islas Canarias is likely derived from the Latin name Canariae Insulae, meaning 'Island of the Dogs', a name applied originally only to Gran Canaria. According to the historian Pliny the Elder, the Mauretanian king Juba II named the island Canaria because it contained 'vast multitudes of dogs of very large size'",
		next : 2
	},
	{
		name: "Cape Verde",
		info: "The Republic of Cape Verde, is an island country, spanning an archipelago of 10 islands located in the central Atlantic Ocean, 570 kilometres (350 miles) off the coast of Western Africa. The islands, covering a combined area of slightly over 4,000 square kilometres (1,500 sq mi), are of volcanic origin and while three of them (Sal, Boa Vista and Maio) are fairly flat, sandy and dry, the remaining ones are generally rockier and have more vegetation.",
		next : 3
	},
	{
		name: "Strait of Magellan",
		info: "Ferdinand Magellan, a Portuguese sailor in the service of Charles I of Spain, became the first European to navigate the strait in 1520 during his global circumnavigation voyage.",
		next : 4
	},
	{
		name: "Guam",
		info: "The Chamorros, Guam's indigenous people, first populated the island approximately 4,000 years ago. The island has a long history of European colonialism, beginning with Ferdinand Magellan's Spanish expedition landing on March 6, 1521. The first colony was established in 1668 by Spain with the arrival of settlers including Padre San Vitores, a Catholic missionary. For more than two centuries Guam was an important stopover for the Spanish Manila Galleons that crossed the Pacific annually.",
		next : 5
	},
	{
		name: "Philippines",
		info: "The arrival of Ferdinand Magellan in 1521 marked the beginning of an era of Spanish interest and eventual colonization. In 1543, Spanish explorer Ruy López de Villalobos named the archipelago Las Islas Filipinas in honor of Philip II of Spain. The Spanish Empire began to settle with the arrival of Miguel López de Legazpi from New Spain (present day-Mexico) in 1565 who established the first Spanish settlement in the archipelago, which remained a Spanish colony for more than 300 years.",
		next : "end"
	}
]



//app.get('/', routes.index);
app.get('/users', user.list);

// app.get('/attend', function(req, res){
// 	res.render('index')})

app.get('/', function(req, res) {
	var currentStop = destinationsArray[0];
	res.render('index', {name : currentStop.name, info : currentStop.info})
});



app.get('/travelOn', function(req, res){
	var landing = req.query.landing;
	res.send(destinationsArray[landing]);
})



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
