describe("Module", function() {
  it("should do something", function() {
    expect(true).toEqual(true);
  });
});

describe('repeatString', function() {
 it('should return a string repeated n times', function() {
  expect(Repeater.repeatString('cat', 3)).toEqual('catcatcat');
 });
});

describe('repeatFunction', function() {
 it('should call a function n times', function() {
  var str = 'oh';
  var write = function() { str += 'hi'; };
  Repeater.repeatFunction(write, 3);
  expect(str).toEqual('ohhihihi');
 });
});

describe("Variable Check", function(){
	it('count should not be global', function(){
		expect(typeof count).toBe('undefined');
	});
});

describe('Repeater.repeatMore', function(){
  it('should print string n+1 times', function(){
    expect(Repeater.repeatMore('cat')).toEqual('cat');
  })
})

describe('Repeater.repeatMore', function(){
  it('should print string n+1 times', function(){
    expect(Repeater.repeatMore('dog')).toEqual('dogdog');
  })
})

// describe('check repeatFunctionTwice', function(){
//   it('should access repeatFunction', function(){
//     expect(repeatFunctionTwice()).toEqual();
//   })
// })