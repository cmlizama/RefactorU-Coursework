describe("Module", function() {
  it("should do something", function() {
    expect(true).toEqual(true);
  });
});



describe("join", function() {
	it( "(['one', 'two', 'three'], ' and ') should equal ('one and two and three')  ", function() {
		expect(join(['one', 'two', 'three'], ' and ')).toBe('one and two and three');
	} );
	
	it( " ", function() {
		expect(join(['one', 'two', 'three'], ' ')).toBe('one two three');
	} );

    it( " ", function() {
		expect(join(['one', 'two', 'three'], ' & ')).toBe('one & two & three');
	} );

});