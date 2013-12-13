//client11.js

//name should be a string, calories should be a number value, isVegan,
// isGlutenFree, and isCitrusFree should be a boolean
function FoodItem(name, calories, vegan, glutenFree, citrusFree){
	this.name = name; 
	this.calories = calories;
	this.isVegan = vegan; 
	this.isGlutenFree = glutenFree; 
	this.isCitrusFree = citrusFree; 
};


//instantiate 3 FoodItems
var pie = new FoodItem("Pie", 400, false, false, true);
var orangePopsicle = new FoodItem("Orange Popsicle", 100, true, true, false);
var oatmealCookie = new FoodItem("Oatmeal Cookie", 200, false, false, true);


//Takes the boolean value of the dietary restrictions and converts to a Yes or No string
var truthify = function (property) {
	if (property === true){
		return "Yes";
	}else if (property === false){
		return "No";
	} else {

	}
};


//toString should return FoodItem's properties in human-readable format
 FoodItem.prototype.toString = function() {
	return "Name: " + this.name+", Calories: "+this.calories+", Vegan: "+truthify(this.isVegan)+", Gluten Free: "+ truthify(this.isGlutenFree) + ", Citrus Free: " + truthify(this.isCitrusFree);
};


//checking if toString works as intended
// console.log(pie.toString());
// console.log(orangePopsicle.toString());
// console.log(oatmealCookie.toString());



//Part 2 of the exercise:


//name should be a string, description should be a string, items should be an array
function Drink(name, description, items){
	this.name = name;
	this.description = description;
	this.items = items;
};

//name should be a string, description should be a string, price should be a number items should be an array
//functions to check if food complies with different diets
//the values isGlutenFree, isVegan, etc are booleans  
function Plate(name, description, price, items){
    this.name = name;
    this.description = description;
    this.price = price;
    this.items = items;

Plate.prototype.checkGlutenFree = function(){
	for(var i=0; i<this.items.length; i++){
		if (this.items[i].isGlutenFree) {
        return false
		}else{
			return true
			console.log("This plate is not Gluten Free")
		}
	}
};

Plate.prototype.checkVegan = function(){
	for(var i=0; i<this.items.length; i++){
		if (this.items[i].isVegan) {
        return false
		}else{
			return true
			console.log("This plate is not Vegan")
		}
	}
};

Plate.prototype.checkCitrusFree = function(){
	for(var i=0; i<this.items.length; i++){
		if (this.items[i].isCitrusFree) {
        return false
		}else{
			return true
			console.log("This plate is not Citrus Free")
		}
	}
};
};

//plate should be an array
function Order (plate) {
	this.plate = plate;
};

//plate should be an array
function Menu (plate) {
	this.plate = plate;
};

//name should be a string, description should be a string, menu should be an array (of arrays?)
function Restaurant(name, description, menu) {
	this.name = name;
	this.description = description;
	this.menu = menu;
};

//dietaryPreference should be a string (the string will be converted to boolean and back)
function Customer(dietaryPreference){
	this.dietaryPreference = dietaryPreference;
};



//make a toString for each function, some of which have to call others


Drink.prototype.toString = function(object){
	 return "Name: " + this.name + " Description: " + this.description+ " Items: " + this.items;
};

Plate.prototype.toString = function(object){
	return "Name: " + this.name + " Description: " + this.description+ " Price: " + this.price + " Ingredients: " +this.items;
};

Order.prototype.toString = function(object){
	return "plate: " + this.plate;
};

// Menu.prototype.toString = function(object){
//     return "plate: " + this.plates;
// };

Menu.prototype.toString = function() {
	var plateArray = [];
	for (var i=0; i < plateArray.length; i++){
		plateArray.push(this.plate[i].name)
	}

	stringifyPlateArr = [];
	for(var i=0; i<this.plate .length; i++)
	stringifyPlateArr.push(this.plate[i].toString())
return "Menu: " + plateArray.join() + stringifyPlateArr.join();
};

Restaurant.prototype.toString = function(object){
    console.log(this.menu);
    return "Name: " + this.name + " Description: " + this.description + " Menu: " + toString(myMenu);
};

Customer.prototype.toString = function(object){
    return "Dieterary Preference: " + this.dietaryPreference;    
};

//ingredients:
var margarita = new FoodItem("Margarita", 300, true, true, false);
var chips = new FoodItem("Tortilla chips", 200, true, true, true);
var guacamole = new FoodItem("Guacamole", 200, true, true, false);
var burrito = new FoodItem("Burrito", 500, true, false, true);



//Instantiate a burrito plate, guacamole plate, and a margarita drink
var margaritaDrink = new Drink("Margarita", "It's a margarita with alcohol and stuff", [margarita]);

var beanBurrito = new Plate("Burrito Special", "A bean burrito", 7, [burrito]);

var guacPlate = new Plate("Guac Plate for 2", "Chips and spicy guac to share", 4, [chips, guacamole]);


var myMenu = new Menu([beanBurrito, guacPlate, margarita]);




var myRestaurant = new Restaurant("Chez Sisyphus", "A cool place", myMenu);

//testing calls
// console.log("More tests:")
// console.log(margaritaDrink.toString());
// console.log(beanBurrito.toString());
//console.log(guacPlate.toString());
console.log(myMenu.toString());
console.log(myRestaurant.toString());













