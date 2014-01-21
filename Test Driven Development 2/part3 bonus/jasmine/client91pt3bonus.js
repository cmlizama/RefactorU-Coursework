var fineArray = [1, 2, 3];


var map = function(arr, f) {
 var output = [];
 for(var i=0; i<arr.length; i++) {
  output.push(f(arr[i]));
  return output;
 }
};

var filter = function(arr, f) {
 var output = [];
 for(var i=0; i<arr.length; i++) {
  if(f(arr[i])) {
   output.push(i);
  }
  return output;
 }
};


var doubleNumb = function(n) {
   (n*2);
};

var sqr = function(n) {
   return n*n ;
}