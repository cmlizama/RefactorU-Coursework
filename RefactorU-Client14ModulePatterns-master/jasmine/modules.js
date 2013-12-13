//Code for Pt. 1
var Repeater = {
	
	repeatString: function repeatString(str, n){
		 return new Array( n + 1 ).join(str);
	},

	repeatFunction: function repeatFunction(funct, n){
	var output = "";
	for(var i = 0; i < n; i++){
		output += funct();
	}	
	return output;
		}
};


//Code for Pt. 2
var Repeater = (function Repeater() {
	var count = 0;

	return {

			repeatString: function repeatString(str, n){
				 return new Array( n + 1 ).join(str);
				},
	
			repeatFunction: function repeatFunction(funct, n){
				var output = "";
				for(var i = 0; i < n; i++){
					output += funct();
				}	
					return output;
				},

			repeatMore: function repeatMore(str) {
				var ouputMore = "";
				for (var i=0; i<count; i++) {
					ouput += str;
				}
				count+=1;
				return ouputMore;
			}

			};
})();

//Code for Pt. 3

var Repeater = (function Repeater() {
	var count = 0;

			repeatString: function repeatString(str, n){
				 return new Array( n + 1 ).join(str);
				}
	
			repeatFunction: function repeatFunction(funct, n){
				var output = "";
				for(var i = 0; i < n; i++){
					output += funct();
				}	
					return output;
				}

			repeatMore: function repeatMore(str) {
				var ouputMore = "";
				for (var i=0; i<count; i++) {
					ouputMore += str;
				}
				count+=1;
				return ouputMore;
			}

			repeatFunctionTwice: function repeatFunctionTwice(func){
				var outputTwice="";
				for(var i = 0; i < 2; i++){
					outputTwice += repeatFunction();
				}
				return outputTwice;
			}

	return {
		repeatFunction : repeatFunction,
		repeatString : repeatString,
		repeatMore : repeatMore
		}
})();














